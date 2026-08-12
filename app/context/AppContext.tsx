"use client";

import axios, { AxiosInstance } from "axios";
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import toast from "react-hot-toast";

interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  analysisCount?: number;
}

interface ErrorResponse {
  error: {
    response: {
      data: {
        message: string;
      };
    };
  };
}

interface AppContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  api: AxiosInstance;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message?: string }>;
  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const BACKEND_URL = process.env.BACKEND_LOCAL_URL || "http://localhost:8000";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("token") : null,
  );
  const [loading, setLoading] = useState<boolean>(true);

  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    api.get("/api/auth/user").then(({ data }) => {
      if (cancelled) return;
      if (data.success) setUser(data.user);
      setLoading(false);
    }).catch(() => {
      if (cancelled) return;
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        return { success: true };
      }
      toast.success(res.data.message || "Login successful");
      return { success: false, message: res.data.message || "Login failed" };
    } catch {
      return {
        success: false,
        message: "Login failed. Please check your email and password.",
      };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        return { success: true };
      }
      return {
        success: false,
        message: res.data.message || "Registration failed",
      };
    } catch {
      return {
        success: false,
        message: "An error occurred during registration",
      };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const value = { user, token, loading, api, login, register, logout };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
}
