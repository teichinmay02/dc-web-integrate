import React, { useState } from "react";

const Sherloq = () => {
  const [isWindowOpened, setIsWindowOpened] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    setIsWindowOpened(true);

    let res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}sherloq/open`);
    let json = await res.json();
    if (json.success) {
      setIsWindowOpened(false);
    }
  };

  return (
    <>
      <div className="dashboard-width px-32 mt-8 my-16">
        <h2 className="para text-2xl font-semibold">Sherloq</h2>
        <div className="para my-4 text-justify">
          Sherloq is an open-source image forensic tool developed by Guido
          Bartoli. The tool is designed to aid digital forensic investigators in
          the analysis of digital images, particularly in cases where images may
          have been manipulated or altered. Sherloq uses a range of techniques,
          including error level analysis, image histogram analysis, and noise
          analysis, to detect signs of tampering or manipulation in digital
          images. The tool can also be used to identify the source camera or
          device that was used to capture an image.
        </div>

        <div className="para my-4 text-justify">
          One of the key features of Sherloq is its ability to perform "blind"
          image analysis, meaning that it does not require any prior knowledge
          about the image being analyzed. This can be useful in cases where
          investigators do not have any specific information or suspicion about
          the image, but still need to verify its authenticity. Sherloq can
          detect a wide range of image manipulations, including resizing,
          compression, color adjustment, and object removal. The tool uses a
          combination of statistical analysis and visual inspection to identify
          these manipulations.
        </div>

        <div className="para my-4 text-justify">
          In addition to image analysis, Sherloq also includes a module for
          analyzing video files. This module can detect frame-level
          manipulations, such as frame dropping or splicing, and can also
          analyze the metadata associated with the video file. Sherloq is
          designed to be modular and extensible, meaning that additional
          analysis modules can be easily added to the tool as needed. This makes
          it a flexible and adaptable tool for a wide range of image forensic
          tasks.
        </div>

        <button
          type="submit"
          value="Submit"
          className={`w-48 ${
            isWindowOpened ? "bg-gray-500" : "bg-sky-800 hover:bg-sky-900"
          } text-white px-3 py-1 rounded-md my-4`}
          onClick={handleClick}
          disabled={isWindowOpened}
        >
          {isWindowOpened ? "Tool Open in Window" : "Use Sherloq"}
        </button>
      </div>
    </>
  );
};

export default Sherloq;
