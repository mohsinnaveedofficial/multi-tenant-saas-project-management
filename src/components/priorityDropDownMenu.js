import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <div className="pt-2  text-start">
      <label htmlFor="phone" className="font-semibold text-gray-800">
        Priority
      </label>

      <Select>
        <SelectTrigger
          id="priority"
          className="border border-gray-300 w-full rounded-lg py-2 px-3 data-[placeholder]:text-black "
        >
          <SelectValue placeholder="Select Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
