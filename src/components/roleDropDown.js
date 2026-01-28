import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function RoleDropdown({ value, onchange }) {
  return (
    <div className="mt-4  text-start">
      <label
        htmlFor="phone"
        className="font-semibold text-gray-800 dark:text-gray-200 "
      >
        Role
      </label>

      <Select value={value} onValueChange={onchange}>
        <SelectTrigger
          id="priority"
          className="border border-gray-300 w-full rounded-lg  py-2 px-3 input-style data-[placeholder]:text-black dark:data-[placeholder]:text-gray-400 mt-1"
        >
          <SelectValue placeholder="Select team member" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="team">Employee</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoleDropdown;
