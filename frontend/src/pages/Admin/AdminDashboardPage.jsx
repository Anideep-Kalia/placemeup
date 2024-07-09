import React, { useEffect } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import UserHeader from '../../components/Admin/Header'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_COMPANIES_LIST } from '../../gqloperations/queries'

function UserDashboardPage() {

    const { loading, error, data } = useQuery(GET_COMPANIES_LIST)
    const getCompaniesList = data ? data.getCompaniesList : [];

    return (
        <>
            <UserHeader />
            <div className="flex items-center justify-start">
                <div className="sticky top-[5rem] w-[16%]">
                    <Sidebar active={1} />
                </div>
                <div className="w-[84%] h-[90vh] relative flex flex-col items-center">

                    <div className="px-4 w-full h-[46vh]">
                        <div class="relative shadow-xl rounded-xl overflow-x-auto overflow-y-auto h-full w-full ">
                            <table class="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 ">
                                <caption class="px-5 py-3 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                                    Recent
                                    <button class="bg-yellow-400 hover:bg-yellow-700 mx-10 text-white font-bold py-2 px-4 rounded-full">
                                        Add opportunity
                                    </button>
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
                                            Time Left
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
                                    {getCompaniesList.map((it) => (
                                        <tr class="bg-white border-b font-medium text-[#737B7B] ">
                                            <td class="px-6 py-3   whitespace-nowrap ">
                                                {it.name}
                                            </td>
                                            <td class="px-6 py-3">
                                                {it.role}
                                            </td>
                                            <td class="px-11 items-center justify-center py-3">
                                                {it.expire}
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
                                    ))}
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
