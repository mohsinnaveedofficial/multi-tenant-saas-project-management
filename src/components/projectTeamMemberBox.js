"use client";

import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditTeamMember from "./admin/editTeamMember";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function ProjectTeamMember({
  id,
  name,
  email,
  role,
  status,
  joinDate,
  refreshData,
}) {
  const rolemap = {
    admin: { text: "text-purple-700", bg: "bg-purple-100" },
    team: { text: "text-blue-700", bg: "bg-blue-100" },
  };

  const seletedRoleColor = rolemap[role] || rolemap.team;

  const statusmap = {
    active: { text: "text-green-600", bg: "bg-green-100" },
    inactive: { text: "text-gray-600", bg: "bg-gray-200" },
  };

  const selectedStatusColor = statusmap[status] || statusmap.active;

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const res = await api.delete(`/user/${id}`);

      if (res.status === 200 || res.status === 204) {
        toast.success("User deleted successfully");
        refreshData();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  return (
    <tr className="bg-white dark:bg-gray-700 font-sans">
      <td className="py-4 px-6 flex items-center whitespace-nowrap gap-3 w-full font-semibold dark:text-gray-200 text-gray-900">
        <div className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 dark:text-gray-200 text-white font-medium">
          {name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")}
        </div>
        {name}
      </td>

      <td className="py-4 px-6 text-gray-700 dark:text-gray-200">{email}</td>

      <td className="py-4 px-6">
        <span
          className={`py-1 px-1.5 text-xs font-medium rounded-xl ${seletedRoleColor.bg} ${seletedRoleColor.text}`}
        >
          {role}
        </span>
      </td>

      <td className="py-4 px-6">
        <span
          className={`py-1 px-1.5 text-xs font-medium rounded-xl ${selectedStatusColor.text} ${selectedStatusColor.bg}`}
        >
          {status}
        </span>
      </td>

      <td className="py-4 px-6">
        <span className="whitespace-nowrap text-xs font-normal">
          {joinDate}
        </span>
      </td>

      <td className="py-4 px-6 text-center">
        <div className="flex justify-center gap-3">
          <EditTeamMember
            id={id}
            EmailAddress={email}
            FullName={name}
            Role={role}
            refreshData={refreshData}
          />

          <button onClick={handleDelete}>
            <RiDeleteBin5Line className="text-red-500 cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProjectTeamMember;
