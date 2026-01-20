"use client"
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditClientDialog from "./admin/editclient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/lib/api";

function ProjectClientBox({id,name,company,email,phone,projects,status}) {

  const router=useRouter()
    const statusmap={
      Active:{text:"text-green-500",bg:"bg-green-100"},
      Inactive:{text:"text-gray-600",bg:"bg-gray-100"}
    }

    const selectStatusColor=statusmap[status] || statusmap.Inactive

    let handleDelete=async()=>{
      try{ const res = await api.delete(`/client/${id}`)
      
      if (res.status === 200) {
        toast.success("Deleted Successfully");
      router.refresh();
      }
     
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Unable to Delete"
      );
    }
  }

  return (
   
      <tr className="hover:bg-gray-50 transition">
        <td className="py-4 px-6 flex items-center gap-3 font-semibold text-gray-900">
          <div className="hidden items-center justify-center w-8 h-8 rounded-full sm:flex bg-blue-600 text-white font-semibold">
            <span className="overflow-hidden whitespace-nowrap">{name.split(" ").map(word => word.charAt(0)).join("")}
            </span>
          </div>
          {name}
        </td>

        <td className="py-4 px-6 text-gray-700">{company}</td>
        <td className="py-4 px-6 text-gray-700">{email}</td>
        <td className="py-4 px-6 text-gray-700">{phone}</td>
        <td className="py-4 px-6">
          <span className="bg-blue-100 whitespace-nowrap text-blue-700 px-3 py-1 rounded-full text-xs font-normal">
            {projects} projects
          </span>
        </td>
        <td className="py-4 px-6">
          <span className={`py-1 px-1.5 text-xs  font-medium rounded-xl ${selectStatusColor.text} ${selectStatusColor.bg}`}>
           {status}
          </span>
        </td>
        <td className="py-4 px-6 text-center">
          <div className="flex justify-center gap-3">
            <EditClientDialog Fullname={name} id={id} Company={company} Email={email} phone={phone} status={status} />
           <button onClick={handleDelete} ><RiDeleteBin5Line  className="text-red-500 " /></button>
          </div>
        </td>
      </tr>

  );
}

export default ProjectClientBox;
