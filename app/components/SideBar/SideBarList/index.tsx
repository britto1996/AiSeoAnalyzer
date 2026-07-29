import { BookSearch, ChartNoAxesColumn, ClipboardClock, HomeIcon, Trophy } from "lucide-react";

 const SideBarList = [
    {
        title: "Home",
        icon: <HomeIcon size={24} />,
        path: "/",
    },
    {
        title: "Dashboard",
        icon: <ChartNoAxesColumn size={24} />,
        path: "/dashboard"
    },
    {
        title: "Analyze",
        icon: <BookSearch size={24} />,
        path: "/analyze"
    },
    {
        title: "Rank Tracker",
        icon: <Trophy size={24} />,
        path: "/rank-tracker"
    },
    {
        title: "History",
        icon: <ClipboardClock size={24} />,
        path: "/history"
    }
 ]

 export default SideBarList;