import React from 'react'

function ReportStats({value,title,desc}) {
  return ( 
    <div className='flex flex-col p-3  bg-white font-sans text-gray-950 justify-center items-center border shadow-sm rounded-2xl'>
        <h3 className='text-center text-4xl font-bold mt-1 '>{value}</h3>
        <h6 className='text-center font-medium mt-3 mb-1 '>{title}</h6>
        <p className='text-center text-gray-600 mb-1'>{desc}</p>
    </div>
  )
}

export default ReportStats 