import Link from 'next/link'
import React from 'react'

function Register() {
  return (

    <div className='text-center flex flex-col justify-center items-center font-sans bg-gradient-to-br from-blue-200 via-white to-purple-200  '>
      <div className=' border border-gray-200 px-4 sm:px-6 md:px-10 py-10 rounded-2xl m-7 shadow-lg bg-white'>
        <h1 className='text-3xl font-bold text-[#3663eb]'>Project Hub</h1>
        <h2 className='text-2xl pt-1 font-semibold'>Create your account</h2>
        <h3 className='text-base pt-1 text-gray-500'>Start managing your projects today</h3>

        {/* Main div */}
        <div className='w-full '>
          <form action="">

          {/* Company name section */}
          <div className='pt-9  text-start'>
            <label htmlFor="company" className="font-semibold text-gray-500" >Company Name</label><br />
            <input id='company' type="text" placeholder='Enter your company name' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

          {/* Admin name section */}
          <div className='pt-5  text-start'>
            <label htmlFor="admin" className="font-semibold text-gray-500" >Admin Name</label><br />
            <input id='admin' type="text" placeholder='Enter your full name' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

          {/* Email section */}
          <div className='pt-5  text-start'>
            <label htmlFor="email" className="font-semibold text-gray-500" >Email Address</label><br />
            <input id='email' type="text" placeholder='Enter your email' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

          {/* Password section */}
          <div className='pt-5 text-start'>
            <label htmlFor="password" className="font-semibold text-gray-500" >Password</label><br />
            <input id='password' type="text" placeholder='Create a password' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

          {/*Confirm Password section */}
          <div className='pt-5 text-start'>
            <label htmlFor="confirmPassword" className="font-semibold text-gray-500" >Password</label><br />
            <input id='confirmPassword' type="text" placeholder='Confirm your password' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>


          {/* create account Button */}
          <button className='bg-blue-600 rounded-lg w-full mt-5 px-3 py-2  text-white'>Create Account</button>

            </form>
          {/* Sign in*/}
          <div className='flex justify-center flex-wrap   items-center gap-1 py-8 pt-5'>
            <p className='text-start text-gray-700   '>Already have an account?</p>
            <Link href="./signin" className='text-blue-600 font-semibold'> Sign in</Link>
          </div>

            {/* Policy */}
          <hr className='text-gray-300  ' />
          <p className='text-xs pt-8 text-gray-700'>By signing in, you agree to our <a href="#" className='text-blue-500'>Terms of Service</a> and <a href="#" className='text-blue-500'>Privacy Policy</a></p>

        </div>

      </div>
     
    </div>
  )
}

export default Register