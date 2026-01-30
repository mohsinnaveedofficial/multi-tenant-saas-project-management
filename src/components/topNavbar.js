"use client";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import api from "@/lib/api";
import { toast } from "sonner";
import { FaUser } from "react-icons/fa";
import { NavbarToogle } from "./navbarToggle";

function TopNavbar({ tooglenav }) {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean);

  let formattedSegement = segment.map(
    (seg) => seg.charAt(0).toUpperCase() + seg.slice(1),
  );
  const { signOut, user } = useAuth();
  const handleLogout = async () => {
    try {
      const res = await api.post("/auth/signout");
      if ((res.status = 201)) {
        signOut();
        toast.success("Successfully logout");
      }
    } catch (error) {
      toast.error(error.message || "Unable to logut");
    }
  };

  const pageTitle =
    formattedSegement[formattedSegement.length - 1] || "Dashboard";

  return (
    <nav className="w-full h-24 border border-gray-200 dark:bg-gray-800 dark:border-gray-700    bg-white ">
      <div className="text-gray-400 text-xs py-2 px-5 flex gap-1 justify-start  items-center font-sans">
        <p>Home</p>
        {formattedSegement.map((item, idx) => (
          <React.Fragment key={idx}>
            <FaAngleRight />
            <p>{item}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between items-center px-4 md:px-10 mt-1  text-black dark:text-gray-200">
        <div className="flex justify-between gap-3 md:gap-7 items-center ">
          <TiThMenu onClick={tooglenav} className="lg:hidden" />
          <h3 className="text-xl md:text-3xl font-bold font-sans ">
            {pageTitle}
          </h3>
        </div>
        <div className="flex items-center justify-start flex-row gap-1 text-sm md:text-lg">
          <div className="hidden sm:inline">
            <NavbarToogle />
          </div>

          <div className="  text-blue-700 flex justify-center font-sans items-center rounded-full h-10 w-10 bg-blue-50 ms-1 sm:ms-5">
            {/* <p>
              { user?.name?.split(" ")
                .map((word) => word.charAt(0))
                .join("")
                .toUpperCase()}
            </p> */}
            <FaUser />
          </div>
          {/* <h4 className="font-sans capitalize truncate">{user?.name}</h4> */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaAngleDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={
                "mr-8 mt-3   backdrop-blur-sm w-40 bg-white/70 dark:bg-neutral-900/90"
              }
            >
              <DropdownMenuLabel
                className={"flex min-w-0 ps-3 pe-1 mt-2 mb-1 max-w-32 capitalize"}
              >
                <span className="truncate"> {user?.name}</span>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="ps-3 pe-1 my-2 ">Profile</DropdownMenuItem>
              <DropdownMenuItem
                className="ps-3 pe-1 cursor-pointer mt-1 mb-3 "
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
              <DropdownMenuSeparator className={" sm:hidden block"} />
              <div className="flex justify-end items-end  sm:hidden mx-3 mt-3 mb-2">
                <NavbarToogle />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
