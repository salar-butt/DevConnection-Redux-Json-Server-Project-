import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { loginUser } from "../Redux/Actions/Action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.loginUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { email, password } = formData;

    // Check if any field is empty
    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    const user = localStorage.getItem("user");

    if (user !== null) {
      localStorage.removeItem("user");
    }

    dispatch(loginUser(email, password));

    setTimeout(() => {
      checkLoggedUser();
    }, 1000);
  };

  const checkLoggedUser = () => {
    const user = localStorage.getItem("user");

    if (user !== null) {
      navigate("/dashboard");
    } else {
      alert("You can't login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-10/12 mx-auto py-5 flex flex-col">
        <label htmlFor="email" className="pt-5 pb-1">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="w-full border-2 border-blue-300 px-2 py-1"
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className="bg-blue-600 w-fit px-6 py-2 text-white mt-5"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
