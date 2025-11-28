import ReportClientProjectCountChart from "@/components/admin/ReportClientProjectCountChart";
import ReportProjectCompChart from "@/components/admin/ReportProjectCompChart";
import ReportsStatsPanel from "@/components/admin/ReportsStatsPanel";
import ReportTeamProductivityChart from "@/components/admin/ReportTeamProductivityChart";
import React from "react";
import { FaRegFolder } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { WiTime3 } from "react-icons/wi";
import { MdOutlineStarOutline } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logs from "@/components/logs";

function Page() {
  const logs = [
    { title: "Project 'E-commerce Platform' Completed", time: "2 hours ago" },
    { title: "Client 'TechCorp' Added a New Project", time: "5 hours ago" },
    {
      title: "Invoice #452 Generated for 'Marketing Campaign'",
      time: "8 hours ago",
    },
    { title: "User 'John Doe' Updated Project Details", time: "10 hours ago" },
    {
      title: "Project 'Mobile App Development' Marked as In Progress",
      time: "1 day ago",
    },
    { title: "New Client 'GreenLeaf Agency' Registered", time: "1 day ago" },
    {
      title: "Team Member 'Sarah Khan' Assigned to Project 'CRM System'",
      time: "2 days ago",
    },
    { title: "Payment Received for 'Website Redesign'", time: "3 days ago" },
    { title: "Project 'Portfolio Website' Archived", time: "4 days ago" },
    {
      title: "Client 'NextGen Solutions' Updated Billing Info",
      time: "5 days ago",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <ReportProjectCompChart />
        <ReportTeamProductivityChart />
      </div>

      <ReportClientProjectCountChart />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
        <ReportsStatsPanel
          Icon={FaRegFolder}
          color={"blue"}
          num={12}
          stats={"+25%"}
          title={"Project This Month"}
        />
        <ReportsStatsPanel
          Icon={SiTicktick}
          color={"green"}
          num={"87%"}
          stats={"+2%"}
          title={"Complete Rate"}
        />
        <ReportsStatsPanel
          Icon={WiTime3}
          color={"red"}
          num={"28d"}
          stats={"+3d"}
          title={"Avg. Project Time"}
        />
        <ReportsStatsPanel
          Icon={MdOutlineStarOutline}
          color={"purple"}
          num={4.8}
          stats={"+0.2"}
          title={"Client Satisfaction"}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className={"text-xl font-sans"}>Recent Activity</CardTitle>
        </CardHeader>
        <Separator></Separator>
        <CardContent
          className={
            "max-h-[325px] overflow-auto custom-scrollbar scroll-smooth"
          }
        >
          {logs.map((log, idx) => (
            <Logs key={idx} title={log.title} time={log.time} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
