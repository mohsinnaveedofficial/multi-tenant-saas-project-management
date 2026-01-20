"use client";

import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
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
import api from "@/lib/api";
import { toast } from "sonner";

function EditFinancials({ id, revenue: initialRevenue, cost: initialCost, status: initialStatus, onUpdate }) {
  const [revenue, setRevenue] = useState(initialRevenue !== undefined ? String(initialRevenue) : "");
  const [cost, setCost] = useState(initialCost !== undefined ? String(initialCost) : "");
  const [status, setStatus] = useState(initialStatus ?? "in progress");
  const [loading, setLoading] = useState(false);
 const [open, setOpen] = useState(false);

 useEffect(() => {
    if (open) {
      setRevenue(initialRevenue !== undefined ? String(initialRevenue) : "");
      setCost(initialCost !== undefined ? String(initialCost) : "");
      setStatus(initialStatus ?? "in progress");
    }
  }, [open, initialRevenue, initialCost, initialStatus]);


 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!revenue || !cost) {
    toast.error("Revenue and Cost are required");
    return;
  }

  setLoading(true);
  try {
    const res = await api.patch(`/finance/${id}`, {
      revenue: Number(revenue),
      cost: Number(cost),
      status,
    });
    setOpen(false)
    toast.success("Finance record updated");

    if (onUpdate) onUpdate();   
  } catch (err) {
    toast.error(err.response?.data?.message || err.message || "Failed to update record");
  } finally {
    setLoading(false);
  }
};

  return (
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <AiOutlineEdit className="inline text-blue-600 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Financials Entry</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Revenue</Label>
              <Input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                placeholder="0.00"
                className="input-style"
              />
            </div>

            <div className="grid gap-2">
              <Label>Cost</Label>
              <Input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="0.00"
                className="input-style"
              />
            </div>

            <div className="grid gap-2">
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full input-style">
                  <SelectValue placeholder="In Progress" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="not started">Not Started</SelectItem>
                    <SelectItem value="in progress">In Progress</SelectItem>
                    <SelectItem value="on hold">On Hold</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="delayed">Delayed</SelectItem>
                    <SelectItem value="under review">Under Review</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Edit Entry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditFinancials;
