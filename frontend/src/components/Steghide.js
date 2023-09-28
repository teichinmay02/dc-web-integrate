import React, { useEffect, useState } from "react";

const Steghide = () => {
  const [isEncryptSelected, setisEncryptSelected] = useState(true);
  const [gotDataAfterDecrypt, setGotDataAfterDecrypt] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEncryptSelected) {
      let steghide = document.getElementById("steghide-img-encr");
      if (steghide.value !== "") {
        let formData = new FormData();
        formData.append("image", steghide.files[0]);
        formData.append(
          "message",
          document.getElementById("encr-message").value
        );
        formData.append(
          "paraphrase",
          document.getElementById("encr-paraphrase").value
        );

        let res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}steghide/image/encrypt`, {
          method: "POST",
          body: formData,
        });

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        link.download = `output${steghide.files[0].name.substring(
          steghide.files[0].name.lastIndexOf(".")
        )}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      let steghide = document.getElementById("steghide-img-decr");
      if (steghide.value !== "") {
        let formData = new FormData();
        formData.append("image", steghide.files[0]);
        formData.append(
          "paraphrase",
          document.getElementById("decr-paraphrase").value
        );

        let res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}steghide/image/decrypt`, {
          method: "POST",
          body: formData,
        });

        const json = await res.json();
        setGotDataAfterDecrypt(json.message);
        // console.log(json);
      }
    }
  };

  return (
    <>
      <div className="dashboard-width px-32 mt-8 my-16">
        <h2 className="para text-2xl font-semibold">Steghide</h2>
        <div className="para my-4 text-justify">
          Steganography is the practice of hiding a message or information
          within another object, such as an image, audio, or video file, in a
          way that is not easily detectable. This technique is often used to
          conceal the fact that a message is being sent, and to prevent
          unauthorized parties from accessing the information. Steganography is
          different from cryptography, which involves encrypting a message so
          that it cannot be understood by anyone except the intended recipient.
        </div>

        <div className="para my-4 text-justify">
          Steghide is a software tool that allows users to hide confidential
          data within various types of files, including images and audio files,
          using steganography techniques. The tool is open-source and is
          available for multiple platforms, including Linux, Windows, and macOS.
          Steghide uses strong encryption algorithms to secure the hidden data
          and protect it from unauthorized access.
        </div>

        <div className="para my-4 text-justify">
          Steghide is a useful tool for users who need to protect sensitive
          information from prying eyes, such as journalists, activists, and
          whistleblowers. However, it can also be used for malicious purposes,
          such as hiding malware within seemingly harmless files. As such, it is
          important to use Steghide responsibly and ethically, and to ensure
          that it is not used for illegal or unethical purposes.
        </div>

        <div className="my-8 flex justify-center space-x-32">
          <p
            className={`${
              isEncryptSelected ? "border-b-4 border-sky-900" : ""
            } cursor-pointer p-2`}
            onClick={() => setisEncryptSelected(true)}
          >
            Encrypt
          </p>

          <p
            className={`${
              !isEncryptSelected ? "border-b-4 border-sky-900" : ""
            } cursor-pointer p-2`}
            onClick={() => setisEncryptSelected(false)}
          >
            Decrypt
          </p>
        </div>

        <div className="w-[90%] mx-auto my-8">
          {isEncryptSelected && (
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mt-4 mb-8">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Upload file
                </label>
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="steghide-img-encr"
                />
              </div>

              <div className="mt-4 mb-8">
                <label
                  htmlFor="message"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Enter the text you wish to embed
                </label>
                <textarea
                  id="encr-message"
                  rows="4"
                  className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-sky-900"
                  placeholder="Message..."
                  required
                ></textarea>
              </div>

              <div className="mt-4 mb-8">
                <label
                  htmlFor="password"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Enter the key
                </label>
                <input
                  type="password"
                  id="encr-paraphrase"
                  className="border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-none focus:border-sky-900"
                  required
                  placeholder="Paraphrase"
                />
              </div>

              <button
                type="submit"
                value="Submit"
                className="w-36 bg-sky-800 hover:bg-sky-900 text-white px-3 py-1 rounded-md my-4"
              >
                Mask the text!
              </button>
            </form>
          )}

          {!isEncryptSelected && (
            <div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mt-4 mb-8">
                  <label
                    htmlFor="formFile"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Upload file
                  </label>
                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="steghide-img-decr"
                  />
                </div>

                <div className="mt-4 mb-8">
                  <label
                    htmlFor="password"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Enter the key
                  </label>
                  <input
                    type="password"
                    id="decr-paraphrase"
                    className="border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-none focus:border-sky-900"
                    required
                    placeholder="Paraphrase"
                  />
                </div>

                <button
                  type="submit"
                  value="Submit"
                  className="w-36 bg-sky-800 hover:bg-sky-900 text-white px-3 py-1 rounded-md my-4"
                >
                  Reveal the text!
                </button>
              </form>

              {gotDataAfterDecrypt !== null && <div> {gotDataAfterDecrypt} </div>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Steghide;
