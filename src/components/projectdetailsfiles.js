import React from "react";
import { RiUploadLine } from "react-icons/ri";
import { SlFolder } from "react-icons/sl";

function Projectdetailsfiles() {
  return (
    <div className="w-2xl">
      <div className="pt-4">
        <button className="text-white flex items-center bg-blue-600 p-1 px-2 rounded-[5px] ml-4.5">
          <RiUploadLine className="text-sm mr-1" />
          <span className="text-[13px]">Upload Files</span>
        </button>
      </div>
      <div className="p-[50px]">
        <div className="flex justify-center">
          <SlFolder className="text-gray-400 text-xl" />
        </div>
        <p className="text-gray-400 text-sm flex justify-center pt-1">
          No files uploaded yet
        </p>
      </div>
    </div>
  );
}

export default Projectdetailsfiles;
