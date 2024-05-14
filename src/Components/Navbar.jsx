import React from "react";
import { DiNancy } from "react-icons/di";
import { Link } from "react-router-dom";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const { singleuser } = useSelector((state) => state.singleUser);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
  }


  return (
    <div className="w-12/12 bg-blue-700 flex items-center justify-between px-10 py-4">
      <div>
        <h1 className="flex items-center text-2xl font-semibold text-blue-100">
          <span className="text-4xl">
            <DiNancy />
          </span>
          DevConnections
        </h1>
      </div>

      <div className="flex gap-5 text-blue-200 text-base">
        <Link to="/developer">
        <button>Developers</button>
        </Link>
        {user? (
          <>
          <Link to="/posts">
            <button>Posts</button>
          </Link>
            <button className="flex items-center gap-1">
              <FaUserAlt /> Dashboard
            </button>
            <Link to="/">
            <button className="flex items-center gap-1" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
