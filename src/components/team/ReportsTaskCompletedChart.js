"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

function ReportsTaskCompletedChart({data}) {
    
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
}
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Task Completed Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer>
            <ChartContainer config={chartConfig} className={"h-[300px] w-full "}>
              <AreaChart accessibilityLayer data={data} margin={{left:12,right:12}}>
                <CartesianGrid  vertical={false}/>
                <XAxis dataKey={"month"} tickLine={false} axisLine={false} tickMargin={3} tickFormatter={(val)=>val.slice(0,3)}/>
                <YAxis dataKey={"completed"} />
                <ChartTooltip cursor={false}  content={<ChartTooltipContent indicator="dot" hideLabel/>} />
                <Area  dataKey={"completed"} type={"linear"} fill="var(--color-desktop)"
              fillOpacity={0.1}
              stroke="var(--color-desktop)"/>
              </AreaChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReportsTaskCompletedChart;
