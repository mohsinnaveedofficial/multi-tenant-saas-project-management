"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Textinput from "./Textinput";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function AdminCreateProject({ closeform,refreshData }) {
  const router = useRouter();

  const [formdata, setformData] = useState({
    projectName: "",
    budget: "",
    deadline: "",
    clientId: "",
  });

  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await api.get("/client");
        setClients(res.data);

      } catch (error) {
        toast.error(
                error.response?.data?.message || error.message || "Unable to get client"
              );
      }
    };
    getClients();
  }, []);

  const handleChanges = (e) => {
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.projectName || !formdata.clientId || !formdata.budget || !date) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/project", {
        name: formdata.projectName,
        clientId: formdata.clientId,
        budget: Number(formdata.budget),
        end: date.toISOString(),
      });
      toast.success("Project created successfully")
      closeform(false);
      refreshData()
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Unable to Add"
      );
     
    }
  };

  return (
    <div className="p-5 rounded-lg border-gray-300  dark:border-gray-700 dark:shadow-gray-800 dark:shadow-sm dark:bg-neutral-950 bg-white font-sans mb-10 lg:w-1/3">
      <div className="flex justify-between items-center gap-8">
        <h3 className="text-xl font-semibold text-black dark:text-gray-200">Add new Project</h3>
        <RxCross2
          className="text-gray-400 cursor-pointer hover:text-gray-600"
          onClick={() => closeform(false)}
        />
      </div>
      <div className="m-4">
        <form onSubmit={handleSubmit}>
          <Textinput
            name="projectName"
            value={formdata.projectName}
            onchange={handleChanges}
            type="text"
            placeholder="Enter Project name"
            label="Project Name"
          />

          <label className="text-gray-700 text-sm font-semibold dark:text-gray-200 block mb-2 mt-5">
            Client
          </label>
          <Select onValueChange={(val) => setformData((prev) => ({ ...prev, clientId: val }))}>
            <SelectTrigger className="text-black border shadow w-full input-style">
              <SelectValue placeholder="Select Client" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {clients.map((client) => (
                  <SelectItem key={client.id} value={client.id}>
                    {client.companyName}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textinput
            type="number"
            placeholder="$0.00"
            label="Budget"
            name="budget"
            value={formdata.budget}
            onchange={handleChanges}
          />

          <div className="mt-5 mb-7">
            <label className="text-gray-700 text-sm font-semibold dark:text-gray-200 block mb-2">Deadline</label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="w-full justify-between font-normal border shadow input-style"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="start">
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

          <div className="mt-4 w-full flex justify-center items-center gap-3">
            <button
              type="button"
              onClick={() => closeform(false)}
              className="border w-full border-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-gray-100 transition-all duration-300 ease-in-out px-10 rounded-lg text-black py-2 bg-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border w-full whitespace-nowrap border-blue-300 hover:bg-blue-600 transition-all duration-300 ease-in-out px-10 rounded-lg text-white py-2 bg-blue-500"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminCreateProject;
