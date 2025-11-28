"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

function DashboardTaskStatusChart({ todo, inProgress, completed, delayed }) {
  const chartData = [
    { status: "Completed", value: completed, fill: "#3b82f6" },
    { status: "In Progress", value: inProgress, fill: "#22c55e" },
    { status: "To do", value: todo, fill: "#b7cfd1" },
    { status: "Delayed", value: delayed, fill: "#facc15" },
  ];

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Task Status Distribution</CardTitle>
        </CardHeader>

        <ResponsiveContainer>
          <CardContent className={"flex justify-center flex-col sm:flex-row items-center gap-10"}>
            <div>
              <ChartContainer
                config={{}}
                className="mx-auto aspect-square h-[300px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    dataKey={"value"}
                    data={chartData}
                    nameKey={"status"}
                    innerRadius={60}
                    strokeWidth={5}
                    activeIndex={0}
                    activeShape={(props) => (
                      <Sector {...props} outerRadius={props.outerRadius + 10} />
                    )}
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div>
              {chartData.map((item, idx) => (
                <div
                  className="flex justify-start items-center gap-3"
                  key={idx}
                >
                  <div
                    className="h-3 w-3  rounded-full "
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-gray-600 font-sans">{item.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

export default DashboardTaskStatusChart;
