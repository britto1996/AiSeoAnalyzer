import React, { useState } from 'react'
import RankList from './RankList'
import { Trash } from 'lucide-react';

const SeoRankList = ({ seeMore, setSeeMore }: { seeMore: { prev: number; next: number }; setSeeMore: React.Dispatch<React.SetStateAction<{ prev: number; next: number }>> }) => {
  return (
    <div className="text-amber-50 hidden flex-col sm:flex overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-sky-100 h-[calc(100vh-250px)]">
        <span className="font-bold text-sm">Recent Rankings</span>
        <div className="text-nowrap text-ellipsis mt-2">
            {RankList?.slice(seeMore.prev, seeMore.next)?.map((rank) => {
                return (
                    <div key={rank?._id} className="flex-col flex cursor-pointer text-ellipsis text-nowrap">
                        <span className="flex gap-2 text-ellipsis text-nowrap">
                            <button className="flex cursor-pointer justify-between items-center hover:bg-linear-to-r hover:from-indigo-500 hover:to-yellow-700 rounded-l-2xl rounded-r-2xl w-full p-2 mr-2">
                                <span className="bg-linear-to-r from-indigo-500 to-yellow-700 mr-2 rounded-full px-4 py-2 text-xs text-white">
                                    {rank?.score}%
                                </span>
                                <span className="text-xs text-white">{rank?.title.length > 16 ? rank?.title.slice(0, 16) + "..." : rank?.title}</span>
                                <span className="relative ml-4 text-red-800 hover:text-red-950"><Trash size={16} /></span>
                            </button>
                        </span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SeoRankList