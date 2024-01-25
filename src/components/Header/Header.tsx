"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "@/context/themeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="py-6 px-4 border-b border-gray-200 drop-shadow-lg">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="flex items-center w-full md:w-2/3">
          <Link href="/" className="font-bold text-2xl text-tertiary-dark">
            Mestil
          </Link>
          <ul className="flex gap-x-3 items-center ml-5">
            <li className="flex items-center">
              <Link href="/auth">
                <FaUserCircle className="text-xl" />
              </Link>
            </li>
            <li className="flex items-center">
              {theme ? (
                <MdOutlineLightMode
                  onClick={() => {
                    setTheme(false);
                    localStorage.removeItem("theme");
                  }}
                  className="cursor-pointer text-xl"
                />
              ) : (
                <MdDarkMode
                  onClick={() => {
                    setTheme(true);
                    localStorage.setItem("theme", "true");
                  }}
                  className="cursor-pointer text-xl"
                />
              )}
            </li>
          </ul>
        </div>
        <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 md:mt-0">
          <li className="hover:opacity-80 transition-opacity duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:opacity-80 transition-opacity duration-300">
            <Link href="/rooms">Rooms</Link>
          </li>
          <li className="hover:opacity-80 transition-opacity duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
