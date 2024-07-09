import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup, HiOutlineViewGridAdd } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting, AiOutlineUserAdd, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
import { TbHelpSquareFilled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";

function Sidebar({active}) {
  return (
    <div className="w-[100%] h-[90vh] bg-[#F1F2F7] pl-10  flex flex-col  items-center  shadow-sm  top-0 left-0 z-5">
    {/* single item */}
    <div className="w-full flex items-center justify-start mt-10">
    <h3 className='text-lg font-normal tracking-wider  text-[#A6ABC8]'>MENU</h3>
    </div>
    
    <div className="w-full " >
      <Link to="/admin-dashboard" className="w-full flex items-center justify-start py-4 ">
        <RxDashboard
          size={20}
          color={`${active === 1 ? "#FFC727" : "#A6ABC8"}`}
        />
        <h5
          className={`hidden md:block pl-2 text-[16px] font-[400] ${active === 1 ? "text-[#FFC727]" : "text-[#A6ABC8]"
            }`}
          
        >
          Dashboard
        </h5>
      </Link>
    </div>

    <div className="w-full ">
      <Link to="/admin-opportunity" className="w-full flex items-center justify-start py-4">
        <MdOutlineWork
          size={20}
          color={`${active === 2 ? "#FFC727" : "#A6ABC8"}`}
        />
        <h5
          className={`hidden md:block pl-2 text-[16px] font-[400] ${active === 2 ? "text-[#FFC727]" : "text-[#A6ABC8]"
            }`}
        >
          Opportunity
        </h5>
      </Link>
    </div>

    <div className="w-full">
      <Link to="/admin-applications" className="w-full flex items-center justify-start py-4">
        <MdOutlineWorkHistory
          size={20}
          color={`${active === 3 ? "#FFC727" : "#A6ABC8"}`}
        />
        <h5
          className={`hidden md:block pl-2 text-[16px] font-[400] ${active === 3 ? "text-[#FFC727]" : "text-[#A6ABC8]"
            }`}
        >
          Applications
        </h5>
      </Link>
    </div>
<div className="w-full flex items-center justify-start mt-24">
<h3 className='text-lg font-normal  text-[#A6ABC8] tracking-wider'>OTHERS</h3>
</div>
    <div className="w-full">
      <Link
        to="/profile"
        className="w-full flex items-center justify-start py-4"
      >
        <AiOutlineSetting
          size={20}
          color={`${active === 8 ? "#FFC727" : "#A6ABC8"}`}
        />
        <h5
          className={`hidden md:block pl-2 text-[16px] font-[400] ${active === 8 ? "text-[#FFC727]" : "text-[#A6ABC8]"
            }`}
        >
          Settings
        </h5>
      </Link>
    </div>

    <div className="w-full">
      <Link
        to="/admin-update-password"
        className="w-full flex items-center justify-start py-4"
      >
        <IoPerson
          size={20}
          color={`${active === 5 ? "#FFC727" : "#A6ABC8"}`}
        />
        <h5
          className={`hidden md:block pl-2 text-[16px] font-[400] ${active === 5 ? "text-[#FFC727]" : "text-[#A6ABC8]"
            }`}
        >
        Account
        </h5>
      </Link>
    </div>


    <div className="w-full ">
      <Link to="/admin-user" className="w-full flex items-center justify-start py-4">
        <TbHelpSquareFilled
          size={20}
          color={`${active === 4 ? "#FFC727" : "#A6ABC8"}`}
        />
        <h5
          className={`hidden md:block pl-2 text-[16px] font-[400] ${active === 4 ? "text-[#FFC727]" : "text-[#A6ABC8]"
            }`}
        >
          Help
        </h5>
      </Link>
    </div>

  </div>
  )
}

export default Sidebar
