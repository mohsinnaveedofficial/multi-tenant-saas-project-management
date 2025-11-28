"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";

function SideNavBar({ setnavOpen, nav }) {
  const [admin, setadmin] = useState(false);

  const path = usePathname();
  const segment = path.split("/").filter(Boolean);
  useEffect(() => {
    if (segment.includes("admin")) {
      setadmin(true);
    }
  }, [path]);
  const menulist = admin
    ? [
        {icon: MdOutlineDashboard,label: "Dashboard",page: "/admin/dashboard"},
        { icon: LuUserRound, label: "Client", page: "/admin/clients" },
        { icon: LuFolder, label: "Projects", page: "/admin/projects" },
        { icon: RiTaskLine, label: "Tasks", page: "/admin/tasks" },
        { icon: TbUsersGroup, label: "Users", page: "/admin/users" },
        { icon: RiMoneyDollarCircleLine,label: "Finance",page: "/admin/finance"},
        { icon: CgLoadbarSound, label: "Reports", page: "/admin/reports" },
        { icon: RiBillLine, label: "Billing", page: "/admin/billing" },
      ]
    : [
        {icon: MdOutlineDashboard,label: "Dashboard",page: "/team/dashboard"},
        { icon: LuFolder, label: "My Projects", page: "/team/projects" },
        { icon: RiTaskLine, label: "My Tasks", page: "/team/tasks" },
        { icon: CgLoadbarSound, label: "Reports", page: "/team/reports" },
        { icon: AiOutlineUser, label: "Profile", page: "/team/profile" },
      ];

  return (
    <aside
      className={`
    transition-all duration-500 ease-in-out bg-white border border-gray-200 min-h-full overflow-hidden z-50
    fixed lg:relative
    ${nav ? "w-[70%] sm:w-[50%] md:w-[40%] lg:w-[16.6%]" : "w-0 lg:w-[5%]"}
    ${nav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
    >
      <div className="flex justify-between  h-18 py-4 px-5  items-center">
        {nav ? (
          <>
            <h1 className="text-3xl text-blue-500 font-bold transition-all duration-500 ease-in-out  ">
              WorkHub
            </h1>
            <RiMenuFoldLine
              className="text-black text-xl  cursor-pointer"
              onClick={() => setnavOpen(false)}
            />
          </>
        ) : (
          <RiMenuFold2Line
            className="text-black text-xl cursor-pointer "
            onClick={() => setnavOpen(true)}
          />
        )}
      </div>
      <hr className="text-gray-200"></hr>
      <div className="text-gray-600 ps-2 pt-2">
        {menulist.map((menu, idx) => (
          <Link
            href={menu.page}
            key={idx}
            className="flex justify-start gap-4 text-lg transition-all duration-200 ease-in h-[60px] ps-4 pe-4 py-4 items-center hover:bg-blue-100 rounded-xl mr-2 hover:border-r-4  hover:border-r-blue-700 hover:text-blue-600 border-0 border-r-2 border-r-transparent"
          >
            <div className="w-6 flex justify-center">
              <menu.icon className="min-w-[24px]" />
            </div>
            {nav && (
              <h2 className="font-sans transition-all duration-500 ease-in-out ">
                {menu.label}
              </h2>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default SideNavBar;
