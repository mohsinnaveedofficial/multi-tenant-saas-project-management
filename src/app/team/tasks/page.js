"use client";
import React, { useEffect, useState } from "react";
import { RiLayoutGrid2Line, RiListCheck } from "react-icons/ri";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Taskmaincards from "@/components/taskmaincards";
import { FaList } from "react-icons/fa";
import ProjectTaskBox from "@/components/taskmainlists";
import api from "@/lib/api";
import EmptyTaskCard from "@/components/emptyTask";
import ProtectedTeam from "@/components/team/ProtectedTeam";

function Page() {
  const [tableview, settable] = useState(false);
  const [data, setData] = useState([]);
  const [search,setsearch]=useState("")
  const [priority,setprority]=useState("");
  const [status,setStatus]=useState("")

  const getData = async () => {
    const res = await api.get("/task/user");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

const filterdata=data.filter((task)=>{
 const searchtext= task.name.toLowerCase().includes(search.toLowerCase());
  const filterStatus=status==="all"||status===""||task.status===status;
  const filterPrority=priority==="all"||priority===""||task.priority===priority
  return searchtext && filterStatus && filterPrority
})


  return (
        <ProtectedTeam>

    <div>
      <h1 className="font-bold font-sans text-sm text-gray-500 p-4">
        Tasks assigned to you.
      </h1>
      <div className="flex m-4 flex-col md:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          <div className="w-full sm:w-64">
            <Input
              type="text"
              placeholder="Search"
              className="text-sm text-gray-500"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Select className="" value={status} onValueChange={setStatus}>
              <SelectTrigger className={"  "}>
                <SelectValue placeholder="All Projects" />
              </SelectTrigger>
               <SelectContent>
                <SelectItem value="all">All</SelectItem>
                              <SelectItem value="todo">To Do</SelectItem>
                              <SelectItem value="inProgress">In Progress</SelectItem>
                              <SelectItem value="review">Review</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="delayed">Delayed</SelectItem>
                 </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <Select value={priority} onValueChange={setprority}>
              <SelectTrigger className="">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>

                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end lg:justify-start w-full lg:w-auto">
          <div className="rounded-lg bg-gray-100 flex h-11 gap-2 items-center px-2">
            <button
              className={`py-1.5 px-3 rounded-lg transition-all flex items-center ${
                !tableview ? "bg-white text-black" : "text-gray-500"
              }`}
              onClick={() => settable(false)}
            >
              <RiLayoutGrid2Line className="me-1" />
              Cards
            </button>

            <button
              className={`py-1.5 px-3 rounded-lg transition-all flex items-center ${
                tableview ? "bg-white text-black" : "text-gray-500"
              }`}
              onClick={() => settable(true)}
              >
              <FaList className="me-1" />
              Tables
            </button>
          </div>
        </div>
      </div>
    {filterdata.length === 0 ? (
  <EmptyTaskCard />
) : (
  <>

      {!tableview && (
        <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-4 rounded-2xl gap-6 ">
          {/* <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 rounded-2xl gap-6 "> */}

          {filterdata?.map((item, idx) => (
            <Taskmaincards
              id={item.id}
              key={idx}
              title={item.name}
              status={item.priority}
              description={item.description}
              projectname={item.project.name}
              date={item.dueDate}
              progress={item.progressPercentage}
              statuscompletion={item.status}
              onUpdated={getData}
            />
          ))}
        </div>
      )}
      
      {tableview && (
        <div className="  rounded-lg overflow-hidden m-6 shadow-sm">
          <table className=" w-full rounded-lg border overflow-hidden border-gray-200 border-separate bg-gray-100 m-0 mt-0 border-spacing-y-[3px]  border-spacing-x-0 ">
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
              {filterdata?.map((item, index) => (
                <ProjectTaskBox
                id={item.id}
                  deadline={item.dueDate}
                  description={item.description}
                  priority={item.priority}
                  project={item.project.name}
                  status={item.status}
                  progress={item.progressPercentage}
                  task={item.name}
                  key={index}
                  onUpdated={getData}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>)}
    </div>
    </ProtectedTeam>
  );
}

export default Page;
