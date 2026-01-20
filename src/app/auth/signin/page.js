"use client"
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import { setAccessToken, setRefreshToken } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Home } from 'lucide-react'; // optional icon

function Login() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await api.post(
        "/auth/signin",
        {
          email: loginForm.email,
          password: loginForm.password,
        },
        { skipAuthRefresh: true }
      );

      setAccessToken(res.data.accessToken);
      if (res.data.refreshToken) setRefreshToken(res.data.refreshToken);

      const profileRes = await api.get("/user/profile", {
        headers: { Authorization: `Bearer ${res.data.accessToken}` },
        skipAuthRefresh: true,
      });
      setUser(profileRes.data);

      toast.success("Successfully logged in", { duration: 2000 });

      if (profileRes.data.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/team/dashboard");
      }
    } catch (err) {
     
      toast.error(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-sans min-h-screen bg-gray-50 px-4 bg-gradient-to-br from-blue-200 via-white to-purple-200 relative">
      
      
      <button
        onClick={() => router.push("/")}
        className="fixed top-20 left-0 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg shadow-lg flex items-center gap-2 z-50 transition-colors"
      >
        <Home size={20} /> 
      </button>

      <div className="w-full max-w-md border border-gray-200 m-8 p-6 sm:p-10 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#3663eb] text-center">Project Hub</h1>
        <h2 className="text-2xl sm:text-3xl pt-1 font-semibold text-center">Welcome back</h2>
        <h3 className="text-lg sm:text-xl pt-1 text-gray-500 text-center">Sign in to your account</h3>

        <div className="w-full mt-8">
          <form onSubmit={handleSubmit}>
            <div className="pt-4 text-start">
              <label htmlFor="email" className="font-semibold text-gray-500">Email Address</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email"
                required
                value={loginForm.email}
                onChange={handleChange}
                className="border mt-1 border-gray-300 w-full rounded-lg py-2 px-3 input-style"
              />
            </div>

            <div className="pt-4 text-start">
              <label htmlFor="password" className="font-semibold text-gray-500">Password</label>
              <input
                id="password"
                name="password"
                onChange={handleChange}
                value={loginForm.password}
                type="password"
                placeholder="Enter your password"
                required
                className="border border-gray-300 mt-1 w-full rounded-lg py-2 px-3 input-style"
              />
            </div>

            <div className="pt-4 flex justify-between items-center">
              <div className="flex items-center">
                <input id="checkbox" type="checkbox" className="h-4 w-4" />
                <label htmlFor="checkbox" className="pl-2 text-gray-500 text-xs">Remember me</label>
              </div>
              <div className="pt-0">
                <a href="#" className="text-xs text-blue-500">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="bg-blue-600 rounded-lg w-full mt-6 py-2 text-white hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </form>

          <div className="flex justify-center items-center gap-1 py-6">
            <p className="text-gray-700 text-sm">Don't have an account?</p>
            <Link href="./signup" className="text-blue-600 font-semibold text-sm">Sign up</Link>
          </div>

          <hr className="border-gray-300" />
          <p className="text-xs pt-4 text-gray-700 text-center">
            By signing in, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
