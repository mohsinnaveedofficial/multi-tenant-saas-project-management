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
import { AiOutlineEdit } from "react-icons/ai";

function EditFinancials() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <AiOutlineEdit className="inline text-blue-600 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Financials Entry</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
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
              Edit Entry
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default EditFinancials;
