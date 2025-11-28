import React from 'react'
function Userplanstats( {icon , projectcount , work , bgcolor ,texta}  ) {
  return (
    <div className='rounded-2xl bg-cyan-200 flex justify-start items-center p-4 gap-4 ' 
    style={{backgroundColor:bgcolor,color:texta}}>
        <div>
            <div className='rounded-xl p-3'>
                {icon}
            </div>
        </div>
        <div>
            <h3 className='font-bold text-[15px]'>{projectcount}</h3>
            <p className='text-sm'>{work}</p>
        </div>
    </div>
  )
}

export default Userplanstats