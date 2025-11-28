import React from 'react'
import { TiTick } from "react-icons/ti";

function Plan1() {
  return (
    <div className='rounded-2xl border border-gray-200 p-6 bg-white shadow-xs'>
      <div className='flex justify-center'>
        <h1 className='text-lg font-bold text-black pb-2 '>
          Free
        </h1>
      </div>
      <div className='flex justify-center gap-1 '>
        <h1 className='text-3xl text-black font-bold'>
          $0
        </h1>
        <p className='text-sm text-gray-500 pt-3.5'>
          /month
        </p>
      </div>
      <div className=' text-black'>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 font-bold text-lg mr-3'/>Up to 3 projects
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>5 team members
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>Basic reporting
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3 '>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>Email support
        </div>
        <div className='flex text-sm text-gray-500 ml-2 my-3'>
        <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3'/>1GB storage
        </div>
      </div>
      <div className='bg-gray-900 text-white border border-gray-800 rounded-lg flex justify-center mx-5 my-8 p-1.5'>
        Upgrade
      </div>


    </div>
  )
}

export default Plan1