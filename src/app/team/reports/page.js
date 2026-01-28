"use client";
import ReportsTaskBreakdownChart from "@/components/team/ReportsTaskBreakdownChart";
import ReportsTaskCompletedChart from "@/components/team/ReportsTaskCompletedChart";
import ReportStats from "@/components/team/ReportStats";
import { CardContent, CardHeader, Card, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import api from "@/lib/api";
import ProtectedTeam from "@/components/team/ProtectedTeam";

function Page() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await api.get("/team/report");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return null;
  }

  const projectTaskBreakDown = (data.lastThreeProjects || []).map(
    (item, idx) => ({
      name: item.projectName,
      color: ["#3b82f6", "#22c55e", "#f59e0b"][idx % 3],
      tasks: [
        { status: "Completed", value: item.completed, color: "#16a34a" },
        { status: "In Progress", value: item.inProgress, color: "#3b82f6" },
        { status: "To Do", value: item.todo, color: "#fbbf24" },
        { status: "Delayed", value: item.delayed, color: "#ef4444" },
      ],
    }),
  );

  const performanceData = [
    {
      week: "Jan 22–28",
      tasksCompleted: 12,
      averageTime: 2.1,
      projects: 4,
      performance: "Excellent",
    },
    {
      week: "Jan 15–21",
      tasksCompleted: 15,
      averageTime: 1.8,
      projects: 5,
      performance: "Excellent",
    },
    {
      week: "Jan 08–14",
      tasksCompleted: 10,
      averageTime: 2.3,
      projects: 3,
      performance: "Good",
    },
    {
      week: "Jan 01–07",
      tasksCompleted: 8,
      averageTime: 2.5,
      projects: 2,
      performance: "Good",
    },
    {
      week: "Dec 25–31",
      tasksCompleted: 11,
      averageTime: 2.0,
      projects: 3,
      performance: "Excellent",
    },
    {
      week: "Dec 18–24",
      tasksCompleted: 9,
      averageTime: 2.4,
      projects: 3,
      performance: "Good",
    },
    {
      week: "Dec 11–17",
      tasksCompleted: 13,
      averageTime: 1.9,
      projects: 4,
      performance: "Excellent",
    },
    {
      week: "Dec 04–10",
      tasksCompleted: 7,
      averageTime: 2.6,
      projects: 2,
      performance: "Fair",
    },
    {
      week: "Nov 27–Dec 03",
      tasksCompleted: 14,
      averageTime: 1.7,
      projects: 5,
      performance: "Excellent",
    },
    {
      week: "Nov 20–26",
      tasksCompleted: 9,
      averageTime: 2.2,
      projects: 3,
      performance: "Good",
    },
  ];

  return (
    <ProtectedTeam>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-4 mb-2 ">
          <ReportStats
            value={data.reportStats.totalTasksAssigned}
            desc={"This Month"}
            title={"Total Tasks Completed"}
          />
          <ReportStats
            value={data?.reportStats?.avgCompletionTime || "" + " days"}
            title={"Average Completion Time"}
            desc={"Per Task"}
          />
          <ReportStats
            value={data?.reportStats?.projectsAssigned || ""}
            title={"Project Involved"}
            desc={"Active"}
          />
          <ReportStats
            value={data.reportStats.performanceScore + " %"}
            title={"Performance Score"}
            desc={"This Quarter"}
          />
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8  my-8 ">
          <ReportsTaskCompletedChart data={data.monthlyChartData || []} />

          <ReportsTaskBreakdownChart chartData={projectTaskBreakDown || []} />
        </div>

        <Card className="font-sans  my-8 dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Weekly Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className={""}>
                    <TableCaption></TableCaption>

              <TableHeader className={"bg-gray-50 dark:bg-gray-700"}>
                <TableRow>
                  <TableHead className={"text-gray-500 dark:text-gray-300"}>WEEK</TableHead>
                  <TableHead className={"text-gray-500 dark:text-gray-300"}>
                    TASK COMPLETED
                  </TableHead>
                  <TableHead className={"text-gray-500 dark:text-gray-300"}>
                    AVERAGE TIME
                  </TableHead>
                  <TableHead className={"text-gray-500 dark:text-gray-300"}>PROJECTS</TableHead>
                  <TableHead className={"text-gray-500 dark:text-gray-300"}>PERFORMANCE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((item, idx) => (
                  <TableRow key={idx} className={" border-gray-100 dark:border-gray-700"}>
                    <TableCell
                      className={"px-1.5 py-2 md:px-4 md:py-3 text-gray-950 dark:text-gray-200 "}
                    >
                      {item.week}
                    </TableCell>
                    <TableCell
                      className={"px-1.5 py-2 md:px-4 md:py-3 text-gray-700 dark:text-gray-200"}
                    >
                      {item.tasksCompleted}
                    </TableCell>
                    <TableCell
                      className={"px-1.5 py-2 md:px-4 md:py-3 text-gray-700 dark:text-gray-200 "}
                    >
                      {item.averageTime} days
                    </TableCell>
                    <TableCell
                      className={"px-1.5 py-2 md:px-4 md:py-3 text-gray-700 dark:text-gray-200"}
                    >
                      {item.projects}
                    </TableCell>
                    <TableCell className={"px-1.5 py-2 md:px-4 md:py-3 "}>
                      {item.performance == "Good" ? (
                        <Badge className={"bg-blue-500 text-white"}>
                          {item.performance}
                        </Badge>
                      ) : item.performance == "Excellent" ? (
                        <Badge className={"bg-green-200 text-green-700"}>
                          {item.performance}
                        </Badge>
                      ) : (
                        <Badge variant={"destructive"}>
                          {item.performance}
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter></TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ProtectedTeam>
  );
}

export default Page;
