"use client";

import { useState } from "react";
import HeroLayOut from "./components/Hero/HeroLayout";
import SideBar from "./components/SideBar";
import { AppProvider } from "./context/AppContext";
import SideBarList from "./components/SideBar/SideBarList";
import Pricing from "./components/Pricing";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sideMenus] = useState(SideBarList)
  return (
    <AppProvider>
      <section className="min-h-screen bg-indigo-900">
        <SideBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} sideMenus={sideMenus} />
        {isDrawerOpen && (
          <Pricing />
        )}
        <HeroLayOut isDrawerOpen={isDrawerOpen} />
      </section>
    </AppProvider>  
  );
}
