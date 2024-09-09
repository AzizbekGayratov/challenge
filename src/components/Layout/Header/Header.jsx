import React from "react";
import Top from "./components/Top";
import Main from "./components/Main";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="z-40 bg-White header_shadow hidden md:block fixed w-full">
        <Top />
        <Main />
      </header>

      <header className="z-40 md:hidden fixed w-full bg-Secondary p-5">
        <div className="flex items-center py-5">
          <button className="text-[#323232]">
            <IoMenu size={18} />
          </button>
          <Link to="/" className="flex-1">
            <div className="flex items-center justify-center">
              <img src="/Logo.svg" alt="logo" />
            </div>
          </Link>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex rounded-lg">
          <input
            type="text"
            placeholder="Maxsulotlarni izlash"
            className="outline-none px-5 w-full bg-White rounded-l-lg border border-Secondary"
          />
          <button className="py-[13px] px-[18px] border border-MainColor bg-MainColor border-none rounded-r-lg text-white">
            <IoSearch size={18} />
          </button>
        </form>
      </header>
    </>
  );
}
