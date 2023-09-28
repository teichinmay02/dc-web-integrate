import React, { useEffect, useState } from "react";

const ExifTool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jsonDetails, setJsonDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let exifimg = document.getElementById("exifimg");
    if (exifimg.value !== "") {
      setIsLoading(true);
      let formData = new FormData();
      formData.append("image", exifimg.files[0]);

      let res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}exiftool/image`, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      // console.log(json.metadata);
      setJsonDetails(json.metadata);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="dashboard-width px-32 mt-8 my-16">
        <h2 className="para text-2xl font-semibold">ExifTool</h2>
        <div className="para my-4 text-justify">
          ExifTool is a command-line tool for reading, writing, and manipulating
          metadata in various file formats, including image, audio, video, and
          document formats. It's particularly useful for managing metadata in
          large collections of files and supports a wide range of metadata
          formats, including EXIF, IPTC, XMP, and others. With ExifTool, you can
          extract metadata, add or remove metadata tags, edit or rename
          metadata, and even perform batch processing on multiple files at once.
          It's a powerful tool for professional photographers, digital asset
          managers, and anyone who wants to manage the metadata of their files
          in a flexible and efficient way.
        </div>

        <div className="para my-4 text-justify">
          ExifTool is used to read metadata by running the tool on the command
          line and specifying the file or files to be analyzed. The tool will
          then display the metadata contained in the file in a human-readable
          format. This makes it easy to quickly review the metadata of a file
          and extract useful information.
        </div>

        <div className="para my-4 text-justify">
          For cyber security analysts, ExifTool can be a useful tool in
          identifying and analyzing malicious files. Metadata can provide
          valuable information about the origin and history of a file, including
          information about the author, date of creation, and software used to
          create it. This information can be used to determine the authenticity
          of a file and identify any potential security threats.
        </div>

        <div className="para my-4 text-justify">
          In some cases, malicious files may contain hidden or encrypted
          metadata that could reveal information about the origin and purpose of
          the file. By using ExifTool to extract and analyze metadata, cyber
          security analysts can uncover this information and use it to identify
          and neutralize any potential security threats.
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
              id="exifimg"
            />
            <button
              type="submit"
              value="Submit"
              className="w-36 bg-sky-800 hover:bg-sky-900 text-white px-3 py-1 rounded-md my-4"
            >
              {isLoading ? "Loading" : "Extract Metadata"}
            </button>
          </form>
        </div>

        {jsonDetails && (
          <table className="border border-slate-600 w-[80%] mx-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-1 px-2 text-left">Property</th>
                <th className="py-1 px-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(jsonDetails).map((item, index) => (
                <tr key={index} className="even:bg-gray-200" >
                  <td className="py-1 px-2">{item}</td>
                  <td className="py-1 px-2">{jsonDetails[item]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ExifTool;
