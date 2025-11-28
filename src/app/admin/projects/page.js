"use client";
import React, { useState } from "react";
import { RiLayoutGrid2Line } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { RiFilterLine } from "react-icons/ri";
import AdminProjectCardTable from "@/components/admin/ProjectCardTable";
import AdminProjectCard from "@/components/admin/ProjectCard";
import AdminCreateProject from "@/components/admin/CreateProject";
function Projects() {
  const [table, settable] = useState(false);
  const [CreateForm, setOpenForm] = useState(false);
  const projectData = [
    {
      projectname: "Website Redesign",
      client: "Acme Corporation",
      team: ["Alice", "Bob", "Charlie", "Diana"],
      Progress: 68,
      Status: "In Progress",
      Deadline: "2025-12-15",
      budget: "12,000",
    },
    {
      projectname: "Website Redesign",
      client: "Acme Corporation",
      team: ["Alice", "Bob", "Charlie"],
      Progress: 68,
      Status: "In Progress",
      Deadline: "2025-12-15",
      budget: "12,000",
    },
    {
      projectname: "Mobile App Development",
      client: "TechNova",
      team: ["Eve", "Frank", "Grace","Eve", "Frank", "Grace","Eve", "Frank", "Grace","Eve", "Frank", "Grace"],
      Progress: 90,
      Status: "Almost Done",
      Deadline: "2025-11-30",
      budget: "18,500",
    },
    {
      projectname: "Cloud Migration",
      client: "DataFlow Inc.",
      team: ["Hank", "Irene", "Jack"],
      Progress: 40,
      Status: "Planning",
      Deadline: "2026-01-10",
      budget: "25,000",
    },
  ];

  return (
    <div className=" relative">
      <div className="flex justify-between items-center gap-2 p-4">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setOpenForm(true)}
            className="text-white bg-blue-600 rounded-lg px-4 whitespace-nowrap py-2.5 cursor-pointer "
          >
            + Add Project
          </button>
          <div className="rounded-lg bg-gray-100 flex py-1 gap-2 px-1 items-center w-48">
            <button
              className={` py-1.5 rounded-lg px-3 text-center transition-all duration-300 cursor-pointer flex justify-center items-center ease-in-out ${
                !table ? "bg-white text-black" : "text-gray-500"
              } `}
              onClick={() => settable(false)}
            >
              <RiLayoutGrid2Line className="inline me-1" />
              Cards
            </button>
            <button
              className={` py-1.5 rounded-lg px-3 text-center transition-all duration-300 cursor-pointer flex justify-center items-center ease-in-out ${
                table ? "bg-white text-black" : "text-gray-500"
              } `}
              onClick={() => settable(true)}
            >
              <FaList className="inline me-1" />
              Tables
            </button>
          </div>
        </div>
        <div>
          <button
            className={` py-1.5 rounded-lg px-3 bg-white text-black border border-gray-300 text-center transition-all duration-300 cursor-pointer flex justify-center items-center ease-in-out  `}
          >
            <RiFilterLine className="inline  text-xl mr-1" />
            Filter
          </button>
        </div>
      </div>
      {!table ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 ">
          {projectData.map((project, idx) => (
            <AdminProjectCard
              projectname={project.projectname}
              Deadline={project.Deadline}
              Progress={project.Progress}
              Status={project.Status}
              budget={project.budget}
              client={project.client}
              team={project.team}
              key={idx}
            />
          ))}
        </div>
      ) : (
        <div className=" border border-gray-300 rounded-lg overflow-y-hidden m-4 shadow">
          <table className="border-separate border-spacing-x-0  pt-3   w-full overflow-x-scroll rounded-lg ">
            <thead className="text-gray-500 font-sans">
              <tr>
                <th className="font-semibold px-1.5 py-2 md:px-4 md:py-3">PROJECT</th>
                <th className="font-semibold px-1.5 py-2 md:px-4 md:py-3">CLIENT</th>
                <th className="font-semibold px-1.5 py-2 md:px-4 md:py-3">TEAM</th>
                <th className="font-semibold px-1.5 py-2 md:px-4 md:py-3">PROGRESS</th>
                <th className="font-semibold px-1.5 py-2 md:px-4 md:py-3">STATUS</th>
                <th className="font-semibold px-1.5 py-2 md:px-4 md:py-3">DEADLINE</th>
                {/* <th className="font-semibold py-3 px-4">BUDGET</th> */}
                <th className="font-semibold py-3 px-4">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-black  bg-white  ">
              {projectData.map((item, idx) => (
                <AdminProjectCardTable
                  budget={item.budget}
                  client={item.client}
                  progress={item.Progress}
                  projectname={item.projectname}
                  status={item.Status}
                  team={item.team}
                  deadline={item.Deadline}
                  key={idx}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {CreateForm && (
        <div className="fixed inset-0 z-50 top-0 pt-[10%] min-h-full flex justify-center items-start w-full bg-black/50">
          <AdminCreateProject closeform={setOpenForm} />
        </div>
      )}
    </div>
  );
}

export default Projects;
