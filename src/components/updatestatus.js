"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdAttachFile } from "react-icons/md";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function Updatestatus({
  className,
  Triggertext,
  updatePriority,
  updateProgress,
  id,
  updateDueDate,
  updateTaskName,
  updateDescription,
  updateProject,
  updateStatus,
  onUpdated,
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const statusmain = {
    high: { text: "text-red-500", bg: "bg-red-500" },
    medium: { text: "text-orange-500", bg: "bg-orange-500" },
    low: { text: "text-green-500", bg: "bg-green-500" },
  };
  const selectedStatusColor = statusmain[updatePriority] || statusmain.medium;
  const [taskStatus, setTaskStatus] = useState(updateStatus || "todo");
  const handleUpdateStatus = async () => {
    try {
      const res = await api.patch(`/task/status/${id}`, {
        status: taskStatus,
      });

      toast.success("Status updated successfully");

      setOpen(false);
      if (onUpdated) onUpdated();
      router.refresh();
    } catch (error) {
      toast.error("Unable to update the status");
      
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} variant="primary">
          {Triggertext}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto custom-scrollbar">
        <DialogHeader>
          <DialogTitle>Update Task Status</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="px-4 py-4 space-y-6 ">
          <div>
            <h1 className="font-bold text-gray-700 dark:text-gray-200">Description</h1>
            <p className="text-gray-500 pt-1 dark:text-gray-300">{updateDescription}</p>
          </div>

          <div className="flex justify-start">
            <div>
              <h1 className="text-gray-700 dark:text-gray-200 font-bold">Project</h1>
              <p className="text-gray-500 dark:text-gray-300 pt-1">{updateProject}</p>
            </div>

           
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-gray-700 font-bold pb-1 dark:text-gray-200">Priority</h1>
              <p
                className={`rounded-2xl px-3 py-1 ${selectedStatusColor.bg} text-white text-sm w-fit`}
              >
                {updatePriority}
              </p>
            </div>

            <div>
              <h1 className="text-gray-700 font-bold dark:text-gray-200">Deadline</h1>
              <p className="text-gray-500 dark:text-gray-300 pt-1">{updateDueDate}</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-gray-700 dark:text-gray-200">Current Status</h1>
            <Select value={taskStatus} onValueChange={setTaskStatus}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="To Do" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="inProgress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h1 className="font-bold text-gray-700 dark:text-gray-200">Progress</h1>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: `${updateProgress}%` }}
              ></div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-gray-700 pb-1 dark:text-gray-200">Add Comment</h1>
            <textarea
              className="w-full h-28 rounded-md p-2 border border-gray-300 text-sm"
              placeholder="Add your update or comment..."
            />
          </div>

          <div>
            <h1 className="font-bold text-gray-700 pb-2 dark:text-gray-200">Attach File</h1>

            <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-lg text-gray-600 dark:text-gray-200 w-fit">
              <MdAttachFile className="text-lg" />
              Choose File
            </button>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleUpdateStatus} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Updatestatus;
