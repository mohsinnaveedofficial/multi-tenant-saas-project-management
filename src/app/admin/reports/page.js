"use client"
import ReportClientProjectCountChart from "@/components/admin/ReportClientProjectCountChart";
import ReportProjectCompChart from "@/components/admin/ReportProjectCompChart";
import ReportsStatsPanel from "@/components/admin/ReportsStatsPanel";
import ReportTeamProductivityChart from "@/components/admin/ReportTeamProductivityChart";
import React, { useEffect, useState } from "react";
import { FaRegFolder } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { WiTime3 } from "react-icons/wi";
import { MdOutlineStarOutline } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logs from "@/components/logs";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";

function Page() {
  const [reportData ,setdata]=useState({}); 

  const getData=async()=>{
    const res=api.get("/admin/report");
    setdata((await res).data)
  }
useEffect(()=>{
    getData();
},[])

  


  
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
    <ProtectedAdmin>
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <ReportProjectCompChart chartData={reportData?.projectCompletionRate ?? []} />
        <ReportTeamProductivityChart chartData={reportData?.teamProductivity ?? []} />
      </div> 

      <ReportClientProjectCountChart chartData={reportData?.clientByProjectCount ?? []} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
        <ReportsStatsPanel
          Icon={FaRegFolder}
          color={"blue"}
          num={(reportData?.projectThisMonth?.value ?? 0)}
          stats={`${reportData?.projectThisMonth?.growth ?? 0}%`}
          title={"Project This Month"}
        />
        <ReportsStatsPanel
          Icon={SiTicktick}
          color={"green"}
          num={`${reportData?.completionRate?.value ?? 0}%`}
          stats={`${reportData?.completionRate?.growth ?? 0}%`}
          title={"Complete Rate"}
        />
        <ReportsStatsPanel
          Icon={WiTime3}
          color={"red"}
          num={`${reportData?.avgProjectTime?.value ?? 0}d`}
          stats={`${reportData?.avgProjectTime?.growth ?? 0}d`}
          title={"Avg. Project Time"}
        />
        <ReportsStatsPanel
          Icon={MdOutlineStarOutline}
          color={"purple"}
          num={(reportData?.clientSatisfaction?.value ?? 4.8)}
          stats={`${reportData?.clientSatisfaction?.growth ?? 0}`}
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
    </ProtectedAdmin>
  );
}

export default Page;
