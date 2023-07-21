"use client";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchFormProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};
export default function SearchForm(props: SearchFormProps): ReactElement {
  const { searchValue, setSearchValue } = props;
  return (
    <div className="flex justify-center items-center rounded-full drop-shadow-xl bg-gray-200 px-4 border focus:border-green-700">
      <input
        value={searchValue}
        className="grow rounded-full p-2 outline-none bg-inherit"
        placeholder="Search a movie..."
        maxLength={30}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FaSearch color="gray" className="hover:fill-blue-700" />
    </div>
  );
}
