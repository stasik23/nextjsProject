'use client'
import Link from "next/link";
import React from "react";

const Navbar = () => {

  return (
    <header className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link className="text-lg text-gray-400 hover:text-gray-500" href="/">
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            
            <Link className="text-lg text-blue-600 font-bold" href="/aboutus">
              About Us
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-lg text-gray-400 hover:text-gray-500" href="/product">
              Products
            </Link>
          </li>
        </ul>
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-lg text-gray-900 font-bold rounded-xl transition duration-200"
          href="login"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-lg text-white font-bold rounded-xl transition duration-200"
          href="register"
        >
          Sign up
        </Link>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg className="h-12" viewBox="0 0 10240 10240">
                <path d="M8284 9162 ..." />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
