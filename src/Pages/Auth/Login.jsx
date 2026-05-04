import React from "react";
import MyContainer from "../../Custom-Hooks/MyContainer";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

export default function Login() {
  return (
    <MyContainer>
      <div className="min-h-screen">
        <div className=" bgSecondary flexCenter flex-col">
          <img src={logo} alt="" />
          <h1 className="text-2xl font-bold">QurbaniHub</h1>
        </div>
        <div className="w-100 border-2 border-gray-200 text-center mx-auto py-25 mt-15">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p>Enter your credentials to access your account.</p>
          <form action="">
            <fieldset className="fieldset flex flex-col items-center justify-baseline mt-5">
              <div className="flex flex-col items-start justify-center mt-2">
                <label className="label">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="hello@gmail.com  "
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <label className="label">Password</label>
                <input
                  name="email"
                  type="password"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="*****"
                />
              </div>

              <button className="btnPrimary py-2 w-70 mt-2">Login</button>
            </fieldset>
          </form>
          <p className="text-[14px] mt-3">
            if You Are Not Registered,
            <Link to={"/register"} className="textPrimary underline">
              {" "}
              Please Click Here{" "}
            </Link>
          </p>
        </div>
      </div>
    </MyContainer>
  );
}
