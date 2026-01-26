"use client";

import React, { useEffect, useState } from "react";
import AddTeamMemberComponent from "@/components/admin/addTeamMemberComponent";
import ProjectTeamMember from "@/components/projectTeamMemberBox";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import TeamMemberComponent from "@/components/teamMemberComponent";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import { toast } from "sonner";

function User() {
  const [data, setData] = useState([]);
  const [fetching,setIsFetching]=useState(true)

  const fetchUsers = async () => {
    try {
      const res = await api.get("/user");
      setData(res.data || []);
    } catch (error) {
      toast.error("Can't load users");
      setData([]);
    }finally{
      setIsFetching(false)
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const totalUsers = data.length;
  const activeUsers = data.filter((u) => u.status === "active").length;
  const admins = data.filter((u) => u.role === "admin").length;

  const teamData = [
    {
      id: 1,
      users: "Total Users",
      number: totalUsers,
      Icon: HiOutlineUserGroup,
      bgColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      users: "Active Users",
      number: activeUsers,
      Icon: FaUser,
      bgColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      users: "Admins",
      number: admins,
      Icon: HiOutlineUserCircle,
      bgColor: "bg-purple-200 text-purple-700",
    },
  ];

  return (
    <ProtectedAdmin>
      
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between flex-col sm:flex-row p-8">
          <div className="text-start flex flex-col">
            <h2 className="font-semibold text-2xl font-sans">Team Members</h2>
            <h4 className="text-gray-500">
              Manage your team members and their roles
            </h4>
          </div>
          <div className="mt-3 sm:mt-0 w-full sm:w-auto flex justify-end">
            <AddTeamMemberComponent refreshData={fetchUsers} />
          </div>
        </div>
        {fetching ? null :(<>

        <div className="rounded-lg overflow-x-auto   mx-8 shadow-sm">
          <table className="w-full rounded-lg border overflow-hidden  border-gray-200 border-separate bg-gray-100 m-0 mt-0 border-spacing-y-[3px] border-spacing-x-0">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 text-left text-xsmibo font-seld text-gray-500 uppercase">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                  ROLE
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                  JOIN DATE
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <ProjectTeamMember
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  role={item.role}
                  status={item.status}
                  joinDate={new Date(item.joinDate).toLocaleDateString()}
                  refreshData={fetchUsers}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-8">
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
        </>
        )}
      </div>
    </ProtectedAdmin>
  );
}

export default User;
