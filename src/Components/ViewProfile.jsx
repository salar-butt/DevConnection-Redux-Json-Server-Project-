import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar';
import {FaLocationDot} from "react-icons/fa6"
import {BsQrCodeScan} from "react-icons/bs"
import {TbPoint} from "react-icons/tb"
import { Link } from 'react-router-dom';

const ViewProfile = () => {
    const {singleuser} = useSelector(state => state.singleUser)
    console.log(singleuser,"tayyab");
  return (
    <div>
      <Navbar/>
      <div className=" w-10/12 mx-auto py-5 flex flex-col">
        <Link to="/developer">
        <button className='px-5 py-2 bg-blue-100 w-[fit-content] text-gray-600'>Back to Developers</button>
        </Link>
        <div className='flex flex-col justify-center items-center bg-blue-600 py-10 px-10 mt-5'>
            <img src={singleuser?.avatar} alt=""  className='w-[240px] h-[240px] rounded-[50%]'/>
            <h1 className='text-4xl font-semibold text-white pt-5'>{singleuser?.name}</h1>
            <h1 className='text-xl text-white pt-5'>{singleuser?.profile?.profession} at {singleuser?.profile?.company}</h1>
            <h1 className='flex items-center gap-2 text-xl text-white pt-5'><FaLocationDot/>{singleuser?.profile?.location}</h1>
            <h1 className='text-white text-5xl pt-5'><BsQrCodeScan/></h1>
        </div>

        <div className='flex flex-col justify-center items-center bg-blue-100 py-5 px-5 mt-5'>
            <h1 className='text-2xl font-semibold text-blue-600'>About {singleuser?.name}</h1>
            <h1 className='text-gray-600 pt-2'>{singleuser?.profile?.bio}</h1>
            <hr className='bg-gray-600 w-full h-[2px] my-5' />
            <h1 className='text-2xl font-semibold text-blue-600'>Skill's Set</h1>
            <div className='flex gap-5'>
                {singleuser?.profile?.skills.map((ele,i) => {
                    return(
                        <h1 className='flex items-center gap-1 text-gray-600 text-lg pt-2'><TbPoint/>{ele}</h1>
                    )
                })}
            </div>
        </div>

        <div className='flex gap-5 justify-between mt-5'>
            <div className='w-6/12 px-5 py-5 border-2 border-blue-100'>
                <h1 className='text-2xl font-semibold text-blue-600'>Experience</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    {singleuser?.experience?.map((exp,i)=>{
                        return(
                            <div className='text-gray-600 text-lg bg-blue-100 px-5 py-5'>
                                <h1> <span className='text-gray-600 font-medium'>JobTitle :</span> {exp.jobTitle}</h1>
                                <h1> <span className='text-gray-600 font-medium'>Company :</span> {exp.company}</h1>
                                <h1> <span className='text-gray-600 font-medium'>Location :</span> {exp.location}</h1>
                                <h1> <span className='text-gray-600 font-medium'>Job-Period :</span> {exp.fromDate} / {exp.toDate}</h1>

                            </div>
                        )
                    })}
                </div>

            </div>
            <div className='w-6/12 px-5 py-5 border-2 border-blue-100'>
                <h1 className='text-2xl font-semibold text-blue-600'>Education</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    {singleuser?.education?.map((edu,i)=>{
                        return(
                            <div className='text-gray-600 text-lg bg-blue-100 px-5 py-5'>
                                <h1> <span className='text-gray-600 font-medium'>Institute :</span> {edu.school}</h1>
                                <h1> <span className='text-gray-600 font-medium'>Degree :</span> {edu.degree}</h1>
                                <h1> <span className='text-gray-600 font-medium'>Field of Study :</span> {edu.field}</h1>
                                <h1> <span className='text-gray-600 font-medium'>Study-Period :</span> {edu.fromDate} / {edu.toDate}</h1>

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default ViewProfile
