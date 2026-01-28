"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Projectdetailsoverview from "./projectdetailsoverview";
import Projectdetailstasks from "./projectdetailstasks";
import Projectdetailsfiles from "./projectdetailsfiles";
import Projectdetailscomments from "./projectdetailscomments";
import api from "@/lib/api";
import { toast } from "sonner";

function Projectdetails({ openDetail, project,roleInProject }) {
const [projectdetail,setProjectDetail]=useState();

  const getDetails = async () => {
  try {
    const res = await api.get("/project/" + project);
    setProjectDetail(res.data);
  } catch (error) {
    toast.error("Failed to fetch project details");
  }
};


  useEffect(()=>{
      if(!project){
    toast.error("Project not Found")
    return;
  }

  getDetails();
  },[])

 

  const [details, setDetail] = useState({
    overview: true,
    task: false,
    file: false,
    comment: false,
  });

  return (
    <div className="rounded-xl border border-gray-300 shadow-lg dark:border-gray-700 py-6 dark:bg-neutral-900 bg-white w-full max-w-lg sm:max-w-md md:max-w-2xl mx-4 overflow-auto md:overflow-hidden">
      <div className="flex justify-between px-6">
        <h1 className="font-bold">{projectdetail?.name}</h1>
        <button
          onClick={() => openDetail(false)}
          className="text-gray-600 dark:text-gray-200 text-sm font-bold"
        >
          <RxCross2 size={20} />
        </button>
      </div>

    

      <div className="text-gray-500 dark:text-gray-400 text-sm px-6">{projectdetail?.client.companyName}</div>

      <hr className="text-gray-200 mt-5" />

      <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-200 px-10 pt-4">
        {["overview", "task", "file", "comment"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setDetail({
                overview: tab === "overview",
                task: tab === "task",
                file: tab === "file",
                comment: tab === "comment",
              })
            }
            className={`pb-4 font-semibold ${
              details[tab] ? "text-blue-500 border-b-2 border-blue-500" : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <hr className="text-gray-200" />

      <div className="min-w-[400px]">
        {details.overview && <Projectdetailsoverview roleInProject={roleInProject} project={projectdetail} />}
        {details.task && <Projectdetailstasks />}
        {details.file && <Projectdetailsfiles />}
        {details.comment && <Projectdetailscomments />}
      </div>
    </div>
  );
}

export default Projectdetails;
