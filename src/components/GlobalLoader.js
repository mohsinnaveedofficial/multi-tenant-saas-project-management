"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";
import { registerLoading } from "@/lib/api";
import { Spinner } from "./ui/spinner";

export default function GlobalLoader() {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    registerLoading(setLoading);
  }, [setLoading]);

  if (!loading) return null;

  return (
      <div className='flex justify-center items-center min-h-screen '>
       <div className=' flex flex-col justify-center items-center'>

         <Spinner  className={"size-14 text-blue-500"}/>
         <h4>Please wait while we are loading</h4>
       </div>
       </div>
  );
  }
