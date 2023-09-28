import React from "react";
import img2 from "../images/dc_logo_dark.png";

const SideNav = () => {
  const handleToggle = (id) => {
    let new_id = id + "Dropdown";
    let icon = id + "Icon";
    if (document.getElementById(new_id).style.display === "none") {
      document.getElementById(new_id).style.display = "block"
      document.getElementById(icon).classList.add("fa-angle-down");
      document.getElementById(icon).classList.remove("fa-angle-right");
    }
    else {
      document.getElementById(new_id).style.display = "none";
      document.getElementById(icon).classList.add("fa-angle-right");
      document.getElementById(icon).classList.remove("fa-angle-down");
    }
  };
 
  <i className="fa-solid fa-angle-down mr-2 text-sm"></i>
  return (
    <div className="w-60 bg-sky-900 h-[100vh] text-white fixed overflow-y-auto top-0 bottom-0 left-0">
      <div className="logo">
        <img src={img2} className="w-[70%] m-auto py-10" />
        <p className="px-7 text-center text-2xl" style={{fontFamily: 'Kaushan Script'}}>Think Cyber, Think DeepCytes</p>
      </div>

      <div className="container mt-14">
        <div className="my-4">
          <p id="imageForensics" className="hover:cursor-pointer hover:underline-offset-2 hover:underline pl-4" onClick={() => {
              handleToggle("imageForensics");
            }}
          >
            <i id="imageForensicsIcon" className="fa-solid fa-angle-right mr-2 text-sm"></i>Image Forensics
          </p>
          <div className="dropdown pl-12" style={{display : "none"}} id="imageForensicsDropdown">
            <p>Ghiro</p>
            <p>Sherloq</p>
            <p>ExifTool</p>
          </div>
        </div>

        <div className="my-4">
          <p id="videoForensics" className="hover:cursor-pointer hover:underline-offset-2 hover:underline pl-4" onClick={() => {
              handleToggle("videoForensics");
            }}
          >
            <i id="videoForensicsIcon" className="fa-solid fa-angle-right mr-2 text-sm"></i>Video Forensics
          </p>
          <div className="dropdown pl-12" style={{display : "none"}} id="videoForensicsDropdown">
            <p>Steghide</p>
            <p>FFmpeg</p>
            <p>Audacity</p>
          </div>
        </div>

        <div className="my-4">
          <p id="audioForensics" className="hover:cursor-pointer hover:underline-offset-2 hover:underline pl-4" onClick={() => {
              handleToggle("audioForensics");
            }}
          >
            <i id="audioForensicsIcon" className="fa-solid fa-angle-right mr-2 text-sm"></i>Audio Forensics
          </p>
          <div className="dropdown pl-12" style={{display : "none"}} id="audioForensicsDropdown">
            <p>Ghiro</p>
            <p>Sherloq</p>
            <p>ExifTool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
