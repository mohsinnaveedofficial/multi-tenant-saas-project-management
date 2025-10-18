"use client";
import { useState } from "react";
import SideNavBar from "@/components/sideNavBar";
import TopNavbar from "@/components/topNavbar";

export default function ClientLayout({ children }) {
  const [nav, setnavOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <SideNavBar nav={nav} setnavOpen={setnavOpen} />

      <div className="flex flex-col flex-1">
        <TopNavbar tooglenav={() => setnavOpen((pre) => !pre)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
