"use client";

import React, { useState, useEffect } from "react";

import ThemeContext from "@/context/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromLocalStorage: boolean | string | null =
    typeof localStorage !== "undefined" && localStorage.getItem("theme");

  const [theme, setTheme] = useState<boolean>(
    themeFromLocalStorage ? themeFromLocalStorage === "true" : false
  );

  useEffect(() => {
    const storedTheme = themeFromLocalStorage !== null ? themeFromLocalStorage === "true" : null;
    setTheme(storedTheme !== null ? storedTheme : false);
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
