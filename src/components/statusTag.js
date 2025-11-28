import React from 'react'

function StatusTag({status}) {
  const projectStatuses = {
  "Not Started": {
    text: "text-gray-600",
    bg: "bg-gray-100",
  },
  "In Progress": {
    text: "text-blue-500",
    bg: "bg-blue-100",
  },
  "On Hold": {
    text: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  "Completed": {
    text: "text-green-500",
    bg: "bg-green-100",
  },
  "Cancelled": {
    text: "text-red-500",
    bg: "bg-red-100",
  },
  "Delayed": {
    text: "text-orange-500",
    bg: "bg-orange-100",
  },
  "Under Review": {
    text: "text-purple-500",
    bg: "bg-purple-100",
  },
};

let finalstatus=projectStatuses[status]|| projectStatuses["Not Started"];
  return (
    <div >
      <h4 className={`${finalstatus.text} ${finalstatus.bg} rounded-2xl inline px-3 py-1 whitespace-nowrap`}>{status}</h4>
    </div>
  )
}

export default StatusTag