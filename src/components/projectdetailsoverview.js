import React from "react";

function Projectdetailsoverview({ project }) {
  const getInitials = (name) => {
    if (!name) return "";
    return name
      .trim()
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="mt-4 flex flex-col md:flex-row gap-4 text-sm">
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex-1">
          <h1 className="font-bold">Your Role</h1>
          <h2 className="text-gray-500 mt-2">{project.category}</h2>
        </div>

        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex-1">
          <h1 className="font-bold">Progress</h1>
          <h2 className="text-gray-500 mt-2">{project.progress}%</h2>
        </div>

        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex-1">
          <h1 className="font-bold">Status</h1>
          <span className="text-green-800 bg-green-100 border border-green-200 rounded-2xl text-sm px-2 py-0.5 mt-2 inline-block">
            {project.status}
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm font-bold">Project Description</div>
      <div className="mt-1 text-sm text-gray-500">{project.description}</div>

      <div className="mt-3 font-bold text-sm">Team Members</div>
      <div className="flex flex-wrap gap-4 mt-2">
        {project.teamMembers?.map((member, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-100 bg-gray-100 py-1 px-4 flex-shrink-0"
          >
            <div className="flex mt-2 gap-2 items-center">
              <span className="text-white text-sm bg-blue-600 rounded-full flex items-center justify-center w-10 h-10">
                {getInitials(member.name)}
              </span>
              <div>
                <h1 className="text-[13px]">{member.name}</h1>
                <h2 className="text-gray-500 text-[12px]">{member.role}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projectdetailsoverview;
