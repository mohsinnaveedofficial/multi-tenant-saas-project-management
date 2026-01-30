"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import RoleDropdown from "../roleDropDown";
import { FaPlus } from "react-icons/fa6";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function AddTeamMemberComponent({ refreshData }) {
  const [open, setOpen] = useState(false);

  let initalData={
    FullName: "",
    EmailAddress: "",
    Role: "",
    Password: "",
  }
  const [formData, setFormData] = useState(initalData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.FullName,
      email: formData.EmailAddress,
      password: formData.Password,
      role: formData.Role,
    };

    try {
      const res = await api.post("/user/adduser", payload);

      if (res.status === 200 || res.status === 201) {
        toast.success("Employee added successfully");

        setFormData(initalData);

        refreshData();
        setOpen(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add user");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-blue-600 text-white px-3 py-2.5 text-nowrap flex flex-row items-center rounded-lg gap-1 cursor-pointer">
          <FaPlus />
          Add Employee
        </DialogTrigger>

        <DialogContent className="w-9/12 sm:w-1/2 md:w-1/2 lg:w-1/3">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="mt-4 text-start">
              <label className="font-medium text-gray-800 dark:text-gray-200">
                Full Name
              </label>
              <input
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                type="text"
                placeholder="Enter full name"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
              />
            </div>

            <div className="mt-4 text-start">
              <label className="font-medium text-gray-800 dark:text-gray-200">
                Email Address
              </label>
              <input
                name="EmailAddress"
                value={formData.EmailAddress}
                onChange={handleChange}
                type="email"
                placeholder="Enter email address"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
              />
            </div>

            <RoleDropdown
              value={formData.Role}
              onchange={(val) =>
                setFormData((prev) => ({ ...prev, Role: val }))
              }
            />

            <div className="mt-4 text-start">
              <label className="font-medium text-gray-800 dark:text-gray-200">
                Password
              </label>
              <input
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                type="password"
                placeholder="Enter temporary password"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
              />
            </div>
            <DialogFooter>
              <div className="flex justify-between flex-col sm:flex-row pt-6 gap-3">
                <DialogClose asChild>
                  <button
                    type="button"
                    className="border  border-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-gray-100 transition-all duration-300 ease-in-out px-10 rounded-lg text-black py-2 bg-white"
                  >
                    Cancel
                  </button>
                </DialogClose>

                <button
                  type="submit"
                  className="bg-blue-600 text-nowrap text-white w-auto rounded-lg p-2"
                >
                  Add Employee
                </button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddTeamMemberComponent;
