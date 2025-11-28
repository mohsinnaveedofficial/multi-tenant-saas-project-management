import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditTeamMember from "./admin/editTeamMember";

function ProjectTeamMember({ name, email, role, status, joinDate }) {
  const rolemap = {
    Admin: { text: "text-purple-700", bg: "bg-purple-100" },
    Employee: { text: "text-blue-700", bg: "bg-blue-100" }
  };

  const seletedRoleColor = rolemap[role] || rolemap.Employee;

  const statusmap={
    Active: {text:"text-green-600",bg:"bg-green-100"},
    Inactive: {text:"text-gray-600",bg:"bg-gray-200"}
  }

  const selectedStatusColor = statusmap[status] || statusmap.Active;

  return (
    <tr className="bg-white font-sans ">
      <td className="py-4 px-6 flex items-center whitespace-nowrap  gap-3 w-full  font-semibold text-gray-900 ">
        <div className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-medium">
          <span className="overflow-hidden whitespace-nowrap">
            {name
              .split(" ")
              .map((word) => word.charAt(0))
              .join("")}
          </span>
        </div>
        {name}
      </td>

      <td className="py-4 px-6 text-gray-700">{email}</td>
      <td className={"py-4 px-6  "}>
        <span className={`  py-1 px-1.5 text-xs  font-medium rounded-xl ${seletedRoleColor.bg} ${seletedRoleColor.text}`}>
          {role}
        </span>
      </td>
      <td className="py-4 px-6 ">
        <span className={`py-1 px-1.5 text-xs  font-medium rounded-xl ${selectedStatusColor.text} ${selectedStatusColor.bg}`}>{status}</span>
      </td>
      <td className="py-4 px-6">
        <span className=" whitespace-nowrap  text-xs font-normal">
          {joinDate}
        </span>
      </td>

      <td className="py-4 px-6 text-center">
        <div className="flex justify-center gap-3">
          <EditTeamMember EmailAddress={email} FullName={name} Role={role}/>
          <button>
            <RiDeleteBin5Line className="text-red-500 " />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProjectTeamMember;
