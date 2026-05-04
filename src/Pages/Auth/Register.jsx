import React, { use, useContext } from "react";
import MyContainer from "../../Custom-Hooks/MyContainer";
import { Link, Navigate } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

export default function Register() {
  const { registerUser, SetUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        SetUser(user);
        Swal.fire({
          title: "Register SuccessFully!",
          icon: "success",
          draggable: true,
        });
        Navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        SetError(errorCode);
      });
  };
  return (
    <MyContainer>
      <div className="min-h-screen">
        <div className=" flexCenter flex-col mt-30">
          <img src={logo} alt="" />
          <h1 className="text-2xl font-bold">QurbaniHub</h1>
        </div>
        <div className="w-100 border-2 border-gray-200 text-center mx-auto py-25 mt-5">
          <h1 className="text-2xl font-bold">Create Your Account</h1>
          <p>Join QurbaniHub to find your perfect animal.</p>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset flex flex-col items-center justify-baseline mt-5">
              <div className=" Name flex flex-col items-start justify-center mt-2">
                <label className="label">Full Name</label>
                <input
                  name="name"
                  type="text"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className=" Email flex flex-col items-start justify-center mt-2">
                <label className="label">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="hello@gmail.com  "
                />
              </div>
              <div className=" Photo-Url flex flex-col items-start justify-center mt-2">
                <label className="label">photo Url</label>
                <input
                  name="name"
                  type="text"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="https://example.com/your-name"
                />
              </div>
              <div className=" Password flex flex-col items-start justify-center mt-3">
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2 cursor-pointer"
                  placeholder="*****"
                />
              </div>
              <button
                type="submit"
                className="btnPrimary py-2 w-70 mt-2 cursor-pointer"
              >
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-[14px] mt-3">
            if You Are Not Registered,
            <Link
              to={"/login"}
              className="textPrimary underline cursor-pointer"
            >
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </MyContainer>
  );
}
