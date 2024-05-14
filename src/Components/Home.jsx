import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-12/12 bg-blue-300 flex justify-center items-center flex-col h-[88vh]">
        <h1 className="text-6xl text-white font-semibold tracking-widest">
          DevConnections
        </h1>
        <h1 className="text-2xl text-white tracking-wider pt-5">
          Create developer profile/portfolio, share posts and interact with
          other developers
        </h1>
        <div className="pt-5 flex gap-5">
            <Link to="/signup">
          <button className="bg-blue-500 px-4 py-1.5 text-lg text-center text-blue-100">
            Sign Up
          </button>
            </Link>
            <Link to="/login">
          <button className="bg-white px-4 py-1.5 text-lg text-center text-blue-600">
            Login
          </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
