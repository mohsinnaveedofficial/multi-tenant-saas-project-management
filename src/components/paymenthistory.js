import React from "react";
import { RiDownloadLine } from "react-icons/ri";

function PaymentHistory() {
  const payments = [
    { date: "2024-02-01", amount: "$29", plan: "Standard", status: "Paid", invoice: "INV-2024-002" },
    { date: "2024-01-01", amount: "$29", plan: "Standard", status: "Paid", invoice: "INV-2024-001" },
    { date: "2023-12-01", amount: "$29", plan: "Standard", status: "Paid", invoice: "INV-2023-012" },
    { date: "2023-11-01", amount: "$29", plan: "Standard", status: "Paid", invoice: "INV-2023-011" },
    { date: "2023-10-01", amount: "$29", plan: "Standard", status: "Paid", invoice: "INV-2023-010" },
  ];

  return (
    <div className="bg-white  rounded-2xl border border-gray-200 mt-6 dark:bg-gray-800 dark:border-gray-700 ">
      
      <h1 className="text-black dark:text-gray-200 m-6 text-lg font-semibold ">Payment History</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-600">
          
          
          <thead >
            <tr className="bg-gray-50 dark:bg-gray-900 text-gray-400 ">
              <th className="text-left py-3 px-5 font-medium">DATE</th>
              <th className="text-left p-3 font-medium">AMOUNT</th>
              <th className="text-left p-3 font-medium">PLAN</th>
              <th className="text-left p-3 font-medium">STATUS</th>
              <th className="text-left p-3 font-medium">INVOICE</th>
              <th className="text-left p-3 font-medium">ACTIONS</th>
            </tr>
          </thead>

          
          <tbody >
            {payments.map((p, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                
                <td className="py-3 px-5 text-black dark:text-gray-200 ">{p.date}</td>

                <td className="p-3 font-bold text-black dark:text-gray-200">{p.amount}</td>

                <td className="p-3 dark:text-gray-400">{p.plan}</td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-xl text-xs">
                    {p.status}
                  </span>
                </td>

                <td className="p-3 dark:text-gray-400">{p.invoice}</td>

                <td className="p-3">
                  <button className="flex items-center text-blue-600 font-medium hover:underline">
                    <RiDownloadLine className="text-[18px] mr-1" />
                    Download
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default PaymentHistory;
