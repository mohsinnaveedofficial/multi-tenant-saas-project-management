import React from 'react'
import Tasksummary from '@/components/tasksummary'
import { Input } from '@/components/ui/input'
import { RxCross2 } from "react-icons/rx";


function Profilewpassword() {
    return (
        <div className='m-4'>
            <div className=''>
               
                <div>
                    <div className='flex'>
                        <div className='p-4 w-[65%] grid grid-cols-2 gap-6'>
                            <div>
                                <h1 className='pb-1 font-bold text-blue-950'>
                                    Full Name
                                </h1>
                                <Input className={""} type="text" placeholder="Name" />
                            </div>
                            <div>
                                <h1 className='pb-1 font-bold text-blue-950'>
                                    Job Title
                                </h1>
                                <Input className={""} type="text" placeholder="Job title" />
                            </div>
                            <div>
                                <h1 className='pb-1 font-bold text-blue-950'>
                                    Email
                                </h1>
                                <Input className={""} type="email" placeholder="Email" />
                            </div>
                            <div>
                                <h1 className='pb-1 font-bold text-blue-950'>
                                    Phone Number
                                </h1>
                                <Input className={""} type="tel" placeholder="Phone Number" />
                            </div>
                            <div className=''>
                                <h1 className=' font-bold text-blue-950'>
                                    Bio
                                </h1>
                                <textarea className={"h-[100px] w-[775px] rounded-md block p-2 border border-gray-300 "} type="text" placeholder="Write you bio . . ." />
                            </div>
                        </div>
                        <div className='p-4 w-[35%]'>
                            <div>
                                <h1 className='font-bold pb-3 text-blue-950'>
                                    Task Summary
                                </h1>
                            </div>
                            <div className='pb-6'>
                                <Tasksummary status={"Completed Tasks"}
                                    count={"156"}
                                    texta={"green"} />
                            </div>
                            <div className="pb-6">
                                <Tasksummary status={"Pending Tasks"}
                                    count={"8"}
                                    texta={"orange"} />
                            </div>
                            <div className="pb-6">
                                <Tasksummary status={"Overdue Tasks"}
                                    count={"2"}
                                    texta={"red"} />
                            </div>
                            <div className="pb-6">
                                <Tasksummary status={"Total Projects"}
                                    count={"6"}
                                    texta={"blue"} />
                            </div>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h1 className=' pb-2 text-blue-950 font-bold'>Skills</h1>
                        <div className='flex justify-start gap-2'>
                            <div className='flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm'>
                                <h1 className=' '>UI Design </h1>
                                <h2 className='mt-1'>
                                    <RxCross2 />
                                </h2>
                            </div>
                            <div className='flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm'>
                                <h1 className=' '>UX Research</h1>
                                <h2 className='mt-1'>
                                    <RxCross2 />
                                </h2>
                            </div>
                            <div className='flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm'>
                                <h1 className=' '>Figma  </h1>
                                <h2 className='mt-1'>
                                    <RxCross2 />
                                </h2>
                            </div>
                            <div className='flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm'>
                                <h1 className=' '>Adobe XD</h1>
                                <h2 className='mt-1'>
                                    <RxCross2 />
                                </h2>
                            </div>
                            <div className='flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm'>
                                <h1 className=' '>Prototyping</h1>
                                <h2 className='mt-1'>
                                    <RxCross2 />
                                </h2>
                            </div>
                            <div className='flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm'>
                                <h1 className=' '>User Testing</h1>
                                <h2 className='mt-1'>
                                    <RxCross2 />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 w-[65%]'>
                        <Input type="text" placeholder="Add new skill..." />
                        <div className='pt-5'>
                            <h1 className='font-bold text-black text-[18px] pb-3'>Change Password</h1>
                            <div className=''>
                                <h1 className='py-3 font-bold text-blue-950'>
                                    Current Password
                                </h1>
                                <Input className={"pb-2 w-65%"} type="Password" placeholder="" />
                            </div>
                            <div>
                                <h1 className='py-3 font-bold text-blue-950'>
                                    New Password
                                </h1>
                                <Input className={""} type="Password" placeholder="" />
                            </div>
                            <div>
                                <h1 className='py-3 font-bold text-blue-950'>
                                    Confirm New Password
                                </h1>
                                <Input className={"pb-4"} type="Password" placeholder="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className='p-4 flex justify-start gap-3.5'>
                    <button className='bg-blue-500 text-white rounded-sm py-2 px-3.5 font-bold'>
                        Save Changes
                    </button>
                    <button className='border border-gray-300 text-gray-500 py-2 px-3.5 rounded-sm '>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profilewpassword