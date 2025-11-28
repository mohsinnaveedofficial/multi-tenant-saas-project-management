import React from 'react'
import { TiTick } from "react-icons/ti";


function Profiletask() {
    return (
        <div className=' m-4  '>
            <div className='p-4'>
                
                <div className='p-[65px]'>
                    <div className='flex justify-center'>
                        <h1 className='p-1 border-3 border-gray-300'>
                            <TiTick className='text-gray-300' />
                        </h1>
                    </div>
                    <p className='text-black font-bold text-sm flex justify-center pt-1'>
                        Task History
                    </p>
                    <p className='text-gray-400 text-sm flex justify-center pt-2'>
                        Your recent task activity and completion history would be displayed here.
                    </p>
                </div >
            </div>
        </div>
    )
}

export default Profiletask