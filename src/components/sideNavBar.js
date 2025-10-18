"use client"
import React, { useState } from "react";
import {
  RiMenuFold2Line,
  RiMenuFoldLine,
  RiTaskLine,
  RiMoneyDollarCircleLine,
  RiBillLine,
} from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { LuUserRound, LuFolder } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import { CgLoadbarSound } from "react-icons/cg";

function SideNavBar() {
  const menulist = [
    { icon: MdOutlineDashboard, label: "Dashboard" },
    { icon: LuUserRound, label: "Client" },
    { icon: LuFolder, label: "Projects" },
    { icon: RiTaskLine, label: "Tasks" },
    { icon: TbUsersGroup, label: "Users" },
    { icon: RiMoneyDollarCircleLine, label: "Finance" },
    { icon: CgLoadbarSound, label: "Reports" },
    { icon: RiBillLine, label: "Billing" },
  ];


  const [nav,setnavClose]=useState(true)

  return (
    <div className={`${nav ?  "w-[16.6%]" : "w-[5%]"} overflow-hidden transition-all bg-white duration-500 ease-in-out border min-h-screen`}>
      <div className="flex justify-between  h-18 py-4 px-5  items-center">
        {nav ? (<>
        <h1 className="text-3xl text-blue-500 font-bold transition-all duration-500 ease-in-out  ">WorkHub</h1>
        <RiMenuFoldLine className="text-black text-xl  cursor-pointer" onClick={()=>setnavClose(false)} />
        </> ):(<RiMenuFold2Line className="text-black text-xl cursor-pointer "  onClick={()=>setnavClose(true)}/> ) }
       
      </div>
      <hr></hr>
      <div className="text-gray-600 ps-2 pt-2">
        {menulist.map((menu,idx)=>(
            <div key={idx} className="flex justify-start gap-4 text-lg transition-all duration-200 ease-in h-[60px] ps-4 pe-4 py-4 items-center hover:bg-blue-100 rounded-xl mr-2 hover:border-r-4  hover:border-r-blue-700 hover:text-blue-600 border-0 border-r-2 border-r-transparent">
         <div className="w-6 flex justify-center">
             <menu.icon className="min-w-[24px]" />
         </div>
          {nav&&<h2 className="font-sans transition-all duration-500 ease-in-out " >{menu.label}</h2>}
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default SideNavBar;
