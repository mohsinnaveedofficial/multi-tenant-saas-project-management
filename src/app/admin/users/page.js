import React from "react";
import AddTeamMemberComponent from "@/components/admin/addTeamMemberComponent";
import ProjectTeamMember from "@/components/projectTeamMemberBox";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import TeamMemberComponent from "@/components/teamMemberComponent";

function AddTask() {
  const data = [
    {
      name: "John Doe",
      email: "john.doe@company.com",
      role: "Admin",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      name: "Sarah Miller",
      email: "sarah.miller@company.com",
      role: "Employee",
      status: "Active",
      joinDate: "2024-01-20",
    },
    {
      name: "Mike Wilson",
      email: "mike.wilson@company.com",
      role: "Employee",
      status: "Active",
      joinDate: "2024-01-25",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@company.com",
      role: "Employee",
      status: "Inactive",
      joinDate: "2024-02-01",
    },
    {
      name: "David Brown",
      email: "david.brown@company.com",
      role: "Employee",
      status: "Active",
      joinDate: "2024-02-05",
    },
  ];

  const teamData = [
    {
      id: 1,
      users: "Total Users",
      number: 5,
      Icon: HiOutlineUserGroup,
      bgColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      users: "Active Users",
      number: 4,
      Icon: FaUser,
      bgColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      users: "Admins",
      number: 1,
      Icon: HiOutlineUserCircle,
      bgColor: "bg-purple-200 text-purple-700",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-8">
        <div className="text-start flex flex-col">
          <h2 className="font-semibold text-2xl font-sans">Team Members</h2>
          <h4 className="text-gray-500">Manage your team members and their roles</h4>
        </div>
        <AddTeamMemberComponent/>
      </div>

      {/* Table container with proper horizontal scrolling */}
      <div className="px-4 sm:px-8 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-[1000px] w-full rounded-lg border border-gray-200 bg-white shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ROLE
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  JOIN DATE
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <ProjectTeamMember
                  key={index}
                  id={index}
                  name={item.name}
                  email={item.email}
                  role={item.role}
                  status={item.status}
                  joinDate={item.joinDate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3 cards */}
      <div className="grid grid-cols-3 gap-6 m-8">
        {teamData.map((item) => (
          <TeamMemberComponent
            key={item.id}
            Icon={item.Icon}
            users={item.users}
            number={item.number}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default AddTask;