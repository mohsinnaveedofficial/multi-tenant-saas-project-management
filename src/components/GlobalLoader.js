"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";
import { registerLoading } from "@/lib/api";

export default function GlobalLoader() {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    registerLoading(setLoading);
  }, [setLoading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
    </div>
  );
}
