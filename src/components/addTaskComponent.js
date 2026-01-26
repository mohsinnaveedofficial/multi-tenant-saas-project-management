"use client";
import React, { useEffect, useState } from "react";
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
import { FaPlus } from "react-icons/fa6";
import AssignedtoDropdown from "./assignedtoDropdown";
import AssignedRoleDropdown from "./assignRole";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { SelectProject } from "./taskDropDownMenu";
import { toast } from "sonner";

function AddTaskComponent({ refreshData }) {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    project: "",
    teamMember: "",
    priority: "",
    deadline: "",
    description: "",
    role: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsRes = await api.get("/project");
        setProjects(projectsRes.data);
        const usersRes = await api.get("/user");
        setUsers(usersRes.data);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Unable to get project and user",
        );
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/task", {
        title: formData.title,
        projectId: formData.project,
        assignedTo: formData.teamMember,
        priority: formData.priority.toLowerCase(),
        dueDate: formData.deadline,
        description: formData.description,
        roleInProject: formData.role,
      });
      if (res.status === 201) {
        toast.success("Task added Successfully  ");
        setOpen(false);
        refreshData();
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Unable to Add",
      );
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
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

              <SelectProject
                value={formData.project}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, project: val }))
                }
                options={projects.map((p) => ({ value: p.id, label: p.name }))}
              />

              <AssignedtoDropdown
                value={formData.teamMember}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, teamMember: val }))
                }
                options={users.map((u) => ({ value: u.id, label: u.name }))}
              />

              <AssignedRoleDropdown
                value={formData.role}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, role: val }))
                }
              />

              <div className="flex gap-4 pt-2 items-center justify-center">
                <div className="w-1/2 text-start">
                  <label
                    htmlFor="priority"
                    className="font-semibold text-gray-800"
                  >
                    Priority
                  </label>
                  <Select
                    value={formData.priority}
                    onValueChange={(val) =>
                      setFormData((prev) => ({ ...prev, priority: val }))
                    }
                  >
                    <SelectTrigger className="border border-gray-300 w-full mt-1 rounded-lg py-5 px-3">
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-start w-1/2">
                  <label
                    htmlFor="deadline"
                    className="font-semibold text-gray-800"
                  >
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

              <div className="pt-2 text-start">
                <label
                  htmlFor="description"
                  className="font-semibold text-gray-800"
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
                  className="border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style"
                />
              </div>

              <DialogFooter>
                <div className="flex w-full items-center justify-between pt-5 gap-3">
                  <DialogClose asChild>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 text-lg w-1/2 rounded-lg p-1.5">
                      Cancel
                    </button>
                  </DialogClose>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white w-1/2 text-md rounded-lg p-2"
                  >
                    Addd Task
                  </button>
                </div>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddTaskComponent;
