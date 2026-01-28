"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Loader from "../loader";

const ProtectedAdmin = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.push("/auth/signin"); 
      else if (user.role !== "admin") router.push("/auth/signin"); 
    }
  }, [user, loading, router]);

  if (loading || !user || user.role !== "admin") {
    return 
  }

  return children;
};

export default ProtectedAdmin;
