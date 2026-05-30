import React from 'react'

interface SearchBoxProps {
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    buttonTxt?: string;
}

const SearchBox = ({onSubmitHandler, input, setInput, placeholder, buttonTxt}: SearchBoxProps) => {
  return (
    <form onSubmit={onSubmitHandler} className="w-full flex justify-center group">
        <label className="border border-gray-400 rounded-md p-1 flex items-center w-full max-w-md">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="pl-2 flex-1 outline-none"
            />
            <button className="bg-indigo-600 text-white p-3 px-6 rounded-md cursor-pointer">
                {buttonTxt}
            </button>
        </label>
    </form>
  )
}

export default SearchBox