"use client"
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";


function Homenavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if(typeof window!=="undefined"){
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
 } }, []);

  return (
    <div
      className={` fixed top-0 z-50  right-0 left-0 w-full p-4 font-sans transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between  items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div>
        <h1 className="text-blue-600 text-3xl font-semibold mt-1">WorkHUB</h1>
      </div>
      <div className="text-gray-800 text-sm  items-center justify-between mt-1 gap-8 hidden md:flex">
        <a href="#home" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer"  >Home</a>
        <a href="#features" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Features</a>
        <a href="#pricing" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Pricing</a>
        <a href="#about" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">About</a>
        <Link href="./auth/signin" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Login</Link>
        <Link href={"./auth/signup"} className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Register</Link>
        <Link href={"./auth/signup"} className="text-white bg-blue-700 py-2.5 px-5 rounded-lg">Get Started</Link>
        
      </div>
      </div>
      <div className="md:hidden">
        <Sheet>
  <SheetTrigger><AiOutlineMenu/></SheetTrigger>
  <SheetContent className={"p-5"}>
     <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
   <h2 className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Home</h2>
        <a href="#home" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer"  >Home</a>
        <a href="#features" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Features</a>
        <a href="#pricing" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Pricing</a>
        <a href="#about" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">About</a>
        <Link href="./auth/login" className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Login</Link>
        <Link href={"./auth/register"} className="hover:text-blue-600 transition-all ease-in-out duration-200 cursor-pointer">Register</Link>
        <Link href={"./auth/register"} className="text-white bg-blue-700 py-2.5 px-5 rounded-lg">Get Started</Link>
  </SheetContent>
</Sheet>
      </div>
    </div>
  );
}

export default Homenavbar;
