import React from "react";
import {Progress} from "./progress";
import StatusTag from "./statusTag";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

function DashboardCard({name,value,amount_change,Icon,Color,UpOrDown}) {
    const colorMap = {
  blue:   { text: "text-blue-500",   bg: "bg-blue-100" },
  green:  { text: "text-green-500",  bg: "bg-green-100" },
  orange: { text: "text-orange-500", bg: "bg-orange-100" },
  red:    { text: "text-red-500",    bg: "bg-red-100" },
  purple: { text: "text-purple-500", bg: "bg-purple-100" },
  yellow: { text: "text-yellow-500", bg: "bg-yellow-100" },
};
const color=colorMap[Color]||colorMap.blue;
  return (
    <div className="flex justify-between items-center shadow-sm bg-white border border-gray-200 rounded-2xl px-8 py-5">
      <div className="space-y-1">
        <h3 className="text-gray-400  font-sans font-semibold text-sm  ">{name}</h3>
        <h4 className="font-bold text-2xl">{value}</h4>
        <p className={`${color.text} font-semibold text-xs` }>
          <span className="flex items-center gap-1">
             {UpOrDown =="increase" ? <><FaArrowUp />+</>:<><FaArrowDown />-</>}
             {amount_change}
            </span>
        
          </p>
      </div>
      <div>
        <div className={`${color.bg} p-3 rounded-lg ${color.text}`}>
             <Icon />
        </div>
       
      </div>
    </div>
  );
}

function DashboardActiveProjects({title,company,progress,status,date}){
    return(
        <tr className="text-center bg-white h-12  ">
        <td>{title}</td>
        <td>{company}</td>
        <td className='text-center'><Progress width={progress}/></td>
        <td> <StatusTag status={status}/> </td>
        <td className="whitespace-nowrap">{date}</td>
     
    </tr>
    )
}




export  {DashboardCard,DashboardActiveProjects};


