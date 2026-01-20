// /context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
  getRefreshToken,
  setRefreshToken,
  clearRefreshToken,
} from "@/lib/auth";
import api from "@/lib/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let token = getAccessToken();

        const attemptProfileFetch = async () => {
          const res = await api.get("/user/profile");
          setUser(res.data);
        };

        if (token) {
          try {
            await attemptProfileFetch();
            setLoading(false);
            return;
          } catch (profileErr) {
            if (profileErr?.response?.status !== 401) {
              throw new Error(
                profileErr?.response?.data?.message ||
                  profileErr.message ||
                  "Failed to fetch profile"
              );
            }
          }
        }

        if (!token) {
          try {
            const refreshToken = getRefreshToken();
            let refreshRes;
            if (refreshToken) {
              const axios = (await import("axios")).default;
              refreshRes = await axios.post(
                `${api.defaults.baseURL}/auth/refresh`,
                {},
                { headers: { Authorization: `Bearer ${refreshToken}` } }
              );
            } else {
              const axios = (await import("axios")).default;
              refreshRes = await axios.post(
                `${api.defaults.baseURL}/auth/refresh`,
                {},
                { withCredentials: true }
              );
            }
            if (refreshRes?.data?.accessToken) {
              setAccessToken(refreshRes.data.accessToken);
              token = refreshRes.data.accessToken;
            }
            if (refreshRes?.data?.refreshToken) {
              setRefreshToken(refreshRes.data.refreshToken);
            }
          } catch (refreshErr) {
            clearAccessToken();
            clearRefreshToken();
            setUser(null);
            throw new Error(refreshErr?.response?.data?.message || refreshErr.message || "Failed to refresh token");
            return;
          }
        }

        if (!token) return;

        await attemptProfileFetch();
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const signOut = () => {
    clearAccessToken();
    clearRefreshToken();
    setUser(null);
    if (typeof window !== "undefined") {
      window.location.replace("/auth/signin");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
