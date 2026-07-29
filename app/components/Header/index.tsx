"use client";

import { paths } from "@/app/constants/paths";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push(paths.login);
  };

  return (
    <nav className="h-20">
      <div className="fixed left-0 top-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 border-b border-gray-300 bg-white transition-all">
        <a href="#">
          <Image
            src="/logo/seo_rank_gif.gif"
            alt="Site Name Logo"
            width={64}
            height={64}
            loading="eager"
            className="w-24 h-24"
          />
        </a>
        <div className="flex justify-end">
          <button
            onClick={() => navigateToLogin()}
            className="cursor-pointer px-5 py-1.5 text-sm bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
