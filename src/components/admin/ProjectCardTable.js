import React from "react";
import { Progress2 } from "../progress";
import ProjectMemberIcon from "../ProjectMemberIcon";

import { AiOutlineEdit } from "react-icons/ai";
import ProjectDetailsCard from "./ProjectDetailsCard";



function AdminProjectCardTable({
  projectname,
  client,
  team,
  progress,
  status,
  budget,
  deadline,
}) {
  return (
    <tr className="">
      <td className="py-3 text-center">{projectname}</td>
      <td className="py-3 text-center">{client}</td>
      <td className="py-3  flex gap-1 justify-center items-center w-full ">
       <div className="w-40 flex justify-center items-center overflow-x-auto custom-scrollbar">
         {team.map((item, idx) => (
          <ProjectMemberIcon name={item} key={idx} />
        ))}
       </div>
      </td>
      <td className="py-3">
        <div className="flex justify-center items-center gap-3">
          <div className="w-2/3">
            <Progress2 Progress={progress} />
          </div>
          <span className="">{progress}%</span>
        </div>
      </td>
      <td className="py-3 flex justify-center items-center">
        <div className="bg-blue-100 text-blue-500 font-semibold text-center rounded-2xl py-1 w-24 whitespace-nowrap  text-[13px]">{status}</div>
      </td>
      <td className="py-3 text-center">{deadline}</td>
      {/* <td className="py-3 text-center">${budget}</td> */}
      <td className="py-3 text-center text-lg"> <ProjectDetailsCard/>  <AiOutlineEdit className="inline text-gray-600"  />  </td>
    </tr>
  );
}

export default AdminProjectCardTable;
