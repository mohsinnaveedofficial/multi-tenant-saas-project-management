import React from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

function TopNavbar({ tooglenav }) {
  return (
    <nav className="w-full h-24 border bg-white">
      <div className="text-gray-400 text-xs py-2 px-5 flex gap-1 justify-start  items-center">
        <p>Home</p>
        <FaAngleRight />
        <p>Dashboard</p>
      </div>
      <div className="flex justify-between items-center px-4 md:px-10 mt-1 text-black">
        <div className="flex justify-between gap-3 md:gap-7 items-center ">
          <TiThMenu onClick={tooglenav} className="lg:hidden" />
          <h3 className="text-xl md:text-3xl font-bold ">Dashboard</h3>
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
