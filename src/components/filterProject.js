import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { RiFilterLine } from "react-icons/ri";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "./ui/field";
import { Button } from "./ui/button";
import { toast } from "sonner";
import api from "@/lib/api";
import { DialogClose } from "@radix-ui/react-dialog";

function FilterProject({ setFilters, filter }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await api.get("/client");
        setClients(res.data);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Unable to get client",
        );
      }
    };
    getClients();
  }, []);

  const isDefaultFilter =
  filter.Status === "all" &&
  filter.Client === "all" &&
  filter.DateRange === "all";


  return (
    <div>
      <Dialog>
        <DialogTrigger className="py-1.5 px-3 shadow-sm bg-white dark:bg-gray-800 dark:text-gray-200 text-black border border-gray-300 rounded-lg flex items-center justify-center gap-1 transition-all duration-300">
          <RiFilterLine className="text-xl" />
          Filter {!isDefaultFilter && <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></span>}
        </DialogTrigger>

        <DialogContent className={"m-0 p-0 font-sans"}>
          <DialogHeader className={"px-6"}>
            <DialogTitle className={"pt-6"}>Filter Projects</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <hr className=""></hr>
          <div className="px-6 py-3">
            <div>
              <h5>Status</h5>
              <RadioGroup
                className={"mt-4"}
                value={filter.Status}
                onValueChange={(val) =>
                  setFilters((prev) => ({ ...prev, Status: val }))
                }
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="all" id="all"></RadioGroupItem>
                  <Label htmlFor="all" className={"font-normal"}>
                    All Status
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="notStarted"
                    id="notStarted"
                  ></RadioGroupItem>
                  <Label htmlFor="notStarted" className={"font-normal"}>
                    Not Started
                  </Label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="inProgress"
                    id="inProgress"
                  ></RadioGroupItem>
                  <Label htmlFor="inProgress" className={"font-normal"}>
                    In Progress
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="pending" id="pending"></RadioGroupItem>
                  <Label htmlFor="pending" className={"font-normal"}>
                    Pending
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="completed"
                    id="completed"
                  ></RadioGroupItem>
                  <Label htmlFor="completed" className={"font-normal"}>
                    Completed
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="onHold"
                    id="onHold"
                  ></RadioGroupItem>
                  <Label htmlFor="onHold" className={"font-normal"}>
                    On Hold
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="cancelled"
                    id="cancelled"
                  ></RadioGroupItem>
                  <Label htmlFor="cancelled" className={"font-normal"}>
                    Cancelled
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="mt-6 mb-3">Client</Label>
              <Select
                value={filter.Client}
                onValueChange={(val) =>
                  setFilters((prev) => ({ ...prev, Client: val }))
                }
              >
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder="All Client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Clients</SelectLabel>
                    <SelectItem value="all">All Client</SelectItem>
                    {clients.map((client, idx) => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.companyName}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mt-6 mb-3">Date Range</Label>
              <Select
                value={filter.DateRange}
                onValueChange={(val) =>
                  setFilters((prev) => ({ ...prev, DateRange: val }))
                }
              >
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder="All Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time</SelectLabel>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter className={"p-6"}>
            <Button
              variant={"outline"}
              className="cursor-pointer"
              onClick={() =>
                setFilters({
                  Status: "all",
                  Client: "all",
                  DateRange: "all",
                })
              }
            >
              Reset
            </Button>
            <DialogClose asChild>
              <Button
                className={"bg-blue-500 hover:bg-blue-700 cursor-pointer"}
              >
                Apply Filters
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FilterProject;
