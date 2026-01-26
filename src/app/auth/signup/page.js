"use client"
import Loader2 from '@/components/loader2';
import api from '@/lib/api';
import { Home } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

function Register() {

  const router=useRouter();
  const emptydata={
  companyName:"",
  email:"",
  name:"",
  password:"",
  confirmpassword:"",
}
const [formData,setformData]=useState(emptydata)
const [loading,setLoading]=useState(false);

const handleChange = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit=async(e)=>{
    setLoading(true)
    e.preventDefault();
    try{
    if(formData.confirmpassword===formData.password){
const sendData = {
  tenant: {
    companyName: formData.companyName,
    companyEmail: formData.email
  },
  user: {
    name: formData.name,
    email: formData.email,
    password: formData.password
  }
}
        
      const res=await api.post("/auth/signup",sendData )
     
  if(res.status===201){
    setformData(emptydata)
          toast.success("Register Successfully")
        router.push("/auth/signin") 
      
        }
  
  }}catch(error){
     setLoading(false)
       toast.error(error.response?.data?.message || error.message || "Unable to register");
      }
      finally{
        setLoading(false)
      }
    }
  
if(loading)
  return <Loader2/>

  return (
  

    <div className='text-center flex flex-col justify-center items-center font-sans bg-gradient-to-br from-blue-200 via-white to-purple-200  '>
    <button
        onClick={() => router.push("/")}
        className="fixed top-20 left-0 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg shadow-lg flex items-center gap-2 z-50 transition-colors"
      >
        <Home size={20} /> 
      </button>

      <div className=' border border-gray-200 px-4 sm:px-6 md:px-10 py-10 rounded-2xl m-7 shadow-lg bg-white'>
        <h1 className='text-3xl font-bold text-[#3663eb]'>Project Hub</h1>
        <h2 className='text-2xl pt-1 font-semibold'>Create your account</h2>
        <h3 className='text-base pt-1 text-gray-500'>Start managing your projects today</h3>

      
        <div className='w-full '>
          <form onSubmit={handleSubmit}>

        
          <div className='pt-9  text-start'>
            <label htmlFor="company" className="font-semibold text-gray-500" >Company Name</label><br />
            <input id='company' value={formData.companyName} onChange={handleChange} name='companyName' type="text" placeholder='Enter your company name' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

          <div className='pt-5  text-start'>
            <label htmlFor="admin" className="font-semibold text-gray-500" >Admin Name</label><br />
            <input id='admin' type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter your full name' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

         
          <div className='pt-5  text-start'>
            <label htmlFor="email" className="font-semibold text-gray-500" >Email Address</label><br />
            <input id='email' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

          <div className='pt-5 text-start'>
            <label htmlFor="password" className="font-semibold text-gray-500" >Password</label><br />
            <input id='password' type="password" value={formData.password} onChange={handleChange} name="password" placeholder='Create a password' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>

         
          <div className='pt-5 text-start'>
            <label htmlFor="confirmPassword" className="font-semibold text-gray-500" >Password</label><br />
            <input id='confirmPassword' type="password" value={formData.confirmpassword} onChange={handleChange} name="confirmpassword" placeholder='Confirm your password' required className='border border-gray-300 w-full rounded-lg mt-1 py-2 px-3 input-style' />
          </div>


         
          <button type='submit' className='bg-blue-600 rounded-lg w-full mt-5 px-3 py-2  text-white'>Create Account</button>

            </form>
          
          <div className='flex justify-center flex-wrap   items-center gap-1 py-8 pt-5'>
            <p className='text-start text-gray-700   '>Already have an account?</p>
            <Link href="./signin" className='text-blue-600 font-semibold'> Sign in</Link>
          </div>

        
          <hr className='text-gray-300  ' />
          <p className='text-xs pt-8 text-gray-700'>By signing in, you agree to our <a href="#" className='text-blue-500'>Terms of Service</a> and <a href="#" className='text-blue-500'>Privacy Policy</a></p>

        </div>

      </div>
     
    </div>
  )
}

export default Register