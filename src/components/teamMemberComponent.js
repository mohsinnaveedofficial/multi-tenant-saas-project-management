import React from "react";

function TeamMemberComponent({ Icon, users, number, bgColor }) {
  return (
    <div className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-white rounded-lg p-5 flex gap-5 ">
      <div className={`${bgColor} text-blue-700 p-3 rounded-lg`}>
        <Icon className=" h-6 w-6" />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-gray-600 dark:text-gray-200">{users}</h3>
        <h1 className="text-gray-950 font-bold dark:text-gray-500">{number}</h1>
      </div>
    </div>
  );
}

export default TeamMemberComponent;
