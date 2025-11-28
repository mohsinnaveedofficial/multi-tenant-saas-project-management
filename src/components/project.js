"use client";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

function Project({ project, onClick }) {
  return (
    <div className="rounded-2xl border border-gray-300 shadow-lg p-6 cursor-pointer hover:shadow-md transition" onClick={onClick}>
      <div className="flex justify-between">
        <h1 className="text-black font-bold">{project.title}</h1>
        <h1
          className="text-green-800 bg-green-200 rounded-2xl text-sm px-1 py-0.5"
          style={{ backgroundColor: project.statusbg || "#DCFCE7", color: project.statuscolor || "#166534" }}
        >
          {project.status}
        </h1>
      </div>

      <div>
        <h2 className="text-sm text-gray-500 mt-3">{project.company}</h2>
        <p className="text-sm text-blue-700 mt-2">{project.category}</p>
      </div>

      <div className="flex justify-between">
        <h1 className="text-gray-500 text-sm mt-2.5">Progress</h1>
        <h1 className="text-black text-sm font-bold mt-2.5">{project.progress}%</h1>
      </div>

      <div className="w-full mt-2">
        <div className="w-[100%] h-2 bg-gray-200 rounded-2xl">
          <div className="h-2 rounded-2xl bg-blue-600" style={{ width: `${project.progress}%` }}></div>
        </div>
      </div>

      <div className="flex justify-between text-gray-500 text-sm mt-2.5">
        <h1>{project.startdate}</h1>
        <h2 className="flex justify-center items-center">
          <CgArrowLongRight />
        </h2>
        <h1>{project.enddate}</h1>
      </div>

      <button
        onClick={onClick}
        className="bg-blue-500 text-white border border-blue-600 rounded-lg flex justify-center my-3 p-1.5"
      >
        View Details
      </button>
    </div>
  );
}

export default Project;
