import React from 'react'
import { FaCheck } from "react-icons/fa6";

function HomeFeature({text}) {
  return (
     <div className="flex items-center justify-start gap-4 m-4">
            <div className="p-1 text-sm rounded-full bg-blue-600 text-white  ">
            <FaCheck className="" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
          </div>
  )
}

export default HomeFeature