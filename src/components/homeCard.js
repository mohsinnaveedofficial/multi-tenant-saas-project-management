import { Icon } from 'lucide-react'
import React from 'react'

function HomeCard({Icon,title, desc,color}) {
    const colormap={
        blue:{iconcolor:"bg-blue-600",cardbg:"bg-gradient-to-br from-blue-50 to-blue-100"},
        purple:{iconcolor:"bg-purple-600",cardbg:"bg-gradient-to-br from-purple-50 to-purple-100"},
        green:{iconcolor:"bg-green-600",cardbg:"bg-gradient-to-br from-green-50 to-green-100"},
        orange:{iconcolor:"bg-orange-600",cardbg:"bg-gradient-to-br from-orange-50 to-orange-100"},
    }
    const finalColor=colormap[color]||colormap.blue
  return (
    <div className={`${finalColor.cardbg} rounded-2xl text-center max-w-lg p-6 `}>
        <div className={`${finalColor.iconcolor} text-white text-2xl p-3 inline-flex rounded-lg `}>
            <Icon className="inline"/>
            </div> 
        <h2 className='text-xl text-gray-900 font-semibold mt-2'>{title}</h2>
        <h4 className='text-gray-600 my-2 '>{desc}</h4>
    </div>
  )
}

export default HomeCard