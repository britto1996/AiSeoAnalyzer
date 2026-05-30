"use client";

import { paths } from "@/app/constants/paths";
import { useApp } from "@/app/context/AppContext";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useApp();
  const router = useRouter();

  const navigateToLogin = () => {
    router.push(paths.login);
  };

  return (
    <nav className="h-20">
      <div className="fixed left-0 top-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 border-b border-gray-300 bg-white transition-all">
        <a href="#">
          <Image
            unoptimized
            src="/logo/seo_rank_gif.gif"
            alt="Site Name Logo"
            width={64}
            height={64}
            loading="eager"
            className="object-contain"
          />
        </a>
        <div className="hidden sm:flex items-center gap-5 md:gap-7 text-xs text-gray-500 font-medium tracking-wide">
          <a
            onClick={() => scrollTo(0, 0)}
            href={user !== null ? paths.dashboard : paths.login}
          >
            Dashboard
          </a>
          <a onClick={() => scrollTo(0, 0)} href="#">
            Analyze
          </a>
          <a onClick={() => scrollTo(0, 0)} href="#">
            Rank Tracker
          </a>
          <a onClick={() => scrollTo(0, 0)} href="#">
            History
          </a>
        </div>
        <div>
          <button
            onClick={() => navigateToLogin()}
            className="max-sm:hidden cursor-pointer px-5 py-1.5 text-sm bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Login
          </button>
          <svg
            onClick={() => setIsMenuOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:hidden"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </div>
      </div>
      <div
        className={`sm:hidden fixed inset-0 ${isMenuOpen ? "w-full" : "w-0"} overflow-hidden bg-white backdrop-blur shadow-xl rounded-lg z-20 text-sm transition-all`}
      >
        <div className="flex flex-col items-center justify-center h-full text-xl font-semibold gap-6 p-4">
          <a
            onClick={() => scrollTo(0, 0)}
            href={user !== null ? paths.dashboard : paths.login}
          >
            Dashboard
          </a>
          <a onClick={() => scrollTo(0, 0)} href="#">
            Analyze
          </a>
          <a onClick={() => scrollTo(0, 0)} href="#">
            Rank Tracker
          </a>
          <a onClick={() => scrollTo(0, 0)} href="#">
            History
          </a>
          <button className=" cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            Login
          </button>
          <X className="cursor-pointer text-indigo-500 hover:text-indigo-600 transition rounded-full font-bold" onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
