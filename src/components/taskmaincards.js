import React from 'react'
import Updatestatus from './updatestatus';

function Taskmaincards({ title, status, description, projectname, date, progress, taskstatusbg, statuscompletion, taskstatuscolor }) {
    const statusmain = {
        High: { text: "text-red-500", bg: "bg-red-100" },
        Medium: { text: "text-orange-500", bg: "bg-orange-100" },
        Low: { text: "text-green-500", bg: "bg-green-100" },
    }
    const selectedStatusColor = statusmain[status] || statusmain.Medium;
    return (
        <div className='rounded-2xl border bg-white border-gray-200 shadow p-6'>
            <div className='flex justify-between'>
                <h1 className='text-black font-bold'>
                    {title}
                </h1>
                <h1 className={`rounded-2xl text-sm font-medium px-1.5 py-0.5 ${selectedStatusColor.text} ${selectedStatusColor.bg}`}>
                    {status}
                </h1>
            </div>
            <div className='pt-2 pb-5  '>
                <p className='text-sm text-gray-500 '>
                    {description}</p>
            </div>
            <div className='flex justify-between pt-5'>
                <h1 className='text-sm text-gray-500'>Project:</h1>
                <h1 className='text-sm text-black font-semibold'>{projectname}</h1>
            </div>
            <div className='flex justify-between pt-2'>
                <h1 className='text-sm text-gray-500'>Due:</h1>
                <h1 className='text-sm text-black font-semibold'>{date}</h1>
            </div>
            <div className='flex justify-between pt-2'>
                <h1 className='text-gray-500 text-sm mt-2.5'>
                    Progress
                </h1>
                <h1 className='text-black text-sm font-semibold mt-2.5'>
                    {progress}
                </h1>
            </div>
            <div className='w-full mt-2'>
                <div className='w-[100%] h-2 bg-gray-200 rounded-2xl'>
                    <div className='h-2 rounded-2xl bg-blue-600' style={{ width: progress }}>
                    </div>
                </div>
            </div>
            <div className='pt-4 flex justify-between items-center h-[65px]'>
                <div className='flex items-center-center'>
                    <div className=" font-medium rounded-full text-sm px-3 py-1" style={{ backgroundColor: taskstatusbg, color: taskstatuscolor }}>{statuscompletion}</div>
                </div>
                <div>
                    <Updatestatus  className='bg-blue-500 text-white py-1.5 px-4 rounded-[10px]' Triggertext={"Update Status"}/>
                </div>
            </div>
        </div>
    )
}

export default Taskmaincards