import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getSingleuser } from "../Redux/Actions/Action";
import Navbar from "./Navbar";
import { FaLaptopCode, FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Developer = () => {
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.allUser);
  console.log(allUser, "hiiiiii");

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const handleViewProfile = (id) => {
    console.log(id,"salam");
    dispatch(getSingleuser(id))
  }
  return (
    <div>
      <Navbar />
      <div className=" w-10/12 mx-auto py-5 flex flex-col">
        <h1 className="text-blue-600 text-5xl font-semibold">Developers</h1>
        <p className="flex items-center gap-2 pt-5 text-gray-600 text-2xl">
          <FaLaptopCode /> Browse and Connect with Developers
        </p>

        <div className="flex flex-col gap-5 mt-5">
          {allUser?.length > 0 ? (
            allUser.map((ele, i) => (
              <div className="flex gap-72 bg-blue-100 py-5 px-5">
                <div className="flex gap-8 ">
                  <img
                    src={ele.avatar}
                    alt=""
                    className="w-[240px] h-[240px] rounded-[50%]"
                  />
                  <div className="flex flex-col pt-5">
                    <h1 className="text-2xl font-semibold text-blue-600">
                      {ele.name}
                    </h1>
                    <h1 className="text-gray-600 pt-1">{ele.profile?.profession}</h1>
                    <h1 className="text-gray-600 pt-3">{ele.profile?.company}</h1>
                    <h1 className="text-gray-600 pt-3">{ele.profile?.location}</h1>
                    <Link to="/viewprofile">
                    <button className="mt-3 px-5 py-2 w-[fit-content] bg-blue-600 text-white" onClick={()=>handleViewProfile(ele.id)}>
                      View Profile
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="pt-14">
                  {ele.profile?.skills.map((skill, i) => {
                    return (
                      <h1 className="flex items-center gap-2 text-blue-600">
                        <FaHandPointRight/>
                        {skill}
                      </h1>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-600">No Data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Developer;
