import React from 'react'

function StatusTag({status}) {
  const projectStatuses = {
  "not started": {
    text: "text-gray-600",
    bg: "bg-gray-100",
  },
  "in progress": {
    text: "text-blue-500",
    bg: "bg-blue-100",
  },
  "on hold": {
    text: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  "completed": {
    text: "text-green-500",
    bg: "bg-green-100",
  },
  "cancelled": {
    text: "text-red-500",
    bg: "bg-red-100",
  },
  "delayed": {
    text: "text-orange-500",
    bg: "bg-orange-100",
  },
  "under review": {
    text: "text-purple-500",
    bg: "bg-purple-100",
  },
};

let finalstatus=projectStatuses[status]|| projectStatuses["not started"];
  return (
    <div >
      <h4 className={`${finalstatus.text} ${finalstatus.bg}  capitalize rounded-2xl inline px-3 py-1 whitespace-nowrap`}>{status}</h4>
    </div>
  )
}

export default StatusTag