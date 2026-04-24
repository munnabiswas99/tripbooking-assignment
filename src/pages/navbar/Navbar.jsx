import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import Logo from "../../components/Logo";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="navbar px-6 py-2">
        
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow text-black">
              <li><a>Home</a></li>
              <li><a>Tours</a></li>
              <li><a>Hotels</a></li>
              <li><a>Blog</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          <Link>
            <Logo />
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><a>Home</a></li>
            <li><a>Tours</a></li>
            <li><a>Hotels</a></li>
            <li><a>Blog</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end items-center gap-3 text-white">
          <CiSearch />
          <span>Search</span>
          <a className="btn rounded-2xl bg-[#FAB326] border-none text-black">
            SignIn
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
