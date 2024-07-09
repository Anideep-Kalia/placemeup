import React from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

function UserHeader() {

    const navigate = useNavigate();

    const loggingout=()=>{
        localStorage.removeItem('token-admin');
        navigate(`/admin`);
    }
    return (
    <>
        <div className='flex flex-row justify-between items-center h-[4.5rem]'>
            <div className="flex items-center justify-start pl-10 bg-[#F1F2F7] w-[16%] gap-2 h-full ">
                <div className="rounded-full w-6 h-6 bg-[#FFC727] text-white flex flex-col justify-center text-sm items-center"><p>P</p></div>
                <h1 className="text-[#FFC727] font-semibold text-2xl">PlaceMeUP</h1>
            </div>
            <div className="w-[40%] bg-[#F4F6FC] pr-4 flex shadow rounded-xl gap-2 items-center">
                <input
                    aria-label="Search"
                    required
                    type="text"
                    placeholder="Search ..."
                    className="w-full py-4 px-3  rounded-xl text-gray-700 leading-tight bg-transparent focus:outline-[#FFC727] "
                />
                <IoSearch
                size={20} 
                />
            </div>
            <div className="flex bg-red-600 text-white p-6 pl-8 text-[#FFC727] rounded">admin</div>
            <div className=' bg-[#F1F2F7] rounded-full w-14 flex justify-center items-center h-14 mr-4'>
                <LuLogOut
                size={30}
                onClick={loggingout}
                />
            </div>
        </div>
        </>
    )
}

export default UserHeader
