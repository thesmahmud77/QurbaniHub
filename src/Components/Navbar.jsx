import React from "react";
import MyContainer from "../Custom-Hooks/MyContainer";
import navpic from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-red-500 grid grid-cols-12 items-center text-center">
      <div className="px-[50px] py-[10px] flexCenter gap-2 col-span-3">
        <img src={navpic} alt="" />
        <h1 className="font-bold text-2xl">QurbaniHub</h1>
      </div>
      <div className="col-span-6 flexCenter">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px]"
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/animals"}
          className={({ isActive }) =>
            isActive
              ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px]"
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
          }
        >
          Animals
        </NavLink>
      </div>
      <div className="col-span-3 flexCenter">
        <NavLink
          to={"/login"}
          className={" font-semibold px-5 py-2 rounded-[5px]"}
        >
          Login
        </NavLink>
        <NavLink
          to={"/register"}
          className={" font-semibold px-5 py-2 rounded-[5px]"}
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
