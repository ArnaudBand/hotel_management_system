"use client";

import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultInput = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultInput);
  const inputStyles =
    "border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm text-black dark:text-white dark:bg-gray-800 focus:outline-none focus:border-blue-500";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            <FcGoogle className="text-4xl ml-3 cursor-pointer text-black dark:text-white" />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Doe John"
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="name@.email.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={6}
            required
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-600 underline">Login</button>
      </div>
    </section>
  );
};

export default Auth;
