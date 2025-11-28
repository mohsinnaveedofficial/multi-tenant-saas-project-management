"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaPlus } from "react-icons/fa6";


function AddClientComponent() {

let[formData,setformData]=useState({
    Fullname:"",
    Company:"",
    Email:"",
    phone:""
})


let handleChange=(e)=>{
    setformData(prev=>{
        return{...prev,[e.target.name]:e.target.value}
    })
}

let handleSubmit=(e)=>{
e.preventDefault();
console.log(formData);

}

  return (
    <div >
      <Dialog>
        <DialogTrigger className="bg-blue-600 px-4 text-white  py-2.5 flex items-center rounded-lg  gap-4">
          <FaPlus />
          Add Client
          </DialogTrigger>
        
            <DialogContent className="w-95">
          <DialogHeader>
            <DialogTitle>Add New Client</DialogTitle>
            <DialogDescription></DialogDescription>
            </DialogHeader>
                <form onSubmit={handleSubmit}>
                <div>
                <div className="pt-2  text-start">
                  <label htmlFor="name" className="font-semibold text-gray-800">
                    Full Name
                  </label>
                  <br />
                  <input
                    id="name"
                    type="text"
                    name="Fullname"
                    value={formData.Fullname}
                    onChange={handleChange}
                    placeholder="Enter client name"
                    required
                    className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                  />
                </div>

                <div className="pt-2  text-start">
                  <label
                    htmlFor="company"
                    className="font-semibold text-gray-800"
                  >
                    Company
                  </label>
                  <br />
                  <input
                    id="company"
                    type="text"
                     name="Company"
                    value={formData.Company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                    className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                  />
                </div>

                <div className="pt-2  text-start">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <br />
                  <input
                    id="email"
                    type="text"
                     name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                    className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                  />
                </div>

                <div className="pt-2  text-start">
                  <label
                    htmlFor="phone"
                    className="font-semibold text-gray-800"
                  >
                    Phone
                  </label>
                  <br />
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter phone number"
                     name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                  />
                </div>
               
                <div className="flex items-center  justify-between pt-8 gap-3">
                  <DialogClose asChild>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 text-lg w-1/2 rounded-lg px-3 py-2">
                    Cancel
                  </button>
                  </DialogClose>
                  <button type="submit" className="bg-blue-600 text-white w-1/2 text-md rounded-lg px-3 py-2.5 ">
                   Add Client
                  </button>
                </div>
              </div>
              </form>
            </DialogContent>

         
      
      </Dialog>
    </div>
  );
}

export default AddClientComponent;
