"use client";
import { useState } from "react";
import SideNavBar from "@/components/sideNavBar";
import TopNavbar from "@/components/topNavbar";

export default function AdminLayout({ children }) {
  const [nav, setnavOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <SideNavBar nav={nav} setnavOpen={setnavOpen} />

      <div className="flex flex-col flex-1 min-w-0">
                  <TopNavbar tooglenav={() => setnavOpen((pre) => !pre)} />

        <main className=" flex-1 overflow-auto min-w-0">{children}</main>
      </div>
    </div>
  );
}
