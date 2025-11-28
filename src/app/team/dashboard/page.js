import { DashboardCard } from "@/components/card";
import React from "react";
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

function Page() {
  const WeeklyReportchartData = [
    { day: "Monday", performance: 5 },
    { day: "Tuesday", performance: 15 },
    { day: "Wednesday", performance: 25 },
    { day: "Thursday", performance: 35 },
    { day: "Friday", performance: 50 },
    { day: "Saturday", performance: 170 },
    { day: "Sunday", performance: 4 },
  ];

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

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8 m-4">
        <DashboardCard
          name={"Assigned Projects"}
          value={6}
          Color={"blue"}
          Icon={FaRegFolder}
          amount_change={2}
          UpOrDown={"increase"}
        />

        <DashboardCard
          name={"Total Tasks"}
          value={24}
          Color={"green"}
          Icon={FaRegCheckSquare}
          amount_change={5}
          UpOrDown={"increase"}
        />

        <DashboardCard
          name={"Tasks In Progress"}
          value={8}
          Color={"orange"}
          Icon={LuClock3}
          amount_change={3}
          UpOrDown={"increase"}
        />
        <DashboardCard
          name={"Tasks In Progress"}
          value={8}
          Color={"purple"}
          Icon={MdOutlineTaskAlt}
          amount_change={12}
          UpOrDown={"increase"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-4  ">
        <DashboardTaskStatusChart
          todo={10}
          completed={11}
          delayed={15}
          inProgress={15}
        />
        <DashboardWeeklyReportChart chartData={WeeklyReportchartData} />
      </div>

      <Card className={"m-4"}>
        <CardHeader>
          <CardTitle className={"text-xl font-sans"}>Recent Activity</CardTitle>
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
  );
}

export default Page;
