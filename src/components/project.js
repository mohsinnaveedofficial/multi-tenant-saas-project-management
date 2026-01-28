"use client";
import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import Projectdetails from "./projectdetails";

const STATUS_PROGRESS = {
  notStarted: 0,
  pending: 25,
  inProgress: 50,
  onHold: 50,
  completed: 100,
  cancelled: 0,
};

function Project({ project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const openProjectDetails = () => {
    setDetailsOpen(true);
  };

  const closeProjectDetails = () => {
    setDetailsOpen(false);
  };

  const progress = STATUS_PROGRESS[project.status] ?? 0;

  return (
    <>
      <div className="rounded-2xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 shadow-lg p-6 cursor-pointer hover:shadow-md transition">
        <div className="flex justify-between">
          <h1 className="text-black dark:text-gray-200 font-bold">{project.name}</h1>
          <h1
            className="text-green-800 bg-green-200 rounded-2xl text-sm px-1 py-0.5"
            style={{
              backgroundColor: project.statusbg || "#DCFCE7",
              color: project.statuscolor || "#166534",
            }}
          >
            {project.status}
          </h1>
        </div>

        <div>
          <h2 className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            {project.client.companyName}
          </h2>
          <p className="text-sm text-blue-700 mt-2 capitalize">
            {project.assignedUsers?.[0]?.roleInProject}
          </p>
        </div>

        <div className="flex justify-between">
          <h1 className="text-gray-500 text-sm mt-2.5 dark:text-gray-300">Progress</h1>
          <h1 className="text-black dark:text-gray-200 text-sm font-bold mt-2.5">
            {progress}%
          </h1>
        </div>

        <div className="w-full mt-2">
          <div className="w-[100%] h-2 bg-gray-200 rounded-2xl">
            <div
              className="h-2 rounded-2xl bg-blue-600"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-gray-500 dark:text-gray-300 text-sm mt-2.5">
          <h1>
            {project.start
              ? new Date(project.start).toLocaleDateString()
              : ""}
          </h1>
          <h2 className="flex justify-center items-center">
            <CgArrowLongRight />
          </h2>
          <h1>
            {project.end ? new Date(project.end).toLocaleDateString() : ""}
          </h1>
        </div>

        <button
          onClick={openProjectDetails}
          className="bg-blue-500 text-white border w-full border-blue-600 rounded-lg flex justify-center my-3 p-1.5"
        >
          View Details
        </button>
      </div>

      {detailsOpen && (
        <div className="fixed inset-0  z-50 w-full h-full bg-black/35 flex justify-center items-start overflow-auto">
          <div className="pt-20 pb-8 w-full flex justify-center">
            <Projectdetails
              openDetail={closeProjectDetails}
              project={project.id}
              roleInProject={project.assignedUsers?.[0]?.roleInProject}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
