import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { getSingleuser } from "../Redux/Actions/Action";
import { deleteExperience } from "../Redux/Actions/Action";
import {
  FaUserInjured,
  FaIdCard,
  FaUserTie,
  FaUserGraduate,
  FaUserMinus,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { singleuser } = useSelector((state) => state.singleUser);
  console.log(singleuser, "profile");
  console.log(singleuser, "hiiiiiiiiiiiiiiiiiiii");

  // console.log(experience,"exp");

  useEffect(() => {
    dispatch(getSingleuser(user.id));
  }, []);

  const profile = singleuser && singleuser.profile;

  const handleDelete = (i) => {
    console.log(i,"index delete");
    dispatch(deleteExperience(user.id,i))
  } 
  return (
    <div>
      <Navbar />
      <div className=" w-10/12 mx-auto py-5 flex flex-col">
        <h1 className="text-5xl font-semibold text-blue-600">Dashboard</h1>
        <h2 className="flex items-center text-2xl gap-2 pt-5">
          <FaUserInjured />
          Welcome
          <span className="text-blue-600 font-semibold">{user.name}🎉</span>
        </h2>
        {profile ? (
          <div className="details pt-5">
            <div className="flex gap-2">
              <Link to="/editprofile">
                <button className="flex items-center gap-2 bg-blue-100 text-gray-600 hover:bg-blue-600 hover:text-white  px-5 py-1">
                  <FaIdCard className="text-yellow-600 text-xl" />
                  Edit Profile
                </button>
              </Link>
              <Link to="/addexperience">
                <button className="flex items-center gap-2 bg-blue-100 text-gray-600  hover:bg-blue-600 hover:text-white px-5 py-1">
                  <FaUserTie className="text-yellow-600 text-xl" />
                  Add Experience
                </button>
              </Link>
              <Link to="/addeducation">
              <button className="flex items-center gap-2 bg-blue-100 text-gray-600  hover:bg-blue-600 hover:text-white px-5 py-1">
                <FaUserGraduate className="text-yellow-600 text-xl" />
                Add Education
              </button>
              </Link>
            </div>
            <div>
              <h1 className="text-gray-600 text-2xl font-semibold py-5">
                Experience Credentials
              </h1>
              <div className="w-10/12 grid grid-cols-4 gap-2 pb-3">
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold">Company</h1>
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold">Title</h1>
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold">Year</h1>
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold"></h1>
              </div>
              <div className="w-10/12 flex flex-col gap-3">
                {singleuser.experience?.length > 0 ? (
                  singleuser.experience.map((ele, i) => (
                    <>
                    <div key={i} className="grid gap-2 grid-cols-4">
                      <h1>{ele.company}</h1>
                      <h1>{ele.jobTitle}</h1>
                      <h1>{`${ele.fromDate} / ${ele.toDate}`}</h1>
                      <button className="bg-red-600 ml-20 text-white px-2 w-[fit-content] h-[fit-content]" onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                  <hr />
                  </>
                  ))
                  ) : (
                    <p className="text-red-600">No Experience Add</p>
                    )}
              </div>
            </div>
            <div>
              <h1 className="text-gray-600 text-2xl font-semibold py-5">
                Education Credentials
              </h1>
              <div className="w-10/12 grid grid-cols-4 gap-2 pb-3">
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold">Institute</h1>
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold">Degree</h1>
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold">Year</h1>
                <h1 className="bg-blue-100 px-4 py-2 text-gray-600 font-semibold"></h1>
              </div>
              <div className="w-10/12 flex flex-col gap-3">
                {singleuser.education?.length > 0 ? (
                  singleuser.education.map((ele, i) => (
                    <>
                    <div key={i} className="grid gap-2 grid-cols-4">
                      <h1>{ele.school}</h1>
                      <h1>{ele.degree}</h1>
                      <h1>{`${ele.fromDate} / ${ele.toDate}`}</h1>
                      <button className="bg-red-600 ml-20 text-white px-2 w-[fit-content] h-[fit-content]" onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                  <hr />
                  </>
                  ))
                  ) : (
                    <p className="text-red-600">No Experience Add</p>
                    )}
              </div>
            </div>

            <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-1 mt-10">
              <FaUserMinus />
              Delete My Account
            </button>
          </div>
        ) : (
          <div className="create">
            <p className="text-xl pt-2">
              You have not yet setup a profile, please add some info
            </p>
            <Link to="/profile">
              <button className="bg-blue-600 w-fit px-6 py-2 text-white mt-5">
                Create Profile
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
