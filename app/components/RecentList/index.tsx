import React from "react";
import RankList from "../SeoRankList/RankList";
import { Trash } from "lucide-react";

const RecentList = ({
  seeMore,
  setSeeMore,
  isDrawerOpen,
}: {
  seeMore: { prev: number; next: number };
  setSeeMore: React.Dispatch<
    React.SetStateAction<{ prev: number; next: number }>
  >;
  isDrawerOpen: boolean;
}) => {
  return (
    <div className={`${isDrawerOpen ? "grid grid-cols-5 gap-5" : "grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4"}`}>
      {RankList?.slice(seeMore.prev, seeMore.next)?.map((rank) => {
        return (
          <div
            key={rank?._id}
            className="bg-amber-50 hover:shadow-lg hover:border-amber-600 hover:cursor-pointer hover:border-l-4 rounded-md"
          >
            <div className="flex flex-col gap-2 bg-linear-to-r from-indigo-500 to-yellow-700 px-4 py-2">
              <p className="text-sm text-yellow-500 text-center font-bold">
                Rank Score
              </p>
              <p className="text-2xl text-yellow-500 text-center font-bold">
                {rank?.score}%
              </p>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm text-black font-medium text-nowrap truncate w-28 text-ellipsis m-2">
                {rank?.title}
              </p>
              <span className="relative ml-4 text-red-800 hover:text-red-950 mr-2">
                <Trash size={16} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentList;
