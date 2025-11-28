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

function FinanceChart() {
  const chartData = [
    { month: "Jan", performance: 5 },
    { month: "Feb", performance: 15 },
    { month: "Mar", performance: 25 },
    { month: "Apr", performance: 35 },
    { month: "May", performance: 50 },
    { month: "Jun", performance: 70 },
    { month: "Jul", performance: 90 },
    { month: "Aug", performance: 110 },
    { month: "Sep", performance: 130 },
    { month: "Oct", performance: 150 },
    { month: "Nov", performance: 140 },
    { month: "Dec", performance: 190 },
  ];

  const chartConfig = {
    desktop: {
      label: "performance",
      color: "var(--chart-1)",
    },
  };

  return (
    <Card className={"m-4"}>
      <CardHeader>
        <CardTitle>Monthly Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="max-h-[380px] w-full font-sans"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 160]} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="performance" fill="#3B82F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default FinanceChart;
