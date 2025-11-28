import React from 'react'
import { RiBarChartLine } from "react-icons/ri";

function Profileperformance() {
    return (
        <div className=' m-4 '>
            <div className='p-4'>
              
                <div className='p-[65px]'>
                    <div className='flex justify-center'>
                        <h1 className=''>
                            <RiBarChartLine className='text-gray-300 text-3xl' />
                        </h1>
                    </div>
                    <p className='text-black font-bold text-sm flex justify-center pt-1'>
                        Performance Metrics
                    </p>
                    <p className='text-gray-400 text-sm flex justify-center pt-2'>
                        Detailed performance analytics and growth metrics would be shown here.
                    </p>
                </div >
            </div>
        </div>
    )
}

export default Profileperformance