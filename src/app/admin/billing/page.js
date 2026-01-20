"use client";
import Paymenthistory from "@/components/paymenthistory";
import Userplanstats from "@/components/userplanstats";
import { FaRegFolder } from "react-icons/fa6";
import { RiTeamLine, RiDatabaseLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import PlanCard from "@/components/planCard";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";

function Page() {
  const plans = [
    {
      title: "Free",
      price: 0,
      features: [
        "Up to 3 projects",
        "5 team members",
        "Basic reporting",
        "Email support",
        "1GB storage",
      ],
      highlight: false,
      current: false,
    },
    {
      title: "Standard",
      price: 29,
      features: [
        "Up to 25 projects",
        "15 team members",
        "Advance reporting",
        "Priority support",
        "10GB storage",
        "Custom integrations",
      ],
      highlight: true,
      current: true,
    },
    {
      title: "Premium",
      price: 59,
      features: [
        "Unlimited projects",
        "Unlimited team members",
        "Advance analytics",
        "24/7 phone support",
        "100GB storage",
        "Custom integrations",
        "White-Label options",
      ],
      highlight: false,
      current: false,
    },
  ];

  const plandata = {
    free: { price: 0 },
    standard: { price: 29 },
    premium: { price: 59 },
  };

  const [data, setData] = useState({
    plan: "standard",
    projectUsed: 0,
    projectlimit: 0,
    teamUsed: 0,
    teamLimit: 0,
  });

  const price = plandata[data.plan]?.price || 0;
const FinalPlanList=plans.map((plan)=>({
  ...plan,
  current:plan.title.toLowerCase()===data.plan.toLowerCase()
  
}))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/admin/billing");
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch billing data:", err);
      }
    };
    fetchData();
  }, []);

  return (
  <ProtectedAdmin>
    <div className="bg-gray-50">
      <div className="text-black font-sans pt-4 m-4 px-8 border bg-white shadow-xs mb-6 border-gray-200 rounded-2xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Current plan</h1>
            <p className="text-gray-500 text-sm my-2">
              You are currently on the {data.plan} plan
            </p>
          </div>
          <div className="text-end">
            <h1 className="text-xl font-semibold">${price}</h1>
            <p className="text-gray-500 text-sm my-2">per month</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          <Userplanstats
            texta="#072E7C"
            bgcolor="#EAF0FD"
            icon={<FaRegFolder className="text-4xl text-blue-800 bg-blue-200 rounded-[12px] p-2" />}
            projectcount={`${data.projectUsed}/${data.projectlimit}`}
            work={"Project used"}
          />
          <Userplanstats
            texta="#028331"
            bgcolor="#E1FFEC"
            icon={<RiTeamLine className="text-4xl text-green-700 bg-green-200 rounded-[12px] p-2" />}
            projectcount={`${data.teamUsed}/${data.teamLimit}`}
            work={"Team members"}
          />
          <Userplanstats
            bgcolor="#F9E9FE"
            texta="#8300A8"
            icon={<RiDatabaseLine className="text-4xl text-purple-700 bg-purple-200 rounded-[12px] p-2" />}
            projectcount={"3.2 / 10"}
            work={"GB storage used"}
          />
        </div>
        <hr className="text-gray-300" />
        <div className="flex gap-1 my-4">
          <p className="text-gray-500 text-sm">Next billing date:</p>
          <h1 className="text-sm">March 1, 2024</h1>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-black flex justify-center pt-2">
          Choose Your Plan
        </h1>
        <p className="text-sm text-gray-600 flex justify-center pt-3 pb-4">
          Select the perfect plan for your team&apos;s needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4">
          {FinalPlanList.map((plan, index) => (
            <PlanCard  key={index} {...plan} />
          ))}
        </div>
      </div>
      <div className="m-4">
        <Paymenthistory />
      </div>
    </div>
    </ProtectedAdmin>
  );
}

export default Page;
