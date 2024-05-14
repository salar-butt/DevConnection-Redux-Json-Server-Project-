import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getSingleuser ,addUserProfile } from "../Redux/Actions/Action";

const EditProfile = () => {
    const dispatch = useDispatch();
    const {singleuser} = useSelector((state) => state.singleUser);
    console.log(singleuser,"tayyab");

    console.log(singleuser,"hiiiiiisingle");
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id,"single user");
    

    useEffect(()=>{
        dispatch(getSingleuser(user.id))
    },[])

  const [showDiv, setShowDiv] = useState(false);
  const [formData, setFormData] = useState({
    profession: "",
    company: "",
    website: "",
    location: "",
    bio: "",
    skills: [],
    linkedin: "",
    facebook: "",
    youtube: "",
    instagram: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "skills") {
      const skillsArray = value.split(",").map((skill) => skill.trim());
      setFormData((prevData) => ({ ...prevData, skills: skillsArray }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleDivSHow = () => {
    setShowDiv(!showDiv);
  };
  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // const emptyFormData = {
    //     profession: "",
    //     company: "",
    //     website: "",
    //     location: "",
    //     bio: "",
    //     skills: [],
    //     linkedin: "",
    //     facebook: "",
    //     youtube: "",
    //     instagram: "",
    //   };
    //   setFormData(emptyFormData)
      const updateData = {
        ...singleuser,
        profile: {
          ...singleuser.profile,
          ...formData,
        },
      };
      console.log(updateData,"update");
      dispatch(addUserProfile(user.id, updateData ))
  };

  return (
    <div>
      <Navbar />
      <div className="w-10/12 mx-auto py-5 flex flex-col">
        <h1 className="text-5xl font-semibold text-blue-600">
          Edit Your Profile
        </h1>
        <h2 className="flex items-center gap-2 py-5 text-2xl">
          <FaUserNinja /> Add some changes to your profile
        </h2>
        <select
          name="profession"
          id="profession"
          className="border-2 border-blue-300 px-2 py-1"
          onChange={handleInputChange}
        >
          <option value="">Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor or Teacher">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="profession" className="text-gray-600 text-xs pb-3">
          Give us an idea of where you are at in your career
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company"
          className="w-full border-2 border-blue-300 px-2 py-1"
          onChange={handleInputChange}
        />
        <label htmlFor="company" className="text-xs text-gray-600 pb-3">
          Could be your own company or one you work for
        </label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="Website"
          className="w-full border-2 border-blue-300 px-2 py-1"
          onChange={handleInputChange}
        />
        <label htmlFor="website" className="text-xs  text-gray-600 pb-3">
          Could be your own or a company website
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          className="w-full border-2 border-blue-300 px-2 py-1"
          onChange={handleInputChange}
        />
        <label htmlFor="location" className="text-xs pb-3 text-gray-600">
          City & state suggested (eg. Boston, MA)
        </label>

        <input
          type="text"
          id="skills"
          name="skills"
          placeholder="Skills"
          className="w-full border-2 border-blue-300 px-2 py-1"
          onChange={handleInputChange}
        />
        <label htmlFor="skills" className="text-xs pb-3 text-gray-600">
          Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
        </label>

        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="3"
          placeholder="A short bio of youself"
          className="border-2 border-blue-300 px-2"
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="bio" className="text-xs pb-3 text-gray-600">
          Tell us a little about yourself
        </label>

        <div className="flex gap-5 items-center pt-3">
          <button
            className="bg-blue-100 hover:bg-blue-600 hover:text-white  px-8 text-center py-1"
            onClick={handleDivSHow}
          >
            Add Social Profile Links
          </button>
          <h1 className="text-gray-600">Optional</h1>
        </div>
        {showDiv && (
          <div className=" flex flex-col gap-5 pt-5">
            <div className="flex gap-5 items-center">
              <h1 className="text-3xl text-blue-600">
                <BsLinkedin />
              </h1>
              <input
                type="text"
                name="linkedin"
                placeholder="Linkedin Link"
                className="border-2 border-blue-300 px-2 w-full py-1 "
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-5 items-center">
              <h1 className="text-3xl text-blue-900">
                <BsFacebook />
              </h1>
              <input
                type="text"
                name="facebook"
                placeholder="Facebook Link"
                className="border-2 border-blue-300 px-2 w-full py-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-5 items-center">
              <h1 className="text-3xl text-red-600">
                <BsYoutube />
              </h1>
              <input
                type="text"
                name="youtube"
                placeholder="Youtube Link"
                className="border-2 border-blue-300 px-2 w-full py-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-5 items-center">
              <h1 className="text-3xl text-pink-600">
                <BsInstagram />
              </h1>
              <input
                type="text"
                name="instagram"
                placeholder="Instagram Link"
                className="border-2 border-blue-300 px-2 w-full py-1"
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        <div className="flex gap-5 pt-5">
            <Link to="/dashboard">
          <button className="bg-blue-600 w-fit px-6 py-2 text-white mt-5" onClick={handleSubmit}>
            Submit
          </button>
            </Link>
          <Link to="/dashboard">
          <button className="bg-blue-100 hover:bg-blue-600 hover:text-white w-fit px-6 py-2 text-black mt-5">
            Go Back
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
