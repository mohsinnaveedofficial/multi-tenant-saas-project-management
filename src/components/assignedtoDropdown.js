import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

function AssignedtoDropdown({value,onChange}) {
  return (
<div className="pt-2  text-start">
      <label htmlFor="phone" className="font-semibold text-gray-800">
        Assigned To
      </label>
      
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="priority"
          className="border border-gray-300  mt-1  w-full rounded-lg p-1.5 data-[placeholder]:text-black"
        >
          <SelectValue placeholder="Select team member" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">John</SelectItem>
          <SelectItem value="medium">Wick</SelectItem>
          <SelectItem value="high">Joe</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default AssignedtoDropdown