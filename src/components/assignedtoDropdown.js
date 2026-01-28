import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

function AssignedtoDropdown({ value, onChange, options }) {
  return (
    <div className="pt-2 text-start">
      <label htmlFor="assignedTo" className="font-semibold text-gray-800 dark:text-gray-200">
        Assigned To
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="assignedTo"
          className="border border-gray-300 mt-1 w-full rounded-lg p-1.5 data-[placeholder]:text-black dark:data-[placeholder]:text-gray-400"
        >
          <SelectValue placeholder="Select team member" />
        </SelectTrigger>
        <SelectContent>
          {options.map((user) => (
            <SelectItem key={user.value} value={user.value}>
              {user.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default AssignedtoDropdown