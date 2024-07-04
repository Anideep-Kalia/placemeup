import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import UserHeader from '../../components/UserHeader'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import LoginStreak from '../../components/LoginStreak';

function UserDashboardPage() {
    return (
        <>
            <UserHeader />
            <div className="flex items-center justify-start">
                <div className="sticky top-[5rem] w-[16%]">
                    <Sidebar active={1} />
                </div>
                <div className="w-[84%] gap-4 h-[90vh] relative flex flex-col justify-center items-center">
                    <div className="w-full">
                        <div className="flex flex-row justify-center items-center w-[100%]">
                            <LoginStreak/>
                        </div>
                    </div>


                    <div className="px-4 w-full h-[46vh]">
                        <div class="relative shadow-xl rounded-xl overflow-x-auto overflow-y-auto h-full w-full ">
                            <table class="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 ">
                                <caption class="px-5 py-3 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                                    Recently Applied
                                </caption>
                                <thead class="text-xs text-gray-700 uppercase bg-[#FAFAFA]">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Company Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Role
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Duration
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b font-medium text-[#737B7B] ">
                                        <td  class="px-6 py-3   whitespace-nowrap ">
                                            Microsoft
                                        </td>
                                        <td class="px-6 py-3">
                                            Software Developer
                                        </td>
                                        <td class="px-6 py-3">
                                            Full-Time
                                        </td>
                                        <td class="px-6 py-3">
                                            <div className="flex items-center justify-start gap-2">
                                                <button>
                                                    <FaRegEdit
                                                    size={30}
                                                    className='text-[#FFC727] border rounded-lg p-1'
                                                    />
                                                </button>
                                                <button>
                                                    <RiDeleteBinLine
                                                    size={30}
                                                    className='text-[#F26E6E] border rounded-lg p-1 '
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 item-center">
                                            <div className="text-[#FFC727] bg-[#fbfbf5] w-[55%] text-center py-3 rounded-lg">Applied</div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b font-medium text-[#737B7B] ">
                                        <td class="px-6 py-3 whitespace-nowrap ">
                                            Cisco
                                        </td>
                                        <td class="px-6 py-3">
                                            SDE Intern
                                        </td>
                                        <td class="px-6 py-3">
                                            3 months
                                        </td>
                                        <td class="px-6 py-3">
                                            <div className="flex items-center justify-start gap-2">
                                                <button>
                                                    <FaRegEdit
                                                    size={30}
                                                    className='text-[#FFC727] border rounded-lg p-1'
                                                    />
                                                </button>
                                                <button>
                                                    <RiDeleteBinLine
                                                    size={30}
                                                    className='text-[#F26E6E] border rounded-lg p-1 '
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 item-center">
                                            <div className="text-[#FFC727] bg-[#fbfbf5] w-[55%] text-center py-3 rounded-lg">Applied</div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b font-medium text-[#737B7B]">
                                        <td  class="px-6 py-3  whitespace-nowrap ">
                                            Salesforce
                                        </td>
                                        <td class="px-6 py-3">
                                            Web Developer Intern
                                        </td>
                                        <td class="px-6 py-3">
                                            6 months
                                        </td>
                                        <td class="px-6 py-3">
                                            <div className="flex items-center justify-start gap-2">
                                                <button>
                                                    <FaRegEdit
                                                    size={30}
                                                    className='text-[#FFC727] border rounded-lg p-1'
                                                    />
                                                </button>
                                                <button>
                                                    <RiDeleteBinLine
                                                    size={30}
                                                    className='text-[#F26E6E] border rounded-lg p-1 '
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 item-center">
                                            <div className="text-[#FFC727] bg-[#fbfbf5] w-[55%] text-center py-3 rounded-lg">Applied</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default UserDashboardPage
