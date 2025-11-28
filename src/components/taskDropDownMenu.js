import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectTask({value,onChange}) {
  return (
    <div className="pt-2  text-start">
                <label htmlFor="phone" className="font-semibold text-gray-800">
                  Project
                </label>
                <br />
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id="project" className="border  mt-1  border-gray-300 w-full rounded-lg p-1.5 data-[placeholder]:text-black">
        <SelectValue placeholder="Select project" />
      </SelectTrigger>
      <SelectContent>
       
          
          <SelectItem value="design">design</SelectItem>
          <SelectItem value="implement">implement</SelectItem>
          <SelectItem value="High">High</SelectItem>
          
       
      </SelectContent>
    </Select>
    </div>
  )
}
