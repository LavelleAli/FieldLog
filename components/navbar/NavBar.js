import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-full p-2 gap-4   mb-10">
      <ul className="flex items-end gap-8">
        <li className="">
          <Link href={"/"}>Home</Link>
        </li>
        <li>Login</li>
        <li className="home">
          <Link href={"/LogBook"}>Log Book</Link>
        </li>
      </ul>

      <div className="w-100 flex justify-center ">
        <label htmlFor="" className="flex gap-2">
          Search:
          <input type="text" placeholder="search" className="text-center border rounded-md text-muted" />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
