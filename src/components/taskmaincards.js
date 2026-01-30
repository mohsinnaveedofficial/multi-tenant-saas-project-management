import React from "react";
import Updatestatus from "./updatestatus";

function Taskmaincards({
  title,
  id,
  status,
  description,
  projectname,
  date,
  progress,
  statuscompletion,
  onUpdated
}) {
  const statusmain = {
    high: { text: "text-red-500", bg: "bg-red-100" },
    medium: { text: "text-orange-500", bg: "bg-orange-100" },
    low: { text: "text-green-500", bg: "bg-green-100" },
  };
  const selectedStatusColor = statusmain[status] || statusmain.medium;
  const completionStatusStyles = {
    todo: "bg-gray-200 text-gray-600",
    inProgress: "bg-blue-100 text-blue-600",
    review: "bg-yellow-100 text-yellow-600",
    completed: "bg-green-100 text-green-600",
    delayed: "bg-red-100 text-red-600",
  };

  const selectedCompletionStatusClass =
    completionStatusStyles[statuscompletion] || completionStatusStyles.todo;

  return (
    <div className="rounded-2xl border bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow p-6">
      <div className="flex justify-between">
        <h1 className="text-black dark:text-gray-200 font-bold capitalize">{title}</h1>
        <h1
          className={`rounded-2xl text-sm font-medium px-1.5 py-0.5 ${selectedStatusColor.text} ${selectedStatusColor.bg}`}
        >
          {status}
        </h1>
      </div>
      <div className="pt-2 pb-5  ">
        <p className="text-sm text-gray-500 dark:text-gray-400 ">{description}</p>
      </div>
      <div className="flex justify-between pt-5">
        <h1 className="text-sm text-gray-500 dark:text-gray-300">Project:</h1>
        <h1 className="text-sm text-black dark:text-gray-200 font-semibold">{projectname}</h1>
      </div>
      <div className="flex justify-between pt-2">
        <h1 className="text-sm text-gray-500 dark:text-gray-300">Due:</h1>
        <h1 className="text-sm text-black  dark:text-gray-200 font-semibold">{date}</h1>
      </div>
      <div className="flex justify-between pt-2">
        <h1 className="text-gray-500  dark:text-gray-300 text-sm mt-2.5">Progress</h1>
        <h1 className="text-black dark:text-gray-200 text-sm font-semibold mt-2.5">{progress}</h1>
      </div>
      <div className="w-full mt-2">
        <div className="w-full h-2 bg-gray-200 rounded-2xl">
          <div
            className="h-2 rounded-2xl bg-blue-600"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="pt-4 flex justify-between items-center h-[65px]">
        <div className="flex items-center-center">
          <div
            className={`font-medium rounded-full text-sm px-3 py-1 capitalize ${selectedCompletionStatusClass}`}
          >
            {statuscompletion}
          </div>
        </div>
        <div>
          <Updatestatus
            id={id}
            updatePriority={status}
            updateDueDate={date}
            updateTaskName={title}
            updateDescription={description}
            updateProject={projectname}
            updateStatus={statuscompletion}
            updateProgress={progress}
            onUpdated={onUpdated}
            className="bg-blue-500 text-white py-1.5 px-4 rounded-[10px]"
            Triggertext={"Update Status"}
          />
        </div>
      </div>
    </div>
  );
}

export default Taskmaincards;
