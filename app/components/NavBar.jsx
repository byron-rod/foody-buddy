import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-2 shadow-md">
      <div className="flex gap-7 items-center ml-5 ">
        <Image src="/logo.png" alt="logo" width={50} height={50} priority />
        <h1 className="text-3xl">Foody Buddy</h1>
      </div>
      {/* <div
        className=" bg-gray-100 p-[6px] rounded-md
      w-[50%] gap-3 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent 
        outline-none w-full"
        />
      </div> */}
    </div>
  );
}

export default NavBar;
