import React, { useState } from "react";
import { FaUser, FaLock, FaCheckCircle } from "react-icons/fa";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center p-4 text-gray-800">
      <div className="border rounded-3xl shadow-2xl shadow-gray-200 px-8 py-10 w-full md:w-1/3 bg-white">
        <h2 className="font-poppins text-3xl font-bold  text-left  mb-3">
          Login
        </h2>
        <p className="mb-10 font-poppins text-sm flex">
          Hi, Welcome Back
          <span>
            <img src="hand.gif" alt="" className="w-10 -mt-3 " />
          </span>
        </p>
        {error && <p className="text-red-500 ">{error}</p>}
        <form action="" onSubmit={handleSubmit}>
          <div className="my-6 font-poppins">
            <label htmlFor="email" className="block mb-2 ml-1">
              <FaUser className="inline mr-2 mb-1" /> Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="E.g.user1@email.com"
              className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="my-6 font-poppins relative">
            <label htmlFor="password" className="block  mb-2 ml-1">
              <FaLock className="inline mr-2 mb-1" /> Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password*"
              className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
              className="absolute text-2xl right-4 top-[48px]"
            >
              {showPassword ? <GrFormView /> : <GrFormViewHide />}
            </span>
          </div>
          {/* <div className="my-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <span className="ml-2 text-gray-700 font-poppins text-sm">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="font-poppins text-slate-700 hover:underline text-sm"
            >
              Forgot password?
            </a>
          </div> */}
          <div className="mb-4 mt-14 ">
            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-3 rounded-lg transition-all duration-200 hover:bg-slate-800 flex items-center justify-center font-poppins font-normal"
            >
              <FaCheckCircle className="mr-2" /> Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
