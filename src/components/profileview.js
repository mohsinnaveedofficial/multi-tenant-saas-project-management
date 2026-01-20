import React from 'react'
import { Input } from './ui/input'
import Tasksummary from './tasksummary'

function Profileview({data}) {
  return (
  <div className='p-4 '>
                <div className='flex md:flex-row flex-col'>
                    <div className='p-4 md:w-[65%] grid sm:grid-cols-2  gap-6'>
                        <div className='flex flex-col gap-1'>
                            <label className='pb-1 font-medium text-blue-950'>
                                Full Name
                            </label>
                            <Input className={""} type="text" value={data.profile.name} readOnly placeholder="Name" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pb-1 font-medium text-blue-950'>
                                Job Title
                            </label>
                            <Input className={""} type="text"value={data.profile.designation || ''} readOnly placeholder="Job title" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pb-1 font-medium text-blue-950'>
                                Email
                            </label>
                            <Input className={""} type="email" value={data.profile.email} readOnly placeholder="Email" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pb-1 font-medium text-blue-950'>
                                Phone Number
                            </label>
                            <Input className={""} type="tel" value={data.profile.phoneNumber || ''} readOnly placeholder="Phone Number" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className=' font-medium text-blue-950'>
                                Bio
                            </label>
                            <textarea readOnly className={"h-[100px] max-w-[760px] min-w-52 rounded-md block p-2 border border-gray-300 "} type="text" value={data.profile.bio || ''} placeholder="Write you bio . . ." />
                        </div>
                    </div>
                    <div className='p-4 md:w-[35%]'>
                        <div>
                            <h1 className='font-bold pb-3 text-blue-950'>
                                Task Summary
                            </h1>
                        </div>
                        <div className='pb-6'>
                            <Tasksummary status={"Completed Tasks"}
                                count={data.completedTasks}
                                texta={"green"} />
                        </div>
                        <div className="pb-6">
                            <Tasksummary status={"Pending Tasks"}
                                count={data.pendingTasks}
                                texta={"orange"} />
                        </div>
                        <div className="pb-6">
                            <Tasksummary status={"Overdue Tasks"}
                                count={data.overdueTasks}
                                texta={"red"} />
                        </div>
                        <div className="pb-6">
                            <Tasksummary status={"Total Projects"}
                                count={data.totalProjects}
                                texta={"blue"} />
                        </div>
                    </div>
                </div>
                <div className='ml-4'>
                    <h1 className=' pb-2 text-blue-950 font-bold'>Skills</h1>
                    <div className='flex justify-start gap-2 flex-wrap'>
                        <h1 className='bg-[#DAE6F4] text-blue-800 whitespace-nowrap rounded-xl px-2.5 py-0.5 text-sm'>UI Design</h1>
                        <h1 className='bg-[#DAE6F4] text-blue-800 whitespace-nowrap rounded-xl px-2.5 py-0.5 text-sm'>UX Research</h1>
                        <h1 className='bg-[#DAE6F4] text-blue-800 whitespace-nowrap rounded-xl px-2.5 py-0.5 text-sm'>Figma</h1>
                        <h1 className='bg-[#DAE6F4] text-blue-800 whitespace-nowrap rounded-xl px-2.5 py-0.5 text-sm'>Adobe XD</h1>
                        <h1 className='bg-[#DAE6F4] text-blue-800 whitespace-nowrap rounded-xl px-2.5 py-0.5 text-sm'>Prototyping</h1>
                        <h1 className='bg-[#DAE6F4] text-blue-800 whitespace-nowrap rounded-xl px-2.5 py-0.5 text-sm'>User Testing</h1>
                    </div>
                </div>
            </div>
  )
}

export default Profileview