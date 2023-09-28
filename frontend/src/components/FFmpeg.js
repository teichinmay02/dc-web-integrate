import React, { useState } from "react";
import { ToastContainer, toast, Slide } from 'react-toastify';

const FFmpeg = () => {
  const [volumeCheck, setVolumeCheck] = useState(false);
  const [convertCheck, setConvertCheck] = useState(false);
  const [changeResolution, setChangeResolution] = useState(false);
  const [cropCheck, setCropCheck] = useState(false);
  const [changeSharpness, setChangeSharpness] = useState(false);
  const customToastStyle = {
    backgroundColor: '#cfcccc', // replace with your desired color
    color: "#242323"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info('Your file will be downloaded when complete. This may take a few minutes', {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light"
      });

    let ffmpegvideo = document.getElementById("ffmpegvideo");
    if (ffmpegvideo.value !== "") {
      let formData = new FormData();
      formData.append("video", ffmpegvideo.files[0]);

      // check if the volume checkbox is checked. if yes, then append the field with the value in the volume-text input field
      if (volumeCheck && document.getElementById("volume-text").value !== undefined) {
        formData.append("volume", document.getElementById("volume-text").value);
      }

      // check if the convert checkbox is checked. if yes, append the field convert with the checked radio button's value
      if (convertCheck && document.querySelector("input[name='list-radio-convert :checked") !== null) {
        formData.append(
          "convert",
          document.querySelector("input[name='list-radio-convert']:checked")
            .value
        );
      }

      // check if the change resolution checkbox is checked. if yes, append the field resolution with the value in the checked radio button.
      if (changeResolution && document.querySelector("input[name='list-radio-resolution']:checked") !== null) {
        formData.append(
          "resolution",
          document.querySelector("input[name='list-radio-resolution']:checked")
            .value
        );
      }

      // check if the crop checkbox is checked. if yes, append the field crop with the string value of width and height seperated by a space.
      if (cropCheck && document.getElementById("crop-width").value !== undefined && document.getElementById("crop-height").value !== undefined) {
        formData.append("crop",
          document.getElementById("crop-width").value +
            " " +
            document.getElementById("crop-height").value
        );
      }

      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}ffmpeg/video`, {
        method: 'POST',
        body: formData
      });
      
      // the api returns the repsonse with the video afer modifications.
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      // we need to see whether the convert fiel type option is checked or not. if yes, we need to output the file with that extension. else we need to output the file with the same extension as the video input file. ffmpeg.files[0] has the name field which has the uploaded file name. We use this to get the substring after the last "." basically the file extension.
      link.download = convertCheck ? `output${document.querySelector("input[name='list-radio-convert']:checked")
      .value}` : `output${ffmpegvideo.files[0].name.substring(ffmpegvideo.files[0].name.lastIndexOf("."))}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.location.reload();  // reload the page to clear all the inputs.
    }
  };

  return (
    <>
      <div className="dashboard-width px-32 mt-8 my-24">
        <h2 className="para text-2xl font-semibold">FFmpeg</h2>
        <div className="para my-4 text-justify">
          FFmpeg is a free and open-source command-line tool used for handling
          multimedia files, including video, audio, and images. It is a powerful
          tool that can be used to perform a wide range of tasks, such as
          encoding, decoding, transcoding, filtering, and streaming multimedia
          files.
        </div>

        <div className="para my-4 text-justify">
          In image forensics, FFmpeg can be used to extract frames from video
          files and analyze them for forensic purposes. For example, if a video
          file is suspected of containing important information, such as a
          license plate number or the face of a suspect, FFmpeg can be used to
          extract individual frames from the video and analyze them in detail.
        </div>

        <div className="para my-4 text-justify">
          For cyber security analysts, FFmpeg can be used to transform videos to
          a better video and audio clarity, reduce background noises, and a lot
          more. FFmpeg can also be used to detect and analyze compression
          artifacts in images and videos. These artifacts can be created by
          various compression techniques used to reduce the file size of
          multimedia files, and they can provide clues about the source and
          processing history of an image or video.
        </div>

        <div className="w-[90%] mx-auto my-8">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label
              htmlFor="formFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Upload file
            </label>
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="ffmpegvideo"
            />

            <div className="task mt-4 mb-8">
              <div className="flex items-center mb-4 checkbox-div my-2">
                <input
                  id="volume-multiplier"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={volumeCheck}
                  onChange={() => setVolumeCheck(!volumeCheck)}
                />
                <label
                  htmlFor="volume-multiplier"
                  className="ml-2 font-medium text-gray-900"
                >
                  Increase the audio output by multiplying it with a factor
                </label>
              </div>

              <input
                className={`border-b-2 border-gray-600 focus:outline-none ${
                  volumeCheck ? "block" : "hidden"
                }`}
                id="volume-text"
                type="text"
                placeholder="Multiplier value"
              />
            </div>

            <div className="task mt-4 mb-8">
              <div className="flex items-center mb-4 checkbox-div my-2">
                <input
                  id="convert-file"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={convertCheck}
                  onChange={() => setConvertCheck(!convertCheck)}
                />
                <label
                  htmlFor="convert-file"
                  className="ml-2 font-medium text-gray-900"
                >
                  Convert the video file to another type
                </label>
              </div>

              <ul
                className={`text-sm font-medium text-gray-900 border border-gray-200 rounded-lg flex justify-center items-center ${
                  convertCheck ? "block" : "hidden"
                }`}
              >
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-mp4"
                      type="radio"
                      value=".mp4"
                      name="list-radio-convert"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-mp4"
                      className="py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      .mp4
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-mkv"
                      type="radio"
                      value=".mkv"
                      name="list-radio-convert"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-mkv"
                      className="py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      .mkv
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-webm"
                      type="radio"
                      value=".webm"
                      name="list-radio-convert"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-webm"
                      className="py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      .webm
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-mov"
                      type="radio"
                      value=".mov"
                      name="list-radio-convert"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-mov"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      .mov
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div className="task mt-4 mb-8">
              <div className="flex items-center mb-4 checkbox-div my-2">
                <input
                  id="resolution"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={changeResolution}
                  onChange={() => setChangeResolution(!changeResolution)}
                />
                <label
                  htmlFor="resolution"
                  className="ml-2 font-medium text-gray-900"
                >
                  Change the resolution
                </label>
              </div>

              <ul
                className={`text-sm font-medium text-gray-900 border border-gray-200 rounded-lg flex justify-center items-center ${
                  changeResolution ? "block" : "hidden"
                }`}
              >
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-720p"
                      type="radio"
                      value="10"
                      name="list-radio-resolution"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-720p"
                      className="py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      720p (HD)
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-480p"
                      type="radio"
                      value="20"
                      name="list-radio-resolution"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-480p"
                      className="py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      480p (SD)
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-360p"
                      type="radio"
                      value="40"
                      name="list-radio-resolution"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-360p"
                      className="py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      360p (SD)
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-240p"
                      type="radio"
                      value="50"
                      name="list-radio-resolution"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="list-radio-240p"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      240p (SD)
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div className="task mt-4 mb-8">
              <div className="flex items-center mb-4 checkbox-div my-2">
                <input
                  id="crop-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={cropCheck}
                  onChange={() => setCropCheck(!cropCheck)}
                />
                <label
                  htmlFor="crop-checkbox"
                  className="ml-2 font-medium text-gray-900"
                >
                  Crop the video boundary window. Enter the new window size
                </label>
              </div>

              <div className={`${cropCheck ? "block" : "hidden"}`}>
                <input
                  className="mr-8 w-28 border-b-2 border-gray-600 focus:outline-none"
                  id="crop-width"
                  type="text"
                  placeholder="Width (px)"
                />
                <input
                  className="w-28 border-b-2 border-gray-600 focus:outline-none"
                  id="crop-height"
                  type="text"
                  placeholder="Height (px)"
                />
              </div>
            </div>

            <div className="task mt-4 mb-8">
              <div className="flex items-center mb-4 checkbox-div my-2">
                <input
                  id="sharpen-blur"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={changeSharpness}
                  onChange={() => setChangeSharpness(!changeSharpness)}
                />
                <label
                  htmlFor="sharpen-blur"
                  className="ml-2 font-medium text-gray-900"
                >
                  Sharpen or blur the video
                </label>
              </div>
              <div
                className={`w-[60%] ${changeSharpness ? "block" : "hidden"}`}
              >
                <label
                  htmlFor="sharpen-range"
                  className="mb-2 inline-block text-gray-900"
                ></label>
                <input
                  id="sharpen-range"
                  type="range"
                  className="transparent h-2 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gray-300"
                  min="0"
                  max="100"
                />
                <p className="font-medium float-left inline">Blur</p>
                <p className="font-medium float-right inline">Sharpen</p>
              </div>
            </div>

            <button
              type="submit"
              value="Submit"
              className="w-36 bg-sky-800 hover:bg-sky-900 text-white px-3 py-1 rounded-md my-4"
            >
              Analyze Video
            </button>
          </form>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          theme="light"
          transition={Slide}
          style={{ width: "30vw", textAlign: "center" }}
          toastStyle={customToastStyle}
          />
      </div>
    </>
  );
};

export default FFmpeg;
