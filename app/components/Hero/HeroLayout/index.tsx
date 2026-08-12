"use client";

import { useState } from "react";
import HeroLayOutTitle from "../HeroLayoutTitle";
import Capsules from "../Capsules";
import { GridIcon, HomeIcon } from "lucide-react";
import HeroSearchLayout from "../HeroSearchLayout";
import GridTemplate from "../../GridTemplate";
import HeaderList from "../../Header/HeaderList";
import RecentList from "../../RecentList";
import RankList from "../../SeoRankList/RankList";

const HeroLayOut = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const [isActive, setIsActive] = useState({
    home: true,
    templates: false,
  });

  const [seeMore, setSeeMore] = useState({
    prev: 0,
    next: 5,
  });

  const [searchInput, setSearchInput] = useState("");

  const HeroCapsules = [
    {
      _id: 1,
      title: "Home",
      icon: <HomeIcon size={16} />,
    },
    {
      _id: 2,
      title: "Templates",
      icon: <GridIcon size={16} />,
    },
  ];

  return (
    <div className={`${isDrawerOpen ? "lg:ml-96" : "lg:ml-25"} bg-linear-to-r min-h-screen from-green-700 to-blue-900 lg:mt-2 relative sm:ml-0 sm:mt-0 p-2 rounded-lg lg:mr-2 sm:mr-0`}>
      <HeroLayOutTitle question="What will you analyze today ?" />
      <div className="hidden sm:hidden md:hidden lg:flex justify-center">
        <Capsules
          setIsActive={setIsActive}
          isActive={isActive}
          capsuleList={HeroCapsules}
        />
      </div>
      <HeroSearchLayout
        placeholder="Enter website URL (e.g., https://www.example.com)"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="mt-4 max-w-6xl mx-auto">
      <GridTemplate list={HeaderList} />
      </div>
      <div className={`mt-8 flex flex-col max-w-[72%] mx-auto relative`}>
        <p className="font-medium text-white text-2xl">Recents</p>
        <div className="mt-2">
          <RecentList isDrawerOpen={isDrawerOpen} setSeeMore={setSeeMore} seeMore={seeMore} />
        </div>
        {RankList.length > seeMore.next && (
        <div className="flex justify-end relative mt-auto">
          <button
            className="text-yellow-500 font-bold hover:bg-gray-800 cursor-pointer rounded-l-2xl rounded-r-2xl px-4 py-2 m-2"
            onClick={() =>
              setSeeMore({ prev: seeMore.prev, next: seeMore.next + 5 })
            }
          >
            See More
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default HeroLayOut;
