"use client";
import { useTheme } from "next-themes";
import React from "react";
import {
  Pie,
  PieChart,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
function ProjectCompletionChart({ statusCounts }) {
  const data = [
    { name: "Pending", value: statusCounts?.pending ?? 0, fill: "#0088FE" },
    { name: "Not Started", value: statusCounts?.notStarted ?? 0, fill: "#00C49F" },
    { name: "In Progress", value: statusCounts?.inProgress ?? 0, fill: "#FFBB28" },
    { name: "On Hold", value: statusCounts?.onHold ?? 0, fill: "#FF8042" },
    { name: "Completed", value: statusCounts?.completed ?? 0, fill: "#ff00ffff" },
    { name: "Cancelled", value: statusCounts?.cancelled ?? 0, fill: "#00fffbff" },
  ];
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800    dark:border-gray-700 shadow-sm p-5  rounded-2xl border m-4 border-gray-200 ">
      <h2 className="font-semibold font-sans text-lg ligh:text-gray-800 dark:text-gray-200 mb-4">
        Project Completion
      </h2>
     <div className="h-0.5  bg-gray-200 dark:bg-gray-700 "></div>

      <div className="flex mt-3 sm:mt-0 sm:flex-row flex-col-reverse justify-between items-center ps-8   ">
        <div className="space-y-2">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="  flex flex-row gap-2  justify-start items-center"
            >
              <div
                className="h-3 w-3 rounded-full "
                style={{ backgroundColor: item.fill }}
              ></div>
              <p className=" text-gray-600 dark:text-gray-300  flex-1">
                {item.name}{" "}
                <span className="font-semibold  text-gray-800 dark:text-gray-200">
                  {item.value}
                </span>{" "}
              </p>
            </div>
          ))}
        </div>
        <div className="w-0.5 hidden sm:inline bg-gray-200 dark:bg-gray-700 h-72 "></div>
        <div className=" w-full sm:w-1/2 h-64 mt-5 "  >
          <ResponsiveContainer style={{ height: "100%", width: "100%" }}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={"80%"}
                outerRadius={"100%"}
                cornerRadius={"50%"}
                paddingAngle={5}
                dataKey={"value"}
                isAnimationActive={true}
                activeShape={null}
                style={{outline:"none"}}
                // stroke="#c4c3c2"
               
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "0.5px solid lightgray",
                  fontSize: "12px",
                  height: "30px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ProjectCompletionChart;
