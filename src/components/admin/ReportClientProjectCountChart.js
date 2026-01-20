"use client"
import React from 'react'
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'

function ReportClientProjectCountChart({chartData}) {
  // const chartData = [
  //  { range: "1 project", clients: 250 },
  // { range: "2–3 projects ", clients: 200 },
  // { range: "4–6 projects ", clients: 150 },
  // { range: "7–10 projects ", clients: 130 },
  // { range: "11–15 projects ", clients: 100 },
  // { range: "16–20 projects " , clients: 80 },
  // { range: "21–25 projects ", clients: 50 },
  // { range: "26–30 projects ", clients: 20 },
  // { range: "31–40 projects ", clients: 10 },
  // { range: "41–50+ projects ", clients: 10 },

  // ];

   const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
    "#A28CF2", "#FF6699", "#33CCFF", "#99CC00",
    "#FFCC00", "#CC66FF", "#FF3366"
  ];
 const chartConfig = {
    clients: { label: "Clients" },
  };

  const filterData=chartData?.filter((e)=>e.clients >0)||[]

  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between items-center">
            <CardTitle>Clients by Project Count</CardTitle>
            <CardDescription>Distribution overview</CardDescription>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer>
          <ChartContainer config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground  md:max-h-[400px] w-full pb-0"
          >
            
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={filterData}
                dataKey="clients"
                nameKey="range"
                label={({ name }) => name} 
                outerRadius={"80%"}
                innerRadius={"20%"}
                paddingAngle={1.2}
                
                labelLine={true}
              >
                {filterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
        <CardFooter>
        
        </CardFooter>
      </Card>
    </div>
  );
}

export default ReportClientProjectCountChart;
