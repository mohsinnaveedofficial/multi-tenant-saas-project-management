"use client";
import api from "@/lib/api";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

function Projectdetailsoverview({ project, roleInProject }) {

  const groupedMembers = useMemo(() => {
    if (!project?.assignedUsers) return [];

    const map = {};

    project.assignedUsers.forEach((item) => {
      const userId = item.user.id;

      if (!map[userId]) {
        map[userId] = {
          user: item.user,
          roles: [],
        };
      }

      if (!map[userId].roles.includes(item.roleInProject)) {
        map[userId].roles.push(item.roleInProject);
      }
    });

    return Object.values(map);
  }, [project?.assignedUsers]);

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .trim()
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };
  const STATUS_PROGRESS = {
    notStarted: 0,
    pending: 25,
    inProgress: 50,
    onHold: 50,
    completed: 100,
    cancelled: 0,
  };
  const progress = STATUS_PROGRESS[project?.status] ?? 0;

  return (
    <div className="px-4 sm:px-6">
      <div className="mt-4 flex flex-col md:flex-row gap-4 text-sm">
        <div className="rounded-lg border border-gray-100 dark:border-gray-600 dark:bg-gray-800  bg-gray-50 p-4 flex-1">
          <h1 className="font-bold">Your Role</h1>
          <h2 className="text-gray-500 dark:text-gray-300 mt-2">
            {roleInProject}
          </h2>
        </div>

        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex-1 dark:border-gray-600 dark:bg-gray-800 ">
          <h1 className="font-bold ">Progress</h1>
          <h2 className="text-gray-500 dark:text-gray-300 mt-2">{progress}%</h2>
        </div>

        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex-1 dark:border-gray-600 dark:bg-gray-800 ">
          <h1 className="font-bold ">Status</h1>
          <span className="text-green-800 bg-green-100 border border-green-200 rounded-2xl text-sm px-2 py-0.5 mt-2 inline-block">
            {project?.status}
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm font-bold">Project Description</div>
      <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        {project?.description || "Not Any Description"}
      </div>

      <div className="mt-3 font-bold text-sm">Team Members</div>
      <div className="flex flex-wrap gap-4 mt-2">
        {groupedMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-100 dark:border-gray-700 dark:bg-gray-700 bg-gray-100 py-1 px-4 flex-shrink-0"
          >
            <div className="flex mt-2 gap-2 items-center">
              <span className="text-white text-sm  bg-blue-600 rounded-full flex  items-center justify-center w-10 h-10">
                {getInitials(member.user.name)}
              </span>
              <div>
                <h1 className="text-[13px] capitalize">{member.user.name}</h1>
                {member.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] ms-1 px-2 py-0.5 capitalize  rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {role}
                  </span>
                ))}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projectdetailsoverview;
