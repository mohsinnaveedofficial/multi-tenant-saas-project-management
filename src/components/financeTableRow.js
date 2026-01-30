"use client";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import EditFinancials from "./admin/EditFinancials";
import api from "@/lib/api";
import { toast } from "sonner";
import ProjectStatus from "./projectStatus";

function FinanceTableRow({ project, revenue, cost, profit, margin, status, id, onUpdate, revenueRaw, costRaw }) {
  
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this record?")) return;

    try {
      await api.delete(`/finance/${id}`); 
      toast.success("Record deleted successfully");
      onUpdate?.(); 
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete record");
    }
  };

  return (
    <tr className="text-center dark:bg-gray-800 bg-white h-12">
      <td className="text-gray-900 dark:text-gray-200 text-nowrap px-3">{project}</td>
      <td className="font-medium text-green-600 text-sm px-3">{revenue}</td>
      <td className="font-medium text-red-600 px-3">{cost}</td>
      <td className="font-medium text-blue-600 px-3">{profit}</td>
      <td className="text-center font-medium text-gray-900 dark:text-gray-200 px-3">{margin}</td>
      <td>
        <ProjectStatus Status={status} />
      </td>
      <td className="text-center flex justify-center items-center pt-3">
        <EditFinancials
          id={id}
          cost={costRaw}
          revenue={revenueRaw}
          status={status}
          onUpdate={onUpdate}
        />
        <RiDeleteBinLine
          className="inline ms-2 mt-1 text-red-600 cursor-pointer"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
}

export default FinanceTableRow;
