"use client";

import { Trophy } from "lucide-react";
import SeoRankList from "../SeoRankList";
import { useState } from "react";
import RankList from "../SeoRankList/RankList";

const Pricing = () => {
  const [seeMore, setSeeMore] = useState({
    prev: 0,
    next: 5,
  });
  return (
    <div className="flex-col gap-2 mt-4 ml-28 fixed top-0 hidden sm:flex">
      <span className="text-2xl font-bold text-center">
        SEO <span className="text-2xl font-medium">RANKING</span>
      </span>
      <div className="mt-4">
        <button className="bg-white cursor-pointer hover:bg-amber-50 ml-10 text-gray-800 px-4 py-2 rounded-l-2xl justify-center items-center rounded-r-2xl text-md flex gap-2">
          <Trophy size={15} className="text-amber-500" />
          <span className="font-medium">Your Plan</span>
        </button>
      </div>
      <div className="mt-10 text-start flex justify-start items-start">
        <SeoRankList seeMore={seeMore} />
      </div>
      {RankList.length > seeMore.next && (
        <div className="flex justify-center relative mt-auto">
          <button
            className="text-blue-500 font-bold hover:bg-gray-800 cursor-pointer rounded-l-2xl rounded-r-2xl px-4 py-2 m-2"
            onClick={() =>
              setSeeMore({ prev: seeMore.prev, next: seeMore.next + 5 })
            }
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Pricing;
