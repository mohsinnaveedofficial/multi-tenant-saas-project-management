"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { AiOutlineEdit } from "react-icons/ai";
import RoleDropdown from "../roleDropDown";

function EditTeamMember({FullName,EmailAddress,Role}) {
const [formData,setFormData]=useState({
  FullName:FullName ||"",
  EmailAddress:EmailAddress ||"",
  Role: Role||"",
  Password:"",
})

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
        <DialogTrigger asChild>
             <button>
              <AiOutlineEdit className="text-blue-600 cursor-pointer inline" />
            </button>
        </DialogTrigger>

        <DialogContent className="w-1/2 md:w-1/3">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            <form onSubmit={handleSubmit}>
            <div className="mt-4  text-start">
              <label htmlFor="name" className="font-medium text-gray-800">
                Full Name
              </label>
              <br />
              <input
                id="FullName"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                type="text"
                placeholder="Enter full name"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
              />
            </div>

            <div className="mt-4  text-start">
              <label htmlFor="company" className="font-medium text-gray-800">
                Email Address
              </label>
              <br />
              <input
                id="EmailAddress"
                name="EmailAddress"
                onChange={handleChange}
                value={formData.EmailAddress}
                type="text"
                placeholder="Enter email address"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
              />
            </div>

            <RoleDropdown value={formData.Role}  onchange={(val) => setFormData((prev) => ({ ...prev, Role: val }))} />

            <div className="mt-4  text-start">
              <label htmlFor="password" className="font-medium text-gray-800">
                Password
              </label>

              <input
                id="Password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                type="password"
                placeholder="Enter temporary password"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
              />
            </div>

            <div className="flex flex-nowrap items-center  justify-between pt-5 gap-3">
              <DialogClose asChild>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-800  w-1/2 rounded-lg p-1.5">
                  Cancel
                </button>
              </DialogClose>
              <button type="submit" className="bg-blue-600 text-white w-1/2  rounded-lg p-2 ">
                Save Changes 
             </button>
            </div>
          </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditTeamMember;
