"use client";

import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
     <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
     </ThemeProvider>
  );
}
