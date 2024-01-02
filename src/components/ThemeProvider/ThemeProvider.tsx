"use client";

import React, { useState, useEffect } from "react";

import ThemeContext from "@/context/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromLocalStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")!)
      : false;

  const [theme, setTheme] = useState<boolean>(themeFromLocalStorage);

  const [renderTheme, setRenderTheme] = useState<boolean>(false);

  useEffect(() => {
    setRenderTheme(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1e1e1e]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
