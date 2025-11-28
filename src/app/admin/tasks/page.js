import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProjectTaskBox from "@/components/projectTaskBox";
import AddTaskComponent from "@/components/addTaskComponent";

function AddTask() {const data = [
  {
    task: "Design homepage mockup",
    description: "Create detailed mockup for the homepage including hero section and product showcase",
    project: "design",
    assignedTo: "John Doe",
    status: "In Progress",
    priority: "High",
    deadline: "2024-02-10",
  },
  {
    task: "Implement user authentication",
    description: "Set up secure user login and registration system",
    project: "Mobile App Design",
    assignedTo: "Sarah Miller",
    status: "To Do",
    priority: "Medium",
    deadline: "2024-02-15",
  },
  {
    task: "Database optimization",
    description: "Optimize database queries for better performance",
    project: "Website Redesign",
    assignedTo: "Mike Wilson",
    status: "Completed",
    priority: "Low",
    deadline: "2024-02-08",
  },
  {
    task: "Content strategy planning",
    description: "Develop comprehensive content strategy for brand launch",
    project: "Brand Identity",
    assignedTo: "Emily Davis",
    status: "Review",
    priority: "High",
    deadline: "2024-02-12",
  },
  {
    task: "API integration testing",
    description: "Test all third-party API integrations for reliability",
    project: "E-commerce Platform",
    assignedTo: "David Brown",
    status: "In Progress",
    priority: "Medium",
    deadline: "2024-02-18",
  },
];

  
  return (
    <div>
      <div className="flex justify-between m-8">
        {/* search bar */}
        <div className=" text-start border border-gray-300  w-[40%] bg-white rounded-xl flex py-2 items-center flex-nowrap gap-4">
          <IoSearchOutline className=" ms-3" />
          <input
            id="password"
            type="text"
            placeholder="Search clients..."
            required
            className="focus:outline-none focus:border-0"
          />
        </div>

        {/* add button */}
        
          <AddTaskComponent/>
        
      </div>

      {/* table */}

      <div className="  rounded-lg overflow-hidden mx-8 shadow-sm">
        <table className=" w-full rounded-lg border overflow-hidden border-gray-200 border-separate bg-gray-100 m-0 mt-0 border-spacing-y-[3px]  border-spacing-x-0 " >
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
            <tr>
              <th className="font-semibold text-start py-3 px-6">TASK</th>
              <th className="font-semibold text-start py-3 px-6">PROJECT</th>
              <th className="font-semibold text-start py-3 px-6">ASSIGNED TO</th>
              <th className="font-semibold text-start py-3 px-6">STATUS</th>
              <th className="font-semibold text-start py-3 px-6">PRIORITY</th>
              <th className="font-semibold text-start py-3 px-6">DEADLINE</th>
              <th className="font-semibold text-start py-3 px-6 ">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white ">
            {data.map((item, index) => (
              <ProjectTaskBox
                key={index}
                id={index}
                task={item.task}
                description={item.description}
                project={item.project}
                assignedTo={item.assignedTo}
                status={item.status}
                priority={item.priority}
                deadline={item.deadline}
              />
            ))}
           </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddTask;
