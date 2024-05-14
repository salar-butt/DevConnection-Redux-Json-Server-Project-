import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSingleuser } from "../Redux/Actions/Action";
import { addUserEducation } from "../Redux/Actions/Action";
import { Link } from "react-router-dom";

const AddEducation = () => {
    const dispatch = useDispatch()
    const {singleuser} = useSelector(state => state.singleUser);
    const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    field: "",
    fromDate: "",
    isCurrentJob: false,
    toDate: "Now",
    studyDescription: "",
  });

  const [isToDate, setToDate] = useState(false);

  useEffect(()=>{
    dispatch(getSingleuser(user.id))
},[])

  useEffect(() => {
    if (formData.isCurrentJob) {
      setToDate(true);
      setFormData({ ...formData, toDate: "" });
    } else {
      setToDate(false);
    }
  }, [formData.isCurrentJob]);

  const handleSubmit = () => {
    if (formData.school && formData.degree) {
      const updateExperience = [...(singleuser.education || []), formData];
      const update = { ...singleuser, education: updateExperience };
      console.log("Form Data:", formData);
      dispatch(addUserEducation(user.id, update));
    } else {
      alert("Job Title and Company are required");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });
  };
  return (
    <div>
      <div className="w-10/12 mx-auto py-5 flex flex-col">
        <h1 className="text-5xl font-semibold text-blue-600">
          Add Your Education
        </h1>
        <h2 className="flex items-center gap-2 py-5 text-2xl text-gray-600">
          <FaCode />  Add School, Bootcamp that you have attended.
        </h2>
        <label htmlFor="school" className="pb-1 ">
          School or Bootcamp :
        </label>
        <input
          type="text"
          id="school"
          name="school"
          value={formData.school}
          onChange={handleInputChange}
          placeholder="* School or Bootcamp"
          className="w-full border-2 border-blue-300 px-2 py-1"
        />
        <label htmlFor="degree" className="pt-5 pb-1">
          Degree Or Certificate :
        </label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={formData.degree}
          onChange={handleInputChange}
          placeholder="* Degree or Certificate"
          className="w-full border-2 border-blue-300 px-2 py-1"
        />
        <label htmlFor="field" className="pt-5 pb-1">
          Field Of Study :
        </label>
        <input
          type="text"
          name="field"
          id="field"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Field Of Study"
          className="w-full border-2 border-blue-300 px-2 py-1"
        />
        <label htmlFor="from-date" className="pt-5 pb-1">
          From Date :
        </label>
        <input
          type="date"
          id="from-date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleInputChange}
          className="w-full border-2 border-blue-300 px-2 py-1"
        />
        <div className="flex gap-2 pt-5">
          <input
            type="checkbox"
            name="isCurrentJob"
            checked={formData.isCurrentJob}
            onChange={handleInputChange}
            className="border-2 border-blue-300 px-2 py-1"
          />
          <h1 className="text-lg">Current Study</h1>
        </div>
        <label htmlFor="to-date" className="pt-5 pb-1">
          To Date :
        </label>
        <input
          type="date"
          id="to-date"
          name="toDate"
          value={formData.toDate}
          className="w-full border-2 border-blue-300 px-2 py-1"
          disabled={isToDate}
          onChange={handleInputChange}
        />
        <textarea
          name="studyDescription"
          cols="30"
          rows="3"
          value={formData.studyDescription}
          placeholder="Education Descripton"
          className=" px-2 border-2 border-blue-300 mt-5"
          onChange={handleInputChange}
        ></textarea>
        <div className="flex gap-5">
            <Link to="/dashboard">
          <button
            className="bg-blue-600 w-fit px-6 py-2 text-white mt-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
            </Link>
          <button className="bg-blue-200 w-fit px-6 py-2 hover:bg-blue-600 hover:text-white mt-5">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEducation;
