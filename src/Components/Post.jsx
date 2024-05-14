import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector , useDispatch} from "react-redux";
import { addPost ,getSingleuser} from "../Redux/Actions/Action";

const Post = () => {
  const { singleuser } = useSelector((state) => state.singleUser);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch()

  const currentDate = new Date();
  const day = currentDate.getDate().toString();
  const month = (currentDate.getMonth() + 1).toString();
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const [formData, setFormData] = useState({
    userpost: "",
    date: formattedDate,
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  console.log(formData, "post fdata");

  useEffect(()=>{
    dispatch(getSingleuser(user.id))
},[])

  const handleSubmit = () => {
  const updatePost = [...(singleuser.post || []), formData];
  const update = { ...singleuser, post: updatePost };
  dispatch(addPost(user.id, update));
  setFormData({
    userpost: "",
    date: formattedDate,
  });
};

  return (
    <div>
      <Navbar />
      <div className=" w-10/12 mx-auto py-5 flex flex-col">
        <h1 className="text-5xl font-semibold text-blue-600 pb-5">Posts</h1>
        <label htmlFor="post" className="bg-blue-600 py-1 px-2 text-white">
          Say Something...
        </label>
        <textarea
          name="userpost"
          id="post"
          value={formData.userpost}
          cols="30"
          rows="3"
          placeholder="Create a Post"
          className="border-2 border-blue-300 mt-5 px-2 py-2 placeholder:tracking-widest"
          onChange={handleInput}
        ></textarea>
        <button className="bg-blue-600 px-5 py-2 text-white w-[fit-content] mt-5" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Post;
