"use client";
import { DashboardCard, DashboardActiveProjects } from "@/components/card";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { LuFolder } from "react-icons/lu";
import { RiTaskLine } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import ProjectCompletionChart from "@/components/admin/ProjectCompletionChart";
import RevenueChart from "@/components/admin/RevenueChart";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import api from "@/lib/api";
import { getAccessToken } from "@/lib/auth";
import Error from "next/error";
function Dashboard() {

   const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/admin/dashboard");
        setData(res.data);
      } catch (err) {
        toast.error("Failed to load dashboard");
      }
    };

    fetchDashboard();
  }, []);

  // 🔑 Important: render NOTHING until data exists
  if (!data) return null;

  const chartData = (data.monthlyChartData || []).map((m) => ({
    name: m.month,
    revenue: m.revenue ?? 0,
    cost: m.cost ?? 0,
  }));

  
  const formatCurrency = (v) => `$${Number(v).toLocaleString()}`;

  const mapStatusProgress = (status) => {
    switch (status) {
      case "notStarted": return 0;
      case "inProgress": return 50;
      case "pending": return 20;
      case "onHold": return 30;
      case "completed": return 100;
      case "cancelled": return 0;
      default: return 0;
    }
  };

  const formatStatus = (status) => {
    switch (status) {
      case "notStarted": return "Not Started";
      case "inProgress": return "In Progress";
      case "pending": return "Pending";
      case "onHold": return "On Hold";
      case "completed": return "Completed";
      case "cancelled": return "Cancelled";
      default: return status;
    }
  };

  
  return (
    <ProtectedAdmin>

    <div className="text-black dark:text-white">
      <div className="grid grid-cols-2 gap-8 m-5 md:grid-cols-3 ">
        <DashboardCard
          name={"Total Client"}
          value={data.totalClient.value}
          amount_change={data.totalClient.growth+"%"}
          Color={"blue"}
          Icon={FaRegUser}
        />
        <DashboardCard
          name={"Active Projects"}
          value={data.activeProjects.value}
          amount_change={data.activeProjects.growth+"%"}
          Color={"green"}
          Icon={LuFolder}
        />
        <DashboardCard
          name={"Active Tasks"}
          value={data.activeTasks.value}
          amount_change={data.activeTasks.growth+"%"}
          Color={"orange"}
          Icon={RiTaskLine}
        />
        <DashboardCard
          name={"Complete Tasks"}
          value={data.completedTasks.value}
          amount_change={data.completedTasks.growth+"%"}
          Color={"purple"}
          Icon={MdOutlineTaskAlt}
        />
        <DashboardCard
          name={"Total Revenue"}
          value={formatCurrency(data.totalRevenue.value)}
          amount_change={data.totalRevenue.growth+"%"}
          Color={"red"}
          Icon={RiMoneyDollarCircleLine}
        />
        <DashboardCard
          name={"Net Profit"}
          value={formatCurrency(data.netProfit.value)}
          amount_change={data.netProfit.growth+"%"}
          Color={"yellow"}
          Icon={GoGraph}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
    
    <RevenueChart data={chartData} />
    <ProjectCompletionChart statusCounts={data.projectStatusCounts} />
   


</div>

      <div className=" border border-gray-200 dark:border-gray-700 m-4 rounded-2xl  overflow-y-hidden overflow-x-scroll lg:overflow-x-auto  mb-10">
        <div className="bg-white dark:bg-gray-800 p-4  rounded-t-2xl">
          <h3 className="font-sans font-semibold text-lg"> Active Projects</h3>
        </div>
        <table className="text-gray-400 border-separate border-spacing-x-0 border-spacing-y-[3px]  w-full overflow-x-scroll  pt-1   rounded-lg">
          <thead className="font-normal font-sans dark:bg-gray-900 bg-gray-50" >
            <tr>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Projects</th>
              <th className="  font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Client</th>
              <th className=" font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Progress</th>
              <th className=" font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Status</th>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Deadline</th>
            </tr>
          </thead>
          <tbody className="text-black dark:text-gray-200 font-sans rounded-2xl ">
            {data.project.map((p) => (
              <DashboardActiveProjects
                key={p.id}
                title={p.name}
                company={p.client?.companyName || p.client?.name}
                progress={mapStatusProgress(p.status)}
                status={  formatStatus(p.status)}
                date={new Date(p.end).toLocaleDateString()}
              />
            ))}
          </tbody>
        </table>
      </div>


    </div>
    </ProtectedAdmin>
  );
}

export default Dashboard;
