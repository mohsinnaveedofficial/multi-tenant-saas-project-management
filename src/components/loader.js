import React from 'react'
import { Spinner } from './ui/spinner'

function Loader() {
  return (
    <div className='flex justify-center items-center min-h-screen '>
       <div className=' flex flex-col justify-center items-center'>

         <Spinner  className={"size-14 text-blue-500"}/>
         <h4>Please wait while we are loading</h4>
       </div>
       

    </div>
  )
}

export default Loader