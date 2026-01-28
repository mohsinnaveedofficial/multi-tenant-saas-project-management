"use client";
import { useState } from "react";
import SideNavBar from "@/components/sideNavBar";
import TopNavbar from "@/components/topNavbar";
import { LoadingProvider } from "@/context/LoadingContext";
import GlobalLoader from "@/components/GlobalLoader";

export default function TeamLayout({ children }) {
  const [nav, setnavOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <SideNavBar nav={nav} setnavOpen={setnavOpen} />

      <div className="flex flex-col flex-1 min-w-0">
        <TopNavbar tooglenav={() => setnavOpen((pre) => !pre)} />
        <main className=" flex-1 overflow-auto min-w-0">
          <LoadingProvider>
            <GlobalLoader />
            {children}
          </LoadingProvider>
        </main>
      </div>
    </div>
  );
}
