"use client";

import { Bell, PanelLeft, PanelLeftClose, Plus } from "lucide-react";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SignInButton from "../SignInButton";

const SideBar = ({
  sideMenus,
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  sideMenus: any[];
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPathActive, setIsPathActive] = useState(pathname);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isNotificationHover, setIsNotificationHover] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isSignedIn = () => {
    router.push("/login");
  }

  return (
    <div className="flex-col gap-2 fixed top-0 text-white text-center items-center justify-center m-auto hidden sm:flex">
      <div className="mt-4 ml-4">
        {isDrawerOpen ? (
          <PanelLeftClose
            className="cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          />
        ) : (
          <PanelLeft
            className="cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          />
        )}
      </div>
      <div className="flex flex-col ml-4 items-center justify-center gap-2 mt-4">
        <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-bold p-2 rounded-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Plus size={24} />
          </div>
        </button>
        <div>
          <p className="text-sm font-bold text-white">Create</p>
        </div>
      </div>
      {sideMenus?.map((menu, index) => {
        return (
          <div
            key={index}
            className="flex flex-col ml-2 items-center justify-center gap-2 mt-4"
          >
            <button
              onClick={() => {
                setIsPathActive(menu.path);
                router.push(menu.path);
              }}
              className={`${isPathActive === menu.path ? "bg-gray-700 shadow-lg" : "bg-transparent"} cursor-pointer ${isPathActive !== menu.path && "hover:bg-gray-700"} text-white font-bold px-4 py-2 rounded-l-2xl rounded-r-2xl items-center justify-center`}
            >
              <div className="flex flex-col items-center justify-center">
                {menu.icon}
              </div>
            </button>
            <div>
              <p className="text-xs font-bold text-white">{menu.title}</p>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col h-30">
        <div className="flex flex-col relative mt-auto ml-2 items-center justify-center gap-2">
          <button
            onMouseEnter={() => setIsNotificationHover(true)}
            onMouseLeave={() => setIsNotificationHover(false)}
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`${isNotificationOpen ? "bg-gray-700 shadow-lg" : "bg-transparent"} cursor-pointer ${!isNotificationOpen && "hover:bg-gray-700"} text-white font-bold px-4 py-2 rounded-l-2xl rounded-r-2xl items-center justify-center`}
          >
            <div className="flex flex-col items-center justify-center">
              <Bell size={24} />
            </div>
          </button>
          {isNotificationHover && (
            <div className="bottom-12 ml-2 mr-2 absolute text-white text-xs bg-gray-700 px-2 py-1 rounded-md shadow-lg">
              <p>Notifications</p>
            </div>
          )}
        </div>
        <div className="mt-2">
          {isAuthenticated ? <></> : <SignInButton isSignedIn={isSignedIn} />}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
