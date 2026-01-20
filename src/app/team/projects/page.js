"use client";
import Project from "@/components/project";
import Projectdetails from "@/components/projectdetails";
import React, { useEffect, useState } from "react";
import Profiletask from "@/components/profiletask";
import Profileperformance from "@/components/profileperformance";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import api from "@/lib/api";
import ProtectedTeam from "@/components/team/ProtectedTeam";

function Projects() {


const [data,setData]=useState([]);
const getData=async () => {
  const res=await api.get("/project/project-assigned-users")

  setData(await(res).data);
}

useEffect(()=>{
  getData()
},[])

  


  
  return (
    
    <ProtectedTeam>

    <div className="relative min-h-screen">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 rounded-2xl gap-6">
        {data?.map((item, idx) => (
          <Project
            key={idx}
            project={item}          
           
          />
        ))}
      </div>

      
    </div>
    </ProtectedTeam>
  );
}

export default Projects;
