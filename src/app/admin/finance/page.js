'use client';
import CreateFinancials from "@/components/admin/CreateFinancials";
import FinanceChart from "@/components/admin/financeChart";
import FinanceCard from "@/components/financeCard";
import FinanceTableRow from "@/components/financeTableRow";
import React, { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import api from "@/lib/api";
import Loader from "@/components/loader";
import { toast } from "sonner";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";


function  Finance() {
  const [dashboard, setDashboard] = useState(null);
  const [financeList, setFinanceList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const [dashboardRes, financeRes] = await Promise.all([
        api.get("/admin/finance"),
        api.get("/finance"),
      ]);
      setDashboard(dashboardRes.data);
      setFinanceList(Array.isArray(financeRes.data) ? financeRes.data : [financeRes.data]);
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Failed to fetch finance data");
      throw new Error("Failed to fetch finance data")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <Loader/>;

  return (
    <ProtectedAdmin>
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-10 m-4 md:grid-cols-2 lg:grid-cols-3">
        <FinanceCard
          Icon={RiMoneyDollarCircleLine}
          color="green"
          stats={`${dashboard?.totalRevenue?.growth ?? 0}%`}
          title="Total Revenue"
          num={(dashboard?.totalRevenue?.value ?? 0).toFixed(0)}
        />
        <FinanceCard
          Icon={RiMoneyDollarCircleLine}
          color="red"
          stats={`${dashboard?.totalCost?.growth ?? 0}%`}
          title="Total Cost"
          num={(dashboard?.totalCost?.value ?? 0).toFixed(0)}
        />
        <FinanceCard
          Icon={RiMoneyDollarCircleLine}
          color="blue"
          stats={`${dashboard?.netProfit?.growth ?? 0}%`}
          title="Net Profit"
          num={(dashboard?.netProfit?.value ?? 0).toFixed(0)}
        />
      </div>

      <FinanceChart chartData={dashboard?.monthlyPerformance ?? []} />

      <div className="border border-gray-200  overflow-hidden dark:border-gray-600  m-4 mb-8 rounded-2xl ">
        <div className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center  rounded-t-2xl">
          <h3 className="font-sans font-semibold text-lg">Projects Financials</h3>
        
          <CreateFinancials onAdd={loadData} />
        </div>

    <div className="overflow-x-auto">

        <table className="text-gray-400 dark:text-gray-200  border-separate table-auto border-spacing-x-0 border-spacing-y-[3px] w-full pt-1 rounded-lg">
          <thead className="font-normal font-sans bg-gray-200 dark:bg-gray-900">
            <tr>
              <th className="px-2 py-2 text-center">PROJECT</th>
              <th className="px-2 py-2 text-center">REVENUE</th>
              <th className="px-2 py-2 text-center">COST</th>
              <th className="px-2 py-2 text-center">PROFIT</th>
              <th className="px-2 py-2 text-center">MARGIN</th>
              <th className="px-2 py-2 text-center">STATUS</th>
              <th className="px-2 py-2 text-center">ACTION</th>
            </tr>
          </thead>

          <tbody className="text-black font-sans rounded-2xl">
            {financeList.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-400">
                  No finance records found
                </td>
              </tr>
            ) : (
              financeList.map((item) => {
                const revenueVal = Number(item.revenue);
                const costVal = Number(item.cost);
                const profitVal = Number(item.profit);
                const margin = revenueVal > 0 ? ((profitVal / revenueVal) * 100).toFixed(1) : "0";

                return (
                  <FinanceTableRow
                    key={item.id}
                    id={item.id}
                    project={item.project?.name}
                    revenue={`$${revenueVal}`}
                    cost={`$${costVal}`}
                    profit={`$${profitVal}`}
                    margin={`${margin}%`}
                    status={item.status}
                    revenueRaw={revenueVal}
                    costRaw={costVal}
                    onUpdate={loadData}
                    />
                  );
              })
            )}
          </tbody>
        </table>
                  </div>
      </div>
    </div>
    </ProtectedAdmin>
  );
}

export default Finance;
