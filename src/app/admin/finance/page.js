import CreateFinancials from "@/components/admin/CreateFinancials";
import FinanceChart from "@/components/admin/financeChart";
import { DashboardActiveProjects } from "@/components/card";
import FinanceCard from "@/components/financeCard";
import FinanceTableRow from "@/components/financeTableRow";
import { Button } from "@/components/ui/button";
import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Finance() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 m-4 md:grid-cols-2 lg:grid-cols-3 ">
        <FinanceCard
          Icon={RiMoneyDollarCircleLine}
          color={"green"}
          stats={"-16"}
          title={"Total Revenue"}
          num={18000}
        />
        <FinanceCard
          Icon={RiMoneyDollarCircleLine}
          color={"red"}
          stats={"-16"}
          title={"Total Cost"}
          num={18000}
        />
        <FinanceCard
          Icon={RiMoneyDollarCircleLine}
          color={"blue"}
          stats={"-16"}
          title={"Net Profit"}
          num={18000}
        />
      </div>

      <FinanceChart />
      
 <div className=" border border-gray-200 m-4  mb-8 rounded-2xl  overflow-y-hidden overflow-x-scroll lg:overflow-x-auto ">
        <div className="bg-white p-4 flex justify-between items-center  rounded-t-2xl">
          <h3 className="font-sans font-semibold text-lg">Projects Financials</h3>
        <CreateFinancials/>
        </div>
        <table className="text-gray-400 border-separate border-spacing-x-0 border-spacing-y-[3px]  w-full overflow-x-scroll  pt-1   rounded-lg">
          <thead className="font-normal font-sans">
            <tr>
              <th className="font-normal px-2 py-2 md:px-4 md:py-2 text-center">PROJECTS</th>
              <th className="  font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">REVENUE</th>
              <th className=" font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">COST</th>
              <th className=" font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">PORFIT</th>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">MARGIN</th>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">STATUS</th>
              <th className="font-normal px-1.5 py-2 md:px-4 md:py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-black font-sans rounded-2xl ">
         <FinanceTableRow cost={"$300"} profit={"$100"} margin={"25.0%"} revenue={"$400"} project={"E-commerce platform"} status={"Completed"} />
         <FinanceTableRow cost={"$300"} profit={"$100"} margin={"25.0%"} revenue={"$400"} project={"E-commerce platform"} status={"In Progress"} />
         <FinanceTableRow cost={"$300"} profit={"$100"} margin={"25.0%"} revenue={"$400"} project={"E-commerce platform"} status={"On Hold"} />
         <FinanceTableRow cost={"$300"} profit={"$100"} margin={"25.0%"} revenue={"$400"} project={"E-commerce platform"} status={"Completed"} />
          </tbody>
        </table>
      </div>




    </div>
  );
}

export default Finance;
