import React, { use, useContext } from "react";
import navpic from "../assets/logo.png";
import { Link, Navigate, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Logout Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        SetError(errorCode);
      });
  };

  return (
    <div className=" grid grid-cols-12 items-center text-center">
      <Link
        className="px-[50px] py-[10px] flexCenter gap-2 col-span-3"
        to={"/"}
      >
        <img className="w-10" src={navpic} alt="" />
        <h1 className="font-bold text-2xl">QurbaniHub</h1>
      </Link>
      <div className="col-span-6 flexCenter">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold px-5 py-2 text-[18px] font-bold underline decoration-wavy "
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/animals"}
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold px-5 py-2 text-[18px] font-bold underline decoration-wavy "
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
          }
        >
          Animals
        </NavLink>
      </div>
      <div className="col-span-3 flexCenter">
        {user ? (
          <div>
            <button
              className={
                " font-semibold px-5 py-2 rounded-[5px] border-2 border-gray-300"
              }
              onClick={() => handleLogout()}
            >
              Logout
            </button>
            <NavLink
              to={"/profile"}
              className={" font-semibold px-5 py-2 rounded-[5px] bgPrimary"}
            >
              Profile
            </NavLink>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={" font-semibold px-5 py-2 rounded-[5px] bgPrimary"}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
