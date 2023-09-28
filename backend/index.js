const express = require('express');
const childProcess = require('child_process');
const { spawn } = require('child_process');
const multer = require('multer');
const app = express();
const cors = require('cors');
const fs = require('fs');


// const corsOptions ={
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }
app.use(cors()) // Use this after the variable declaration

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // using Date to create unique file names. extract the part before the extension (.mp4) add a "_" followed by Date.now() and then the extension of the file.
    cb(null, file.originalname.substring(0, file.originalname.lastIndexOf(".")) + "_" + Date.now() + file.originalname.substring(file.originalname.lastIndexOf(".")));
  }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("DeepCytes backend application.");
})

app.post('/exiftool/image', upload.single('image'), function (req, res) {
    const filename = '../uploads/' + req.file.filename;
    console.log(`Analyzing metadata for the file : ${filename}`);
    childProcess.exec(`cd exiftool && exiftool -j ${filename}`, function (error, stdout, stderr) {
        if (error) {
            res.status(500).send({ error: error.message });
        } else if (stderr) {
            res.status(500).send({ error: stderr });
        } else {
            const metadata = JSON.parse(stdout)[0];
            res.status(200).send({ metadata: metadata });
        }
    });
});

app.post('/ffmpeg/video', upload.single('video'), function (req, res) {
  const filename = 'uploads/' + req.file.filename;

  const ffmpeg = spawn('ffmpeg', [
    // for each parameter, if the user has not specified, we keep it as the default value. we check if the user wants to change that attribute or not using req.body.attribute and if it is !== undefined, that means user wants to change it.

    '-i', `${filename}`,  // input file name
    
    '-crf',  // resolution increase or decrease, default we keep as 20
    req.body.resolution !== undefined ? `${req.body.resolution}` : '20',

    '-filter:a',  // audio filter, default is 1
    req.body.volume !== undefined ? `volume=${req.body.volume}` : 'volume=1',
    
    '-filter:v',  // video filter for cropping. if not specified, we crop nothing
    req.body.crop !== undefined ? `crop=w=${req.body.crop.split(" ")[0]}:h=${req.body.crop.split(" ")[1]}` : 'crop=w=1*in_w:h=1*in_h',

    // convert option if specified, we output the file with the extension specfied in req.body.convert. Else we keep the same file name
    req.body.convert !== undefined ? `output_${req.file.filename.substring(0, req.file.filename.lastIndexOf(".")) + req.body.convert}` : `output_${req.file.filename}` 
  ]);

  
  ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ffmpeg.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ffmpeg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    // send the file as a downloadable response. res.download(pathToFile, filename)
    // again, we need to check the extension that the user wants and send the file accordingly 
    res.download(req.body.convert !== undefined ? `output_${req.file.filename.substring(0, req.file.filename.lastIndexOf(".")) + req.body.convert}` : `output_${req.file.filename}`, req.body.convert !== undefined ? `output${req.body.convert}` : `output${req.file.filename.substring(req.file.filename.lastIndexOf("."))}`);

  });
  
});


app.post('/steghide/image/encrypt', upload.single('image'), function (req, res) {
  const filename = 'uploads/' + req.file.filename;

  fs.writeFile('secret.txt', req.body.message, function (err) {
    if (err) throw err;
    
    childProcess.exec(`steghide embed -ef secret.txt -cf "${filename}" -p ${req.body.paraphrase}`, function (error, stdout, stderr) {
      if (error) {
        res.status(500).json({ error: error.message });
      } 
      
      else if (stderr) {
        res.status(500).json({ error: stderr });
      }
      
      else {
        fs.unlink("secret.txt", (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
        res.download(`${filename}`, filename);
      }
   });
  });
});

app.post('/steghide/image/decrypt', upload.single('image'), function (req, res) {
  const filename = 'uploads/' + req.file.filename;

  childProcess.exec(`steghide extract -sf "${filename}" -xf extractedmsg.txt -p ${req.body.paraphrase}`, function (error, stdout, stderr) {
    if (error) {
      console.log(`passphrase wrong`)
      res.status(200).json({ success : false, message: "Could not extract any data with that passphrase" });
    } 
    
    else {
      childProcess.exec("type extractedmsg.txt", function (error, stdout, stderr) {
        if (error) {
          console.log(`error`)
          res.status(500).json({ error: error.message });
        } 
        
        else {
          fs.unlink("extractedmsg.txt", (err) => {
            if (err) {
              console.error(err);
              return;
            }
          });
          res.status(200).json({success : true, message : stdout});
        }
      })
    }
  });
});

app.get('/sherloq/open', function(req, res) {
	childProcess.exec("python F:\\sherloq\\gui\\sherloq.py", function (error, stdout, stderr) {
        if (error) {
          console.log(`error`)
          res.status(500).json({ success: false, error: error.message });
        } 
        
        else {
          res.status(200).json({success : true});
        }
      })
});

app.listen(process.env.PORT || 5000, function () {
    console.log('DeepCytes backend app listening on port 5000!');
});
