import React from 'react'

function Progress({width}) {
  let progressvalue=width+"%"
  return (
    <div className='flex gap-4 justify-center items-center'>
    <div className='w-32 rounded-2xl h-2 bg-gray-200 '>
        <div className={`bg-blue-600 rounded-2xl  h-2  `}  style={{width:progressvalue}}  ></div>
    </div>
    <p>{progressvalue}</p>
    </div>
  )
}

function Progress2({Progress}){
  return(
     <div className=" rounded-2xl h-2 bg-gray-200 ">
            <div
              className={`bg-blue-600 rounded-2xl  h-2  `}
              style={{ width: `${Progress}%`  }}
            ></div>
          </div>
  )
}


export  {Progress,Progress2}