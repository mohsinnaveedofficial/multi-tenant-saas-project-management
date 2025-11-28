import React from 'react'
import { TiTick } from "react-icons/ti";

function Plan2() {
  return (
    <div className='relative '>
        <div className='absolute  top-[-13] flex text-black w-full justify-center items-center gap-13 ml-18 '>
            <p className='text-white bg-blue-500 rounded-4xl px-2 py-1 text-sm'>Most Popular</p>
            <p className='text-white bg-green-500 rounded-4xl px-2 py-1  text-sm'>Current Plan</p>
        </div>
    <div className='rounded-2xl  border-blue-500 border-3 p-6 bg-white shadow-xs'>
      <div className='flex justify-center'>
        <h1 className='text-lg font-bold text-black pb-2 '>
          Standard
        </h1>
      </div>
      <div className='flex justify-center gap-1 '>
        <h1 className='text-3xl text-black font-bold'>
          $29
        </h1>
        <p className='text-sm text-gray-500 pt-3.5'>
          /month
        </p>
      </div>
      <div className=' text-black'>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 font-bold text-lg mr-3'/>Up to 25 projects
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>15 team members
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>Advance reporting
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3 '>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>Priority support
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>10GB storage
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>Custom integrations
        </div>
      </div>
      <div className='bg-gray-200 text-gray-500 font-bold border border-gray-200 rounded-lg flex justify-center mx-5 my-8 p-1.5'>
        Current Plan
      </div>

</div>
    </div>  )
}

export default Plan2