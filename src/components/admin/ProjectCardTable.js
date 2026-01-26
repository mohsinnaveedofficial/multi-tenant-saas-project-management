"use client";
import React, { useState } from "react";
import { Progress2 } from "../progress";
import ProjectMemberIcon from "../ProjectMemberIcon";
import { AiOutlineEdit } from "react-icons/ai";
import ProjectDetailsCard from "./ProjectDetailsCard";
import EditAdminProject from "./editProject";

function AdminProjectCardTable({
  projectname,
  client,
  team = [],
  progress,
  status,
  budget,
  deadline,
  project,
  refreshData,
}) {
  const [editForm, setOpenForm] = useState(false);
  return (
    <tr>
      <td className=" text-left px-4 py-3">{projectname}</td>
      <td className=" px-4 py-3 text-left">{client}</td>
     <td className="px-4 py-3">
  <div className="flex gap-1 overflow-x-auto w-full custom-scrollbar">
    {team.length > 0 ? (
      team.map((member) => (
        <ProjectMemberIcon key={member.id} name={member?.user?.name} />
      ))
    ) : (
      <span className="text-gray-600 whitespace-nowrap">Not team assigned yet</span>
    )}
  </div>
</td>
      <td className=" px-4 py-3">
        <div className="flex justify-start items-center gap-3">
          <div className="w-2/3">
            <Progress2 Progress={progress} />
          </div>
          <span>{progress}%</span>
        </div>
      </td>
      <td className=" px-4 py-3 flex justify-start items-center">
        <div className="bg-blue-100 text-blue-500 font-semibold text-center rounded-2xl py-1 w-24 whitespace-nowrap text-[13px] capitalize">
          {status}
        </div>
      </td>
      <td className=" px-4 py-3 text-left">
        {new Date(deadline).toLocaleDateString()}
      </td>
      <td className=" px-4 py-3 text-left text-lg">
        <ProjectDetailsCard project={project} />
        <AiOutlineEdit
          onClick={() => setOpenForm(true)}
          className="ms-2 cursor-pointer inline text-gray-600"
        />
      </td>
      {editForm && (
        <div className="fixed inset-0 z-50 top-0 pt-[10%] min-h-full flex justify-center items-start w-full bg-black/50">
          <EditAdminProject
            id={project.id}
            closeform={setOpenForm}
            budget={budget}
            deadline={deadline}
            status={status}
            projectName={projectname}
            refreshData={refreshData}
          />
        </div>
      )}
    </tr>
  );
}

export default AdminProjectCardTable;
