"use client";

import Image from "next/image";
import { Eye, EyeOff, Key, Mail } from "lucide-react";
import { paths } from "@/app/constants/paths";
import { useState } from "react";
import { useApp } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {login} = useApp();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(email, password);
    if (result?.success) {
      router.replace(paths.dashboard);
    } else {
      toast.error(result?.message || "Login failed");
    }
    setLoading(false);
  };


  return (
    <>
      <div className="w-full hidden md:inline-block">
        <Image
          className="h-full"
          alt="Login Image"
          src="/logo/seo_rank_gif.gif"
          width={500}
          height={500}
          loading="eager"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please sign in to continue
          </p>
          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              sign in with email and password
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>
          <div className="flex mt-6 items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Mail />
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Key />
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {isShowPassword ? (
              <EyeOff
                className="mr-4 cursor-pointer"
                onClick={() => setIsShowPassword(false)}
              />
            ) : (
              <Eye
                className="mr-4 cursor-pointer"
                onClick={() => setIsShowPassword(true)}
              />
            )}
          </div>
          <button
            type="submit"
            className="mt-8 cursor-pointer w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?{" "}
            <a
              className="text-indigo-400 hover:underline"
              href={paths.register}
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
