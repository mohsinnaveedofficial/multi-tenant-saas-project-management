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
} from "@/components/ui/dialog";
import { AiOutlineEdit } from "react-icons/ai";
import RoleDropdown from "../roleDropDown";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function EditTeamMember({ FullName, EmailAddress, Role, id, refreshData }) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    FullName: FullName || "",
    EmailAddress: EmailAddress || "",
    Role: Role || "",
    Password: "",
  });

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
      const res = await api.patch(`/user/${id}`, payload);

      if (res.status === 200) {
        toast.success("Employee updated successfully");
        setOpen(false);
        refreshData();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update user");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            <AiOutlineEdit className="text-blue-600 cursor-pointer inline" />
          </button>
        </DialogTrigger>

        <DialogContent className="w-1/2 md:w-1/3">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="mt-4 text-start">
              <label className="font-medium text-gray-800">Full Name</label>
              <input
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                type="text"
                required
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
              />
            </div>

            <div className="mt-4 text-start">
              <label className="font-medium text-gray-800">Email Address</label>
              <input
                name="EmailAddress"
                value={formData.EmailAddress}
                onChange={handleChange}
                type="email"
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
              <label className="font-medium text-gray-800">Password</label>
              <input
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                type="password"
                placeholder="Enter new password"
                className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
              />
            </div>

            <div className="flex justify-between pt-5 gap-3">
              <DialogClose asChild>
                <button
                  type="button"
                  className="border border-gray-300 hover:bg-gray-50 text-gray-800 w-1/2 rounded-lg p-2"
                >
                  Cancel
                </button>
              </DialogClose>

              <button
                type="submit"
                className="bg-blue-600 text-white w-1/2 rounded-lg p-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditTeamMember;
