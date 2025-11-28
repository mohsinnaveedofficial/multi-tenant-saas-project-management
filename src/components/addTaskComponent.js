"use client"
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import { SelectDemo } from "./priorityDropDownMenu";
import { SelectTask } from "./taskDropDownMenu";
import AssignedtoDropdown from "./assignedtoDropdown";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

function AddTaskComponent() {
  const [formData, setFormData] = useState({
     title:"",
     project: "",
     teamMember: "",
     priority: "",
     deadline: "",
     description:"",
   });
  
 
   // Generic input change handler
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };
 
   // Submit handler
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formData);
   };
 
   return (
     <div>
       <Dialog>
         <DialogTrigger className="bg-blue-600 px-4 text-white py-2.5 flex items-center rounded-lg gap-4">
           <FaPlus />
           Add Task
       </DialogTrigger>
 
         <DialogContent className="w-1/2 md:w-1/3 lg:w-1/3">
           <DialogHeader>
             <DialogTitle>Add Task</DialogTitle>
             <DialogDescription></DialogDescription>
           </DialogHeader>
 
           <form onSubmit={handleSubmit}>
             <div className="space-y-2">
               {/* Task Title */}
               <div className="pt-2 text-start">
                 <label htmlFor="title" className="font-semibold text-gray-800">
                   Task Title
                 </label>
                 <input
                   id="title"
                   name="title"
                   type="text"
                   placeholder="Enter task title"
                   required
                   value={formData.title}
                   onChange={handleChange}
                   className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                 />
               </div>
 
               {/* Project Dropdown */}
               <SelectTask
                 value={formData.project}
                 onChange={(val) => setFormData((prev) => ({ ...prev, project: val }))}
               />
 
               {/* Assigned To Dropdown */}
               <AssignedtoDropdown
                 value={formData.teamMember}
                 onChange={(val) => setFormData((prev) => ({ ...prev, teamMember: val }))}
               />
 
               {/* Priority & Deadline */}
               <div className="flex gap-4 pt-2 items-center justify-center">
                 <div className="w-1/2 text-start">
                   <label htmlFor="priority" className="font-semibold text-gray-800">
                     Priority
                   </label>
                   <Select
                     value={formData.priority}
                     onValueChange={(val) => setFormData((prev) => ({ ...prev, priority: val }))}
                   >
                     <SelectTrigger
                       
                       className="border border-gray-300 w-full mt-1 rounded-lg py-5 px-3"
                     >
                       <SelectValue placeholder="Select Priority" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="Low">Low</SelectItem>
                       <SelectItem value="Medium">Medium</SelectItem>
                       <SelectItem value="High">High</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
 
                 <div className="text-start w-1/2">
                   <label htmlFor="deadline" className="font-semibold text-gray-800">
                     Deadline
                   </label>
                   <input
                     id="deadline"
                     name="deadline"
                     type="date"
                     required
                     value={formData.deadline}
                     onChange={handleChange}
                     className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                   />
                 </div>
               </div>
 
               {/* Description */}
               <div className="pt-2 text-start">
                 <label htmlFor="description" className="font-semibold text-gray-800">
                   Description
                 </label>
                 <textarea
                   id="description"
                   name="description"
                   placeholder="Enter task description"
                   required
                   rows={3}
                   value={formData.description}
                   onChange={handleChange}
                   className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                 />
               </div>
 
               {/* Buttons */}
               <div className="flex items-center justify-between pt-5 gap-3">
                 <DialogClose asChild>
                   <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 text-lg w-1/2 rounded-lg p-1.5">
                     Cancel
                   </button>
                 </DialogClose>
                 <button
                   type="submit"
                   className="bg-blue-600 text-white w-1/2 text-md rounded-lg p-2"
                 >
                   Update Task
                 </button>
               </div>
             </div>
           </form>
         </DialogContent>
       </Dialog>
     </div>
   );
}

export default AddTaskComponent;