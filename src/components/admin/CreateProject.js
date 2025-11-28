"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Textinput from "./Textinput";
import Dropdown from "../dropdown";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function AdminCreateProject({ closeform }) {
  let [formdata, setformData] = useState({
    projectName: "",
    budget: "",
    // deadline: "",
    client: "",
  });

  let handleChanges = (e) => {
    console.log("handleChanges called with:", e);
    setformData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  console.log(formdata);

  return (
    <div className="p-5 rounded-lg border-gray-300 bg-white font-sans mb-10  lg:w-1/3 ">
      <div className="flex justify-between items-center gap-8">
        <h3 className="text-xl font-semibold  text-black"> Add new Project</h3>
        <RxCross2
          className="text-gray-400 cursor-pointer hover:text-gray-600"
          onClick={() => closeform(false)}
        />
      </div>
      <div>
        <div className="m-4">
          <form className="">
            <Textinput
              name={"projectName"}
              value={formdata.projectName}
              onchange={handleChanges}
              type={"text"}
              placeholder={"Enter Project name"}
              label={"Project Name"}
            />

            <label className="text-gray-700 text-sm font-semibold block mb-2 mt-5">
              Client
            </label>

            <Select>
              <SelectTrigger className="text-black border shadow  w-full input-style">
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="client1">Client 1</SelectItem>
                  <SelectItem value="client2">Client 2</SelectItem>
                  <SelectItem value="client3">Client 3</SelectItem>
                  <SelectItem value="client4">Client 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textinput
              type={"number"}
              placeholder={"$0.00"}
              label={"Budget"}
              name={"budget"}
              value={formdata.budget}
              onchange={handleChanges}
            />
            {/* <Textinput
              type={"date"}
              label={"Deadline"}
              name={"deadline"}
              value={formdata.value}
              onchange={handleChanges}
            /> */}
           <div className="mt-5 mb-7">
            <label  className="text-gray-700 text-sm font-semibold block mb-2 ">Deadline</label>
             <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className=" w-full justify-between font-normal border shadow   input-style"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
           </div>

            <div className="mt-4 w-full flex justify-center items-center gap-3 ">
              <button
                type="button"
                onClick={() => closeform(false)}
                className="border w-full border-gray-300 hover:bg-gray-100 transition-all duration-300 ease-in-out px-10 rounded-lg text-black py-2 bg-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => closeform(false)}
                className="border w-full whitespace-nowrap border-blue-300 hover:bg-blue-600 transition-all duration-300 ease-in-out px-10 rounded-lg text-white py-2 bg-blue-500"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateProject;
