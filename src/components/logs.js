import React from 'react'
import { SiTask } from "react-icons/si";

function Logs({title,time}) {
  return (
    <div className="flex items-center gap-3 mx-3 my-5  font-sans"> 
        <div className="text-purple-500 bg-purple-100 p-2 text-lg rounded-full"><SiTask /></div>
        <div>
          <h5 className=" font-medium">{title}</h5>
          <span className="text-sm text-gray-400">{time}</span>
        </div>
        </div>
      
  )
}

export default Logs