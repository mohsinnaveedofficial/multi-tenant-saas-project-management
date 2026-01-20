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

export function SelectProject({ value, onChange, options }) {
  return (
    <div className="pt-2 text-start">
      <label htmlFor="project" className="font-semibold text-gray-800">
        Project
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="project"
          className="border mt-1 border-gray-300 w-full rounded-lg p-1.5 data-[placeholder]:text-black"
        >
          <SelectValue placeholder="Select project" />
        </SelectTrigger>
        <SelectContent>
          {options.map((project) => (
            <SelectItem key={project.value} value={project.value}>
              {project.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
