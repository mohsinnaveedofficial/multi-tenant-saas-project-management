import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CreateFinancials() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className={"bg-blue-500 text-white cursor-pointer"}>
            + Add Entry
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Financials Entry</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1" className={"text-gray-700"}>
                Project
              </Label>
              <Select>
                <SelectTrigger className="w-full input-style">
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Project</SelectLabel>
                    <SelectItem value="E-commerce Project">
                      E-commerce Project
                    </SelectItem>
                    <SelectItem value="Shopify Store">Shopify Store</SelectItem>
                    <SelectItem value="landing page">landing page</SelectItem>
                    <SelectItem value="Multi-tanent saas">
                      Multi-tanent saas
                    </SelectItem>
                    <SelectItem value="AI image generator">
                      AI image generator
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="revenue">Revenue</Label>
              <Input id="revenue" name="revenue" placeholder={"0.00"} className={"input-style"} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="cost">Cost</Label>
              <Input id="cost" name="cost" placeholder={"0.00"}  className={"input-style"}/>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Select name="status" id="status">
                <SelectTrigger className="w-full input-style">
                  <SelectValue placeholder={"In Progress"}></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Project Status</SelectLabel>
                    <SelectItem value="Not Started">Not Started</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="On Hold">On Hold</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                    <SelectItem value="Delayed">Delayed</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className={"cursor-pointer"}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className={"text-white bg-blue-500 cursor-pointer"}
            >
              Add Entry
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default CreateFinancials;
