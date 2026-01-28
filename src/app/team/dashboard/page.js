"use client";
import { DashboardCard } from "@/components/card";
import React, { useEffect, useState } from "react";
import { FaRegFolder } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineTaskAlt } from "react-icons/md";
import DashboardTaskStatusChart from "@/components/team/DashboardTaskStatusChart";
import DashboardWeeklyReportChart from "@/components/team/DashboardWeeklyReportChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logs from "@/components/logs";
import { Item } from "@radix-ui/react-dropdown-menu";
import ProtectedTeam from "@/components/team/ProtectedTeam";
import api from "@/lib/api";

function Page() {
  const [data, setData] = useState({});
  const getData = async () => {
    const res = await api.get("/team/dashboard");
    setData(await res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const activityLogs = [
    {
      message: 'You completed "Design Landing Page"',
      time: "2h ago",
    },
    {
      message: 'New task assigned: "API Integration"',
      time: "4h ago",
    },
    {
      message: 'You commented on "User Authentication"',
      time: "6h ago",
    },
    {
      message: 'You reviewed "Dashboard Layout"',
      time: "8h ago",
    },
    {
      message: 'You updated "Project Timeline"',
      time: "1 day ago",
    },
    {
      message: 'New member joined: "Sarah Khan"',
      time: "2 days ago",
    },
    {
      message: 'Task "Backend Optimization" marked as delayed',
      time: "3 days ago",
    },
    {
      message: 'You reopened "Bug Fix - Login Issue"',
      time: "5 days ago",
    },
  ];

  if (!data) return null;

  return (
    <ProtectedTeam>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 m-4">
          <DashboardCard
            name={"Assigned Projects"}
            value={data.assignedProjects?.value ?? 0}
            Color={"blue"}
            Icon={FaRegFolder}
            amount_change={data.assignedProjects?.growth ?? 0}
            UpOrDown={"increase"}
          />

          <DashboardCard
            name={"Total Tasks"}
            value={data.totalTasks?.value ?? 0}
            Color={"green"}
            Icon={FaRegCheckSquare}
            amount_change={data.totalTasks?.growth ?? 0}
            UpOrDown={"increase"}
          />

          <DashboardCard
            name={"Tasks In Progress"}
            value={data.tasksInProgress?.value ?? 0}
            Color={"orange"}
            Icon={LuClock3}
            amount_change={data.tasksInProgress?.growth ?? 0}
            UpOrDown={"increase"}
          />
          <DashboardCard
            name={"Tasks Completed"}
            value={data.tasksCompleted?.value ?? 0}
            Color={"purple"}
            Icon={MdOutlineTaskAlt}
            amount_change={data.tasksCompleted?.growth ?? 0}
            UpOrDown={"increase"}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 m-4 gap-4  ">
          <DashboardTaskStatusChart
            todo={data.totalTaskSummary?.todo ?? 0}
            completed={data.totalTaskSummary?.completed ?? 0}
            delayed={data.totalTaskSummary?.delayed ?? 0}
            inProgress={data.totalTaskSummary?.inProgress ?? 0}
          />
          <DashboardWeeklyReportChart chartData={data.weeklyReport ?? []} />
        </div>

        <Card className={"m-4 dark:bg-gray-800"}>
          <CardHeader>
            <CardTitle className={"text-xl font-sans"}>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <Separator></Separator>
          <CardContent
            className={
              "max-h-[325px] overflow-auto custom-scrollbar scroll-smooth"
            }
          >
            {activityLogs.map((item, idx) => (
              <Logs key={idx} time={item.time} title={item.message} />
            ))}
          </CardContent>
        </Card>
      </div>
    </ProtectedTeam>
  );
}

export default Page;
