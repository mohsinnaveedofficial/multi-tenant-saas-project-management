import React from "react";
import ProjectMemberIcon from "../ProjectMemberIcon";
import Progress, { Progress2 } from "../progress";

function AdminProjectCard({
  projectname,
  client,
  team,
  Progress,
  Status,
  Deadline,
  budget,
}) {
  return (
    <div className="border border-gray-200 rounded-xl px-4 py-6 bg-white shadow">
      <div className=" flex justify-between items-center">
        <h3 className="text-gray-800 font-semibold font-sans text-lg">
          {projectname}
        </h3>
        <div>
          <div className="bg-blue-100 rounded-2xl px-3 py-1 font-semibold text-blue-500 text-[13px]">
            <span>{Status}</span>
          </div>
        </div>
      </div>

      <h4 className="text-gray-600 mt-4">{client}</h4>
      <div className="h-14 mt-4 flex items-center gap-5  ">
        <div className="flex -space-x-2.5 overflow-x-auto no-scrollbar ">
          {team.map((item, idx) => (
            <ProjectMemberIcon key={idx} name={item} />
          ))}
        </div>
        <div>
          <span className="text-gray-600 ">+{team.length} member</span>
        </div>
      </div>

      <div>
        <div className="flex mt-2 justify-between items-center">
          <h5 className="text-gray-600 mb-3">Porgress</h5>
          <span className="text-black font-semibold">{Progress}%</span>
        </div>
        <div>
          <Progress2 Progress={Progress} />
        </div>
      </div>

      <div className="text-gray-600 flex mt-3 justify-between">
        <h6>Due:{Deadline}</h6>
        <h6 className="font-semibold">$ {budget}</h6>
      </div>
    </div>
  );
}

export default AdminProjectCard;
