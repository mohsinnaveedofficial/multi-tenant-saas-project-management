import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

function AssignedRoleDropdown({value,onChange}) {
  return (
<div className="pt-2  text-start">
      <label htmlFor="phone" className="font-semibold text-gray-800 dark:text-gray-200">
        Assigned Role
      </label>
      
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="priority"
          className="border border-gray-300  mt-1  w-full rounded-lg p-1.5 data-[placeholder]:text-black dark:data-[placeholder]:text-gray-400"
        >
          <SelectValue placeholder="Select team member role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="manager">MANAGER</SelectItem>
          <SelectItem value="developer">DEVELOPER</SelectItem>
          <SelectItem value="designer">DESIGNER</SelectItem>
          <SelectItem value="tester">TESTER</SelectItem>
          <SelectItem value="devops">DEVOPS</SelectItem>
          <SelectItem value="businessAnalyst">BUSINESS ANALYST</SelectItem>
          <SelectItem value="scrumMaster">SCRUM MASTER</SelectItem>
          <SelectItem value="productOwner">PRODUCT OWNER</SelectItem>
          <SelectItem value="stakeholder">STAKEHOLDER</SelectItem >
          <SelectItem value="consultant">CONSULTANT</SelectItem>
          <SelectItem value="intern">INTERN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default AssignedRoleDropdown