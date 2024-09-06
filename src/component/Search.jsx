import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Profile from "./Profile";

const Search = () => {
  const [userName, setUserName] = useState("awahabt");
  const handleInput = (e) => {
    let data = e.target.value;
    setUserName(data);
  };

  return (
    <>
      <div className="h-9 rounded flex items-center px-3 bor-gray my-4 text-white">
        <IoSearchOutline />
        <input
          type="Search"
          placeholder="Type to Search"
          className="w-full outline-none text-white px-3 py-1 caret-white bg-[#0a0c10] "
          onChange={handleInput}
        />
      </div>
      <div>
        <Profile  input={userName}/>
      </div>
    </>
  );
};

export default Search;
