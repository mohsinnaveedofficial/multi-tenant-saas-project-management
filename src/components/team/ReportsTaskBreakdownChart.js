"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

function ReportsTaskBreakdownChart({ chartData }) {
  const outerData = chartData.map((project, idx) => ({
    name: project.name,
    color: project.color,
    value: project.tasks.reduce((sum, t) => sum + t.value, 0),
  }));
  let [activeProject, setActiveProject] = useState(chartData[0]);

  return (
    <div>
      <Card className={"bg-gray-800"}>
        <CardHeader>
          <CardTitle>Project & Task Status Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center flex-col sm:flex-row">
          <ResponsiveContainer>
            <ChartContainer config={{}} className={"h-[300px] w-full"}>
              <PieChart>
                <Pie
                  data={activeProject?.tasks}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={50}
                  outerRadius={65}
                  label
                >
                  {activeProject?.tasks.map((t, i) => (
                    <Cell key={`inner-${i}`} fill={t.color} />
                  ))}
                </Pie>

                <Pie
                  data={outerData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={94}
                  outerRadius={130}
                  onClick={(_, index) => setActiveProject(chartData[index])}
                >
                  {outerData.map((entry, index) => (
                    <Cell key={`outer-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelKey={"name"}
                      nameKey={"value"}
                      indicator="line"
                    />
                  }
                />
              </PieChart>
            </ChartContainer>
          </ResponsiveContainer>

          <div className=" w-44 shrink-0 min-w-[11rem]">
            <h4 className="font-medium whitespace-nowrap text-xl font-sans mb-2">
              {" "}
              {activeProject?.name || ""}
            </h4>
            {activeProject?.tasks.map((item, idx) => (
              <div
                key={idx}
                className="text-gray-600 dark:text-gray-400 text-start flex  justify-start gap-4 items-center text-sm whitespace-nowrap font-sans"
              >
                <div
                  className="h-2 w-2 rounded-full "
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="">
                  {item.status} : {item.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReportsTaskBreakdownChart;
