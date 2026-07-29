"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { LayoutDashboard, Search, Shell, History, X, LogOut } from "lucide-react";
import { useState } from "react";

const MainHeader = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="h-20">
      <div className="fixed left-0 top-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
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
        <div className="hidden sm:flex items-center gap-4 md:gap-8 max-md:text-sm text-gray-800">
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
                <LayoutDashboard size={16} /> Dashboard
            </a>
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
                <Search size={16} /> Analyze
            </a>
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
                <Shell size={16} /> Rank Tracker
            </a>
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
              <History size={16} /> History
            </a>
        </div>
        <div className="flex items-center gap-4 md:gap-8 max-md:text-sm text-gray-800">
          <button className="max-sm:hidden flex items-center justify-center gap-2 cursor-pointer px-2 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            <p className="bg-gray-300 text-indigo-500 rounded-full px-2 flex items-center justify-center">
              B
            </p>
            <span className="text-sm font-medium">Bobby</span>
            <span className="text-uppercase text-xs font-bold bg-indigo-950 px-2 py-1 rounded-full">FREE</span>
          </button>
          <button className="max-sm:hidden flex items-center justify-center gap-2 cursor-pointer px-2 py-2 border border-indigo-500 hover:border-indigo-900 transition text-white rounded-full">
            <span className="flex items-center justify-center gap-2 text-indigo-500">
              <LogOut /> Logout
            </span>
          </button>
          <svg onClick={() => setMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:hidden"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
        </div>
      </div>
      <div className={`sm:hidden fixed inset-0 ${menuOpen ? 'w-full' : 'w-0'} overflow-hidden bg-white backdrop-blur shadow-xl rounded-lg z-50 text-sm transition-all`}>
         <div className="flex flex-col items-center justify-center h-full text-xl font-semibold gap-6 p-4">
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
                <LayoutDashboard size={16} /> Dashboard
            </a>
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
                <Search size={16} /> Analyze
            </a>
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
                <Shell size={16} /> Rank Tracker
            </a>
            <a className="flex items-center gap-2" href="#" onClick={() => scrollTo(0, 0)}>
              <History size={16} /> History
            </a>
            <button className="flex items-center justify-center gap-2 cursor-pointer px-2 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            <p className="bg-gray-300 text-indigo-500 rounded-full w-8 h-8 flex items-center justify-center">
              B
            </p>
            <span className="text-sm font-medium">Bobby</span>
            <span className="text-uppercase text-xs font-bold bg-indigo-950 px-2 py-1 rounded-full">FREE</span>
          </button>
          <button className="flex items-center justify-center gap-2 cursor-pointer px-2 py-2 border border-indigo-500 hover:border-indigo-900 transition text-white rounded-full">
            <span className="flex items-center justify-center gap-2 text-indigo-500 hover:text-white">
              <LogOut /> Logout
            </span>
          </button>
          <X onClick={() => setMenuOpen(false)} className="rounded-full w-8 h-8 flex items-center justify-center" />
         </div>
      </div>
    </nav>
  );
};

export default MainHeader;
