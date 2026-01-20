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
 const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultData = React.useMemo(() => ({
    totalClient: { value: 1, growth: 100 },
    activeProjects: { value: 0, growth: 0 },
    activeTasks: { value: 1, growth: 100 },
    completedTasks: { value: 1, growth: 100 },
    totalRevenue: { value: 0, growth: 0 },
    netProfit: { value: 0, growth: 0 },
    totalCost: { value: 0, growth: 0 },
    projectStatusCounts: {
      notStarted: 1,
      inProgress: 0,
      pending: 0,
      completed: 0,
      onHold: 0,
      cancelled: 0,
    },
    monthlyChartData: Array.from({ length: 12 }).map((_, i) => ({
      month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
      revenue: 0,
      cost: 0,
    })),
    project: [],
  }), []);

  useEffect(() => {
    let mounted = true;

    const fetchDashboard = async () => {
      setLoading(true);
      setError(null);
      try {
       
        const res = await api.get("/admin/dashboard");

        if (mounted) setBackendData(res.data || defaultData);
      } catch (e) {
        if (mounted) {
          setBackendData(defaultData);
          setError(e);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchDashboard();

    return () => { mounted = false; };
  }, [defaultData]); 

  const formatCurrency = (val) => `$${Number(val).toLocaleString()}`;

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

  const data = backendData || defaultData;
  const chartData = (data.monthlyChartData || []).map((m) => ({
    name: m.month || m.name,
    revenue: m.revenue ?? 0,
    cost: m.cost ?? 0,
  }));

  if (loading) {
    return (
      <ProtectedAdmin>
        <div className="text-center mt-10">Loading dashboard...</div>
      </ProtectedAdmin>
    );
  }

  if (error) {
    toast.error("Failed to load")
  }
  
  return (
    <ProtectedAdmin>

    <div className="text-black">
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

      <div className=" border border-gray-200 m-4 rounded-2xl  overflow-y-hidden overflow-x-scroll lg:overflow-x-auto  mb-10">
        <div className="bg-white p-4  rounded-t-2xl">
          <h3 className="font-sans font-semibold text-lg"> Active Projects</h3>
        </div>
        <table className="text-gray-400 border-separate border-spacing-x-0 border-spacing-y-[3px]  w-full overflow-x-scroll  pt-1   rounded-lg">
          <thead className="font-normal font-sans">
            <tr>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Projects</th>
              <th className="  font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Client</th>
              <th className=" font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Progress</th>
              <th className=" font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Status</th>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">Deadline</th>
            </tr>
          </thead>
          <tbody className="text-black font-sans rounded-2xl ">
            {data.project.map((p) => (
              <DashboardActiveProjects
                key={p.id}
                title={p.name}
                company={p.client?.companyName || p.client?.name}
                progress={mapStatusProgress(p.status)}
                status={formatStatus(p.status)}
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
