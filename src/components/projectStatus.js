import React from "react";

function ProjectStatus({ Status }) {
  const statusStyles = {
    notStarted: "bg-orange-100 text-orange-800",
    inProgress: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    onHold: "bg-purple-100 text-purple-800",
    cancelled: "bg-red-100 text-red-800",
  };

  const style = statusStyles[Status] || "bg-gray-100 text-gray-800";

  return (
    <div
      className={`rounded-2xl inline px-3 py-1 whitespace-nowrap ${style}`}
    >
      <span className="capitalize">{Status}</span>
    </div>
  );
}

export default ProjectStatus;
