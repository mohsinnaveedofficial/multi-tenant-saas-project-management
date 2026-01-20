"use client"
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProjectClientBox from "@/components/projectClientBox";
import AddClientComponent from "@/components/admin/addClientComponent";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";



 function ClientTable() {

const [data,setdata]=useState([])

  useEffect(()=>{
   const getdata=async()=>{
     const res=await api.get("/client");
    setdata(res.data)
   }
   getdata()
  
  },[data])


  return (
    <ProtectedAdmin>

    <div className="w-full" >
      <div className="flex justify-between m-8">

      
        <div className=" text-start border border-gray-300  w-[40%] bg-white rounded-lg flex flex-nowrap py-2 items-center  gap-4">
          <IoSearchOutline className=" ms-3" />
          <input
            id="password"
            type="text"
            placeholder="Search clients..."
           
            className="focus:outline-none focus:border-0 w-full"
          />
        </div>

      
          <AddClientComponent/>
      </div>
 
       
 <div className="m-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-[800px] w-full text-left text-sm border-collapse">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
              <tr>
                <th className="py-3 px-6">NAME</th>
                <th className="py-3 px-6">COMPANY</th>
                <th className="py-3 px-6">EMAIL</th>
                <th className="py-3 px-6">PHONE</th>
                <th className="py-3 px-6">PROJECTS</th>
                <th className="py-3 px-6">STATUS</th>
                <th className="py-3 px-6 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data?.map((item, index) => (
                <ProjectClientBox
                  key={item.id || index}
                  id={item.id}
                  name={item.name}
                  company={item.companyName}
                  email={item.email}
                  phone={item.phone}
                  projects={item.projectCount}
                  status={item.status}
                />
              ))}
            </tbody>
          </table>
        </div>
 

    </div>
                </ProtectedAdmin>
  );
}

export default ClientTable;

