import { DashboardCard, DashboardActiveProjects } from "@/components/card";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { LuFolder } from "react-icons/lu";
import { RiTaskLine } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import ProjectCompletionChart from "@/components/admin/ProjectCompletionChart";
import RevenueChart from "@/components/admin/RevenueChart";
function Dashboard() {
  return (
    <div className="text-black">
      <div className="grid grid-cols-2 gap-8 m-5 md:grid-cols-3 ">
        <DashboardCard
          name={"Total Client"}
          value={24}
          amount_change={"+12%"}
          Color={"blue"}
          Icon={FaRegUser}
        />
        <DashboardCard
          name={"Active Projects"}
          value={24}
          amount_change={"+12%"}
          Color={"green"}
          Icon={LuFolder}
        />
        <DashboardCard
          name={"Active Tasks"}
          value={24}
          amount_change={"+12%"}
          Color={"orange"}
          Icon={RiTaskLine}
        />
        <DashboardCard
          name={"Complete Tasks"}
          value={24}
          amount_change={"+12%"}
          Color={"purple"}
          Icon={MdOutlineTaskAlt}
        />
        <DashboardCard
          name={"Total Revenue"}
          value={"$48,250"}
          amount_change={"+12%"}
          Color={"red"}
          Icon={RiMoneyDollarCircleLine}
        />
        <DashboardCard
          name={"Net Profit"}
          value={"$12,680"}
          amount_change={"+12%"}
          Color={"yellow"}
          Icon={GoGraph}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
    
     <RevenueChart/>
     <ProjectCompletionChart/>
   


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
            <DashboardActiveProjects
              title={"E-commerce platform"}
              company={"Tech crop Inc."}
              progress={20}
              status={"In Progress"}
              date={"2024-02-10"}
            />
            <DashboardActiveProjects
              title={"E-commerce platform"}
              company={"Tech crop Inc."}
              progress={20}
              status={"In Progress"}
              date={"2024-02-10"}
            />
            <DashboardActiveProjects
              title={"E-commerce platform"}
              company={"Tech crop Inc."}
              progress={20}
              status={"In Progress"}
              date={"2024-02-10"}
            />
            <DashboardActiveProjects
              title={"E-commerce platform"}
              company={"Tech crop Inc."}
              progress={100}
              status={"In Progress"}
              date={"2024-02-10"}
            />
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default Dashboard;
