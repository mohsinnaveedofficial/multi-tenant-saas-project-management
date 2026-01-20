"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function ReportTeamProductivityChart({chartData}) {
  // const chartData = [
  //   { Week: "Week 1", taskCompleted:0,taskPending:20 },
  //   { Week: "Week 2",  taskCompleted:140,taskPending:30},
  //   { Week: "Week 3",  taskCompleted:50,taskPending:40 },
  //   { Week: "Week 4",  taskCompleted:300,taskPending:40 },
  // ];

  const chartConfig = {
    taskCompleted: { label: "Task Completed", color: "var(--chart-1)" },
    taskPending: { label: "Task Pending", color: "var(--chart-2)" },
   
  };

  return (
    <Card >
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Team Productivity</CardTitle>
        <CardDescription>Weekly task completion per member</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Area
              dataKey="taskCompleted"
              type="natural"
              stackId="a"
              fill="var(--chart-1)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
            />
            <Area
              dataKey="taskPending"
              type="natural"
              stackId="a"
              fill="var(--chart-2)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
            />
            <Area
              dataKey="Charlie"
              type="natural"
              stackId="a"
              fill="var(--chart-3)"
              fillOpacity={0.4}
              stroke="var(--chart-3)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ReportTeamProductivityChart;
