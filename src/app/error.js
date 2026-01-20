"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import React from "react";

function GlobalError({ error, reset }) {
    const errorMessage = error instanceof Error ? error.message : typeof error === "string" ? error : JSON.stringify(error);
  return (
    
      <div className="flex min-h-screen justify-center items-center bg-black text-white">
        <Alert className="max-w-md flex flex-col gap-4 p-4">
          <AlertTitle>Application Error</AlertTitle>
          <AlertDescription>{errorMessage || "Something went wrong!"}</AlertDescription>
          <Button className={""} onClick={reset}>
            Reload
          </Button>
        </Alert>
      </div>
  );
}

export default GlobalError;
