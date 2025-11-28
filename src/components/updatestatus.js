import React from "react";
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
  DialogDescription
} from "./ui/dialog";
import { Button } from "./ui/button";

function Updatestatus({className,Triggertext}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} variant={"primary"} >{Triggertext}</Button>


      </DialogTrigger>

<DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto custom-scrollbar">
        <DialogHeader>
          <DialogTitle>Update Task Status</DialogTitle>
        
        </DialogHeader>

        <div className="px-4 py-4 space-y-6">
          {/* Description */}
          <div>
            <h1 className="font-bold text-gray-700">Description</h1>
            <p className="text-gray-500 pt-1">
              Design user journey flows for the mobile application
            </p>
          </div>

          {/* Project & Assigned By */}
          <div className="flex justify-between">
            <div>
              <h1 className="text-gray-700 font-bold">Project</h1>
              <p className="text-gray-500 pt-1">Mobile App Design</p>
            </div>

            <div>
              <h1 className="text-gray-700 font-bold">Assigned by</h1>
              <p className="text-gray-500 pt-1">Mike Wilson</p>
            </div>
          </div>

          {/* Priority & Deadline */}
          <div className="flex justify-between">
            <div>
              <h1 className="text-gray-700 font-bold pb-1">Priority</h1>
              <p className="rounded-2xl px-3 py-1 bg-amber-500 text-white text-sm w-fit">
                Medium
              </p>
            </div>

            <div>
              <h1 className="text-gray-700 font-bold">Deadline</h1>
              <p className="text-gray-500 pt-1">2024-02-15</p>
            </div>
          </div>

          {/* Current Status */}
          <div>
            <h1 className="font-bold text-gray-700">Current Status</h1>
            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="To Do" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Progress */}
          <div>
            <h1 className="font-bold text-gray-700">Progress</h1>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              {/* set width dynamically */}
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: "50%" }}></div>
            </div>
          </div>

          {/* Comment */}
          <div>
            <h1 className="font-bold text-gray-700 pb-1">Add Comment</h1>
            <textarea
              className="w-full h-28 rounded-md p-2 border border-gray-300 text-sm"
              placeholder="Add your update or comment..."
            />
          </div>

          {/* File Upload */}
          <div>
            <h1 className="font-bold text-gray-700 pb-2">Attach File</h1>

            <button className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-lg text-gray-600 w-fit">
              <MdAttachFile className="text-lg" />
              Choose File
            </button>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Updatestatus;
