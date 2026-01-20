

"use client";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function ReportProjectCompChart({chartData}) {
// const chartData = [
//   { month: "Jan", completion: 10, },
//   { month: "Feb", completion: 120,  },
//   { month: "Mar", completion: 122,  },
//   { month: "Apr", completion: 152,  },
//   { month: "May", completion: 182,  },
//   { month: "Jun", completion: 201, },
// ];

const chartConfig = {
  desktop: {
    label: "performance",
    color: "var(--chart-1)",
  },
};

return (
  <Card >
    <CardHeader className={"flex justify-between items-center"}> 
      <CardTitle>Project Completion Rate</CardTitle>
      <CardDescription>Last 6 months</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
         
          <YAxis tickFormatter={(value) => `${value}`} domain={[0, 160]} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="completion" fill="#3B82F6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>

)
}
export default ReportProjectCompChart


