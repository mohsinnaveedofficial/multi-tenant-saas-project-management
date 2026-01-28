"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { AiOutlineEdit } from "react-icons/ai";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DialogDescription } from "@radix-ui/react-dialog";

function EditComponent({
  id,
  title,
  projectId,
  priority,
  dueDate,
  description,
  projects,
  refreshData,
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: title || "",
    projectId: projectId || "",
    priority: priority || "",
    dueDate: dueDate || "",
    description: description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.patch(`/task/${id}`, {
        title: formData.title,
        projectId: formData.projectId,
        priority: formData.priority,
        dueDate: formData.dueDate,
        description: formData.description,
      });

      if (res.status === 200) {
        refreshData();
        toast.success("Task updated successfully");
        setOpen(false);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Unable to update",
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <AiOutlineEdit className="text-blue-600 cursor-pointer inline" />
        </button>
      </DialogTrigger>

      <DialogContent className="w-auto lg:w-1/3">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="font-semibold text-gray-800 dark:text-gray-200">
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
              className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-800 dark:text-gray-200">Priority</label>
            <Select
              value={formData.priority}
              onValueChange={(val) =>
                setFormData((prev) => ({ ...prev, priority: val }))
              }
            >
              <SelectTrigger className="border border-gray-300 w-full mt-1 rounded-lg py-2 px-3">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="dueDate" className="font-semibold text-gray-800 dark:text-gray-200">
              Deadline
            </label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              required
              value={formData.dueDate}
              onChange={handleChange}
              className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="font-semibold text-gray-800 dark:text-gray-200"
            >
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
              className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3"
            />
          </div>

          <DialogFooter>
            <div className="w-full flex justify-between gap-3 mt-4">
              <DialogClose asChild>
                <button 
              className="border w-1/2 border-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-gray-100 transition-all duration-300 ease-in-out px-10 rounded-lg text-black py-2 bg-white">                  Cancel
                </button>
              </DialogClose>
              <button
                type="submit"
                className="bg-blue-600 text-white w-1/2 rounded-lg py-2"
              >
                Update Task
              </button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditComponent;
