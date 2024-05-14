import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaUserNinja } from "react-icons/fa";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { postUserData } from "../Redux/Actions/Action";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();

  const [developerData, setDeveloperData] = useState({
    name: "",
    email: "",
    username: "",
    avatar: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeveloperData({
      ...developerData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(postUserData(developerData));
    setDeveloperData({
      name: "",
      email: "",
      username: "",
      avatar: "",
      password: "",
      confirmPassword: ""
    });
    console.log(developerData, "hiiiiii");
  };

  return (
    <div>
      <Navbar />
      <div className="w-10/12 mx-auto py-5 flex flex-col">
        <h1 className="text-5xl font-semibold text-blue-600">Sign Up</h1>
        <h2 className="flex items-center gap-2 py-5 text-2xl">
          <FaUserNinja /> Create Your Account
        </h2>
        <label htmlFor="name" className="pb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="w-full border-2 border-blue-300 px-2 py-1"
          value={developerData.name}
          onChange={handleChange}
        />
        <label htmlFor="email" className="pt-5 pb-1">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="w-full border-2 border-blue-300 px-2 py-1"
          value={developerData.email}
          onChange={handleChange}
        />
        <label htmlFor="username" className="pt-5 pb-1">
          Github User Name:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Github Username (Optional)"
          className="w-full border-2 border-blue-300 px-2 py-1"
          value={developerData.username}
          onChange={handleChange}
        />
        <label htmlFor="avatar" className="pt-5 pb-1">
          Picture Link:
        </label>
        <input
          type="text"
          id="avatar"
          name="avatar"
          placeholder="Enter Your Profile Picture Link"
          className="w-full border-2 border-blue-300 px-2 py-1"
          value={developerData.avatar}
          onChange={handleChange}
        />
        <label htmlFor="password" className="pt-5 pb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full border-2 border-blue-300 px-2 py-1"
          value={developerData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full border-2 border-blue-300 px-2 py-1 mt-5"
          value={developerData.confirmPassword}
          onChange={handleChange}
        />
        <Link to="/login">
        <button
          className="bg-blue-600 w-fit px-6 py-2 text-white mt-5"
          onClick={handleSubmit}
        >
          Register
        </button>
        </Link>
        <h1 className="text-lg pt-3">
          Already Have an Account?
          <Link to="/login">
            <span className="text-blue-600">Sign In</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
