import React from "react";
import { FiMessageCircle } from "react-icons/fi";

function Projectdetailscomments() {
  return (
    <div className="w-2xl">
      <div className="p-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[170px] p-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[100px] p-2.5">
            <h1 className="text-gray-400 text-sm">Add a comment...</h1>
          </div>
          <button className="bg-blue-600 rounded-[4px] p-1 text-[10px] text-white flex justify-start ml-4 px-2 mt-2">
            Post Comment
          </button>
        </div>
      </div>
      <div className="p-[50px]">
        <div className="flex justify-center">
          <FiMessageCircle className="text-gray-300 text-4xl" />
        </div>
        <p className="text-gray-400 text-sm flex justify-center pt-1">
          No comments yet
        </p>
      </div>
    </div>
  );
}

export default Projectdetailscomments;
