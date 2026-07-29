import { SearchIcon } from "lucide-react";

const HeroSearchLayout = ({
  placeholder,
  searchInput,
  setSearchInput,
}: {
  placeholder: string;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="mt-4 max-w-6xl border-4 border-green-200 bg-black text-white flex justify-center m-auto rounded-l-2xl rounded-r-2xl">
      <div className="flex items-center gap-2 w-full px-4 py-2">
        <SearchIcon size={25} />
        <input
          type="text"
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full rounded border-none outline-none px-2 py-2"
        />
        <div className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 relative cursor-pointer rounded-l-2xl rounded-r-2xl">
          <span>Analyze</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchLayout;
