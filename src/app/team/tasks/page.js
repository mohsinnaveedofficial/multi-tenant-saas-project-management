"use client"
import React, { useState } from 'react'
import { RiLayoutGrid2Line, RiListCheck } from "react-icons/ri";
import { Input } from '@/components/ui/input'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Taskmaincards from '@/components/taskmaincards';
import { FaList } from "react-icons/fa";
import ProjectTaskBox from '@/components/taskmainlists';

function Page() {
  const [tableview, settable] = useState(false);

         const table = [
             {
                 task: "Design homepage mockup",
                 description: "Create detailed mockup for the homepage including hero section and product showcase",
                 project: "E-commerce Platform",
                 status: "High",
                 priority: "csaca",
                 deadline: "casa"
             },
             {
                 task: "haseeb",
                 description: "",
                 project: "",
                 status: "",
                 priority: "",
                 deadline: ""
             },
             {
                 task: "",
                 description: "",
                 project: "",
                 status: "",
                 priority: "",
                 deadline: ""
             },
             {
                 task: "",
                 description: "",
                 project: "",
                 status: "",
                 priority: "",
                 deadline: ""
             }
         ];
    const Page = [
        {
            title: "Design homepage mockup",
            status: "High",
            description: "Create details mockup for thr homepage including hero section and product showcase",
            projectname: "E-commerce Platform",
            date: "2024-02-10",
            progress: "60%",
            statuscompletion: "In Progress",
            taskstatusbg: "#D6E7F9",
            taskstatuscolor: "#4596F1"
        },
        {
            title: "Create user flow diagrams",
            status: "Medium",
            description: "Design user journey flows for the mobile application",
            projectname: "Mobile App Design",
            date: "2024-02-15",
            progress: "0%",
            statuscompletion: "To Do",
            taskstatusbg: "#DFE2EB",
            taskstatuscolor: "gray"
        },
        {
            title: "Design component library",
            status: "Low",
            description: "Build reusable UI components for the design system ",
            projectname: "Website redesign",
            date: "2024-03-08",
            progress: "1%",
            statuscompletion: "Done",
            taskstatusbg: "#BBF4BC",
            taskstatuscolor: "green"
        },
        {
            title: "Brand logo variations",
            status: "High",
            description: "Create different logo variations for various use cases",
            projectname: "Brand Identity",
            date: "2024-02-12",
            progress: "80%",
            statuscompletion: "In Progress",
            taskstatusbg: "#D6E7F9",
            taskstatuscolor: "#4596F1"
        }
    ];
    return (
        <div >
            <h1 className='font-bold font-sans text-sm text-gray-500 p-4'>Tasks assigned to you.</h1>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start w-full '>
                <div className='w-1/2 text-sm text-gray-500 p-4'>
                    <Input className={""} type="text" placeholder="Search" />
                </div>
                <div className=' p-4 '>
                    <Select className='text-sm text-black'>
                        <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="All Projects" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='p-4 '>
                    <Select className='text-sm text-black'>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
               </div>
               <div className='flex m-4 justify-center items-center'>
                    <div className="rounded-lg bg-gray-100 flex h-11 gap-2   items-center w-48">
                            <button
                              className={`  ms-2  py-1.5 rounded-lg px-3 text-center transition-all duration-300 cursor-pointer flex justify-center items-center ease-in-out ${
                                !tableview ? "bg-white text-black" : "text-gray-500"
                              } `}
                              onClick={() => settable(false)}
                            >
                              <RiLayoutGrid2Line className="inline me-1" />
                              Cards
                            </button>
                            <button
                              className={` rounded-lg px-3 py-1.5 text-center transition-all duration-300 cursor-pointer flex justify-center items-center ease-in-out ${
                                tableview ? "bg-white text-black" : "text-gray-500"
                              } `}
                              onClick={() => settable(true)}
                            >
                              <FaList className="inline me-1" />
                              Tables
                            </button>
                          </div>
               </div>

            </div>
            {!tableview  && 
            <div className='grid grid-cols-3 m-4 rounded-2xl gap-6 '>
                {Page.map((item, idx) => (
                    <Taskmaincards key={idx} title={item.title}
                        status={item.status}
                        description={item.description}
                        projectname={item.projectname}
                        date={item.date}
                        progress={item.progress}
                        statuscompletion={item.statuscompletion}
                        taskstatusbg={item.taskstatusbg}
                        taskstatuscolor={item.taskstatuscolor} />
                ))}
            </div>}
            {/* <div className='pt-[80px]'>
        <Taskmainlists/>
            </div> */}
        {tableview  && 
               
            <div className="  rounded-lg overflow-hidden m-6 shadow-sm">
                <table className=" w-full rounded-lg border overflow-hidden border-gray-200 border-separate bg-gray-100 m-0 mt-0 border-spacing-y-[3px]  border-spacing-x-0 " >
                    <thead className="bg-gray-50 text-gray-500 uppercase text-xs text-left font-semibold">
                        <tr>
                            <th className="font-semibold py-3 px-6">TASK</th>
                            <th className="font-semibold py-3 px-6">PROJECT</th>
                            <th className="font-semibold py-3 px-6">PRIORITY</th>
                            <th className="font-semibold py-3 px-6">Due Date</th>
                            <th className="font-semibold py-3 px-6">STATUS</th>
                            <th className="font-semibold py-3 px-6 text-center">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white ">
                        {table.map((item, index) => (
                            
                            <ProjectTaskBox  deadline={"0-0-0"} description={"Create details mockup for the homepage including hero section and product showcase"} priority={"High"} project={"E-commerce Platform"}  status={"High"} task={"Design homepage mockup"} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
}
    
        </div>
        
    )
}

export default Page