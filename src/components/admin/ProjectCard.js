import React from "react";
import ProjectMemberIcon from "../ProjectMemberIcon";
import Progress, { Progress2 } from "../progress";

function AdminProjectCard({
  projectname,
  client,
  team = [], 
  Progress,
  Status,
  Deadline,
  budget,
}) {
  return (
    <div className="border border-gray-200 rounded-xl px-4 py-6 dark:bg-gray-800 dark:border-gray-700  bg-white shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 dark:text-gray-200 font-semibold font-sans text-lg">
          {projectname}
        </h3>
        <div>
          <div className="bg-blue-100 rounded-2xl px-3 py-1 font-semibold text-blue-500 text-[13px]">
            <span className="capitalize">{Status}</span>
          </div>
        </div>
      </div>

      <h4 className="text-gray-600 dark:text-gray-300  mt-4">{client}</h4>

      <div className="h-14 mt-4 flex items-center gap-5">
        <div className="flex -space-x-2.5 overflow-x-auto no-scrollbar">
          {team.map((member) => (
            <ProjectMemberIcon
              key={member.id}
              name={member?.user?.name} 
              role={member?.roleInProject} 
            />
          ))}
          {
            team.length ==0 &&(            <span className="text-gray-600 dark:text-gray-400 ">
             Not team assign yet
            </span>)
          }
        </div>
        {team.length > 0 && (
          <div>
            <span className="text-gray-600 dark:text-gray-400 ">
              +{team.length} member{team.length > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      <div>
        <div className="flex mt-2 justify-between items-center">
          <h5 className="text-gray-600 dark:text-gray-300  mb-3">Progress</h5>
          <span className="text-black dark:text-gray-200 font-semibold">{Progress}%</span>
        </div>
        <div>
          <Progress2 Progress={Progress} />
        </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300  flex mt-3 justify-between">
        <h6>Due: {new Date(Deadline).toLocaleDateString()}</h6>
        <h6 className="font-semibold">$ {budget}</h6>
      </div>
    </div>
  );
}

export default AdminProjectCard;
