"use client";
import Dashboard from "@/app/admin/dashboard/page";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

function TopNavbar({ tooglenav }) {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean);
  

  let formattedSegement=segment.map((seg)=>(
    seg.charAt(0).toUpperCase()+seg.slice(1)
  ))

  const pageTitle = formattedSegement[formattedSegement.length - 1] || "Dashboard";

  return (
    <nav className="w-full h-24 border border-gray-200 bg-white">
      <div className="text-gray-400 text-xs py-2 px-5 flex gap-1 justify-start  items-center font-sans">
        <p>Home</p>
        {formattedSegement.map((item, idx) => (
          <React.Fragment key={idx}>
            <FaAngleRight />
            <p>{item}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between items-center px-4 md:px-10 mt-1 text-black">
        <div className="flex justify-between gap-3 md:gap-7 items-center ">
          <TiThMenu onClick={tooglenav} className="lg:hidden" />
          <h3 className="text-xl md:text-3xl font-bold font-sans ">{pageTitle}</h3>
        </div>
        <div className="flex items-center justify-start flex-row gap-1 text-sm md:text-lg">
          <div className="text-blue-700 flex justify-center items-center rounded-full h-10 w-10 bg-blue-50">
            <p>MM</p>
          </div>
          <h4>John Doe</h4>
          <FaAngleDown />
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
