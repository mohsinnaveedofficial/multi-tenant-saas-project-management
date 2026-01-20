import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import Updatestatus from "./updatestatus";

function ProjectTaskBox({
  task,
  id,
  description,
  project,
  status,
  priority,
  deadline,
  progress,
  onUpdated
}) {
  const statusmain = {
    high: { text: "text-red-500", bg: "bg-red-100" },
    medium: { text: "text-orange-500", bg: "bg-orange-100" },
    low: { text: "text-green-500", bg: "bg-green-100" },
  };
  const selectedStatusColor = statusmain[priority] || statusmain.medium;
  return (
    <tr className="bg-white transition font-sans">
      <td className="flex flex-col py-4 px-6 w-80 text-gray-700 ">
        <span className="font-bold">{task} </span>

        {description}
      </td>
      <td className="py-4 px-6 text-gray-700">{project}</td>
      <td className="py-4 px-6">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedStatusColor.text} ${selectedStatusColor.bg}   `}
        >
          {priority}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="  px-3 py-1 rounded-full text-xs font-normal">
          {deadline}
        </span>
      </td>
      <td className="py-4 px-6 text-blue-700 font-semibold text-sm ">
        <span className="rounded-full bg-blue-200 px-2 py-0.5 ">{status}</span>
      </td>

      <td className="py-4 px-6 text-center">
        <div className="">
          <Updatestatus
          id={id}
          updatePriority={priority}
          updateDueDate={deadline}
          updateTaskName={task}
          updateDescription={description}
          updateProject={project}
          updateStatus={status}
          updateProgress={progress}
          onUpdated={onUpdated}
            className="text-blue-600  "
            Triggertext={
              <>
                <AiOutlineEdit className="text-blue-600 me-2 cursor-pointer inline" />
                Update
              </>
            }
          />
        </div>
      </td>
    </tr>
  );
}

export default ProjectTaskBox;
