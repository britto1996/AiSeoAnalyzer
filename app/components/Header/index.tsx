"use client";

import { paths } from "@/app/constants/paths";
import { useApp } from "@/app/context/AppContext";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, loading} = useApp();

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  console.log(user, loading);

  return (
    <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 border-b border-white/25 w-full">
      <a href="#">
        <Image
          unoptimized
          src="/logo/seo_rank_gif.gif"
          alt="Site Name Logo"
          width={157}
          height={157}
          loading="eager"
        />
      </a>
      <ul
        id="menu"
        className={`max-md:absolute max-md:h-full max-md:z-50 max-md:w-full max-md:top-0 transition-all duration-300 max-md:backdrop-blur max-md:bg-white/70 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium ${isMenuOpen ? "max-md:left-0" : "max-md:-left-full"}`}
      >
        <li onClick={closeNavbar} className="hover:text-slate-500">
          <a href={user !== null ? paths.dashboard : paths.login}>Dashboard</a>
        </li>
        <li onClick={closeNavbar} className="hover:text-slate-500">
          <a href="#">Analyze</a>
        </li>
        <li onClick={closeNavbar} className="hover:text-slate-500">
          <a href="#">Rank Tracker</a>
        </li>
        <li onClick={closeNavbar} className="hover:text-slate-500">
          <a href="#">History</a>
        </li>

        <button
          id="close-menu"
          onClick={closeNavbar}
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </ul>

      <button
        id="open-menu"
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden"
      >
        <svg
          className="size-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <button className="max-md:hidden px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full">
        Contact us
      </button>
    </nav>
  );
};

export default Header;
