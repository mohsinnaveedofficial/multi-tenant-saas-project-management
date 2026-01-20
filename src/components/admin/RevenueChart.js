"use client";
import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  ComposedChart,
} from "recharts";

function RevenueChart({ data: chartData }) {
  const data = chartData || [
    { name: "Jan", revenue: 1200, cost: 800 },
    { name: "Feb", revenue: 1500, cost: 1100 },
    { name: "Mar", revenue: 1700, cost: 1200 },
    { name: "Apr", revenue: 2000, cost: 1300 },
    { name: "May", revenue: 2300, cost: 1600 },
    { name: "Jun", revenue: 2600, cost: 1800 },
    { name: "Jul", revenue: 3000, cost: 2000 },
    { name: "Aug", revenue: 3200, cost: 2100 },
    { name: "Sep", revenue: 3400, cost: 2200 },
    { name: "Oct", revenue: 3800, cost: 2400 },
    { name: "Nov", revenue: 4200, cost: 2600 },
    { name: "Dec", revenue: 4600, cost: 2800 },
  ];
  return (
    <div className="  bg-white rounded-2xl shadow-sm p-5 m-4 min-h-80 font-sans">
      <h2 className="mb-4 text-gray-800  text-xl font-semibold ">
        Revenue vs Cost
      </h2>
      <div className="bg-gradient-to-b w-full h-[90%] pt-3 from-[#001b3a] to-[#002b5c] rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset={"5%"} stopColor="#00b4ff" stopOpacity={"0.8"} />
                <stop offset={"95%"} stopColor="#0077ff" stopOpacity={"0.2"} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
            <XAxis dataKey={"name"} stroke="#a0c4ff" />
            <YAxis stroke="#a0c4ff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#001b3a",
                border: "1px solid #0077ff",
                borderRadius: "5px",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#00b4ff" }}
            />
            <Legend wrapperStyle={{ color: "#a0c4ff" }} />
            <Bar
              dataKey={"cost"}
              fill="#1e3a8a"
              radius={[8, 8, 0, 0]}
              isAnimationActive={true}
              
            />
            <Bar
              animationBegin={200}
              animationDuration={1200}
              animationEasing="ease-out"
              dataKey={"revenue"}
              fill="url(#colorRevenue)"
              radius={[8, 8, 0, 0]}
            />
            <Line
              type={"monotone"}
              dataKey="revenue"
              name="revenue"
              stroke="#00e0ff"
              strokeWidth={3}
              dot={{ r: 2, fill: "#00e0ff" }}
              activeDot={{ r: 7 }}
              legendType="none"
              isAnimationActive={true}
              hide={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
