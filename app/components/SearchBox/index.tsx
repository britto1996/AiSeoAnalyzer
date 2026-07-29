import { ArrowRight } from "lucide-react";
import React from "react";

interface SearchBoxProps {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  buttonTxt?: string;
  icon?: React.ReactNode;
}

const SearchBox = ({
  onSubmitHandler,
  input,
  setInput,
  placeholder,
  buttonTxt,
  icon,
}: SearchBoxProps) => {
  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full flex justify-center group"
    >
      <label className="border border-gray-400 rounded-full p-2 flex items-center w-full max-w-lg transition-colors group-focus-within:border-indigo-600">
        {icon}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="pl-2 flex-1 outline-none"
        />
        <button className="bg-indigo-600 text-white p-3 px-6 rounded-full cursor-pointer flex items-center hover:bg-indigo-700 transition">
          {buttonTxt} <ArrowRight size={20} className="ml-2" />
        </button>
      </label>
    </form>
  );
};

export default SearchBox;
