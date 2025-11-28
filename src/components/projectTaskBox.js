import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditComponent from './editTask';

function ProjectTaskBox({task,description,project,assignedTo,status,priority,deadline}) {
  const statusmap={
    InProgress:{text:"text-blue-500",bg:"bg-blue-100"},
    ToDo:{text:"text-gray-600",bg:"bg-gray-200"},
    Completed:{text:"text-green-600",bg:"bg-green-100"},
    Review:{text:"text-red-500",bg:"bg-red-100"}
  }

  const selectedStatusColor=statusmap[status] || statusmap.InProgress

  const prioritymap={
    High:{text:"text-red-500",bg:"bg-red-100"},
    Medium:{text:"text-yellow-600",bg:"bg-yellow-100"},
    Low:{text:"text-green-600",bg:"bg-green-200"},
   
  }

  const selectedPriorityColor=prioritymap[priority] || prioritymap.Medium

  return (
     
          <tr className="bg-white transition font-sans">
            
    
            <td className="flex flex-col py-4 px-6 w-80 text-gray-700 ">
              <span className='font-bold'>{task} </span>
             
            {description}</td>
            <td className="py-4 px-6 text-gray-700">{project}</td>

            <td>
            <div className="py-4 px-6 flex items-center h-full gap-3  text-gray-900 ">
              <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white ">
                <span className="overflow-hidden whitespace-nowrap">{assignedTo.split(" ").map(word => word.charAt(0)).join("")}
                </span>
              </div>
              {assignedTo}
            </div>
            </td>

            <td className="py-4 px-6 ">
              <span className={`py-1 px-1.5 text-xs  font-medium rounded-xl whitespace-nowrap ${selectedStatusColor.text} ${selectedStatusColor.bg}`}>{status}</span>
              </td>

            <td className="py-4 px-6">
              <span className={`py-1 px-1.5 text-xs  font-medium rounded-xl ${selectedPriorityColor.text} ${selectedPriorityColor.bg}`}>
                {priority}
              </span>
            </td>

            <td className="py-4 px-6">
              <span className="bg-[#dcfce7] text-[#326e43] px-3 py-1 whitespace-nowrap rounded-full text-xs font-normal">
              {deadline}
              </span>
            </td>

            <td className="py-4 px-6 text-center">
              <div className="flex justify-center gap-3">
               <EditComponent Priority={priority} deadline={deadline} description={description} project={project} teamMember={assignedTo} title={task}/>
                <button><RiDeleteBin5Line className="text-red-500 " /></button>
              </div>
            </td>
          </tr>
       
  )
}

export default ProjectTaskBox