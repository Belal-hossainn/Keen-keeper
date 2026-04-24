import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../assets/logo.png";
import { RiTimeLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-[#244D3F] text-white" : ""}`
          }
        > <TiHomeOutline />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-[#244D3F] text-white" : ""}`
          }
          to={"/timeline"}
        >
          <RiTimeLine />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-[#244D3F] text-white" : ""}`
          }
          to={"/stats"}
        > <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;