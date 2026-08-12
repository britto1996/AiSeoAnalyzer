import {
  BookSearch,
  ChartNoAxesColumn,
  ClipboardClock,
  Grid3x3,
  HomeIcon,
  Trophy,
} from "lucide-react";

const HeaderList = [
  {
    _id: "1",
    title: "Home",
    icon: (
      <div className="bg-white hover:bg-linear-to-r hover:from-green-700 hover:to-blue-900 p-3 rounded-full hover:text-white text-indigo-500 cursor-pointer">
        <HomeIcon size={25} />
      </div>
    ),
  },
  {
    _id: "2",
    title: "Dashboard",
    icon: (
      <div className="bg-white p-3 rounded-full hover:bg-linear-to-r hover:from-green-700 hover:to-blue-900 hover:text-white text-indigo-500 cursor-pointer">
        <ChartNoAxesColumn size={25} />
      </div>
    ),
  },
  {
    _id: "3",
    title: "Templates",
    icon: (
      <div className="bg-white hover:bg-linear-to-r hover:from-green-700 hover:to-blue-900 p-3 rounded-full hover:text-white text-indigo-500 cursor-pointer">
        <Grid3x3 size={25} />
      </div>
    ),
  },
  {
    _id: "4",
    title: "Analyze",
    icon: (
      <div className="bg-white hover:bg-linear-to-r hover:from-green-700 hover:to-blue-900 p-3 rounded-full hover:text-white text-indigo-500 cursor-pointer">
        <BookSearch size={25} />
      </div>
    ),
  },
  {
    _id: "5",
    title: "Rank Tracker",
    icon: (
      <div className="bg-white hover:bg-linear-to-r hover:from-green-700 hover:to-blue-900 p-3 rounded-full hover:text-white text-indigo-500 cursor-pointer">
        <Trophy size={25} />
      </div>
    ),
  },
  {
    _id: "6",
    title: "History",
    icon: (
      <div className="bg-white hover:bg-linear-to-r hover:from-green-700 hover:to-blue-900 p-3 rounded-full hover:text-white text-indigo-500 cursor-pointer">
        <ClipboardClock size={25} />
      </div>
    ),
  },
];

export default HeaderList;
