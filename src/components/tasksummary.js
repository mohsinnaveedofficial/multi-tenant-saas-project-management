import React from 'react'

function Tasksummary({status , count ,texta}) {
  return (
    <div className='flex justify-between items-center  dark:bg-gray-600 bg-gray-100 p-3.5 rounded-lg'>
        <h1 className='text-sm text-blue-950 dark:text-gray-200'>{status}</h1>
        <h1 className='text-[22px] font-bold' style={{color:texta}}>{count}</h1>
    </div>
  )
}

export default Tasksummary