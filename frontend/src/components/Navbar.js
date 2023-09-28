import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  const tools = [
    {"name" : "Sherloq",
     "imgurl" : "https://github.com/GuidoBartoli/sherloq/raw/master/logo/sherloq.png",
     "category" : "Image Forensics",
     "url" : "/sherloq"
    },
    {"name" : "Ghiro",
     "imgurl" : "https://camo.githubusercontent.com/c8404b9b0032cc6b04c9055a43aecd2bdbb12108491a4ab8c4e34dfaf0fe212e/687474703a2f2f7777772e676574676869726f2e6f72672f6173736574732f696d672f6c6f676f5f315f6f726967696e616c2e706e67",
     "category" : "Image Forensics",
     "url" : "/"
    },
    {"name" : "ExifTool",
     "imgurl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fpOI5Ual3sEk-UtZcaBYxTwiC3jWjPAboQ&usqp=CAU",
     "category" : "Metadata Extraction",
     "url" : "/exiftool"
    },
    
    {"name" : "FFmpeg",
     "imgurl" : "https://images.imyfone.com/filme/video/ffmpeg-icon.png",
     "category" : "Video Forensics",
     "url" : "/ffmpeg"
    },
    
    {"name" : "Steghide",
     "imgurl" : "https://mcarle.io/project/steganography/logo.png",
     "category" : "Steganography",
     "url" : "/steghide"
    }
  ]
  return (
    <div className='navbar bg-sky-900 text-white h-14 flex justify-center items-center space-x-20'>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Search tools={tools} />
    </div>
  )
}

export default Navbar