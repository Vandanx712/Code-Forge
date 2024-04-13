import React from 'react'
import './App.css'

function Contact() {
  return (
    <>
      <div className=' relative'>
        <img src='bg.jpeg' className='bg'/>
        <h2 className=' absolute top-20 left-5 text-xl lg:top-32 lg:left-32 lg:text-6xl font-mono'>Get in Touch</h2>
        <h2 className=' absolute top-24 left-4  lg:top-48 lg:left-32 lg:text-2xl'>The Ultimate Guide To Your Problem</h2>
      </div>
      <div className=' flex-1 lg:flex'>
        <div className=' ml-6 mt-5 lg:mt-20 w-5/6 lg:ml-40  lg:w-1/2 bg-black'>
            <h2 className=' text-2xl p-3 lg:p-10 lg:text-4xl'>Sends your problem</h2>
            <form method='post' className=' p-3 pt-7 lg:p-10 lg:text-xl text-white'>
                <p>Name </p>
                <input type='text' name='uname' placeholder='Enter your name' className='in-1  my-2 p-1 w-5/6 lg:w-2/3 lg:pl-3'/>
                <p>Email </p>
                <input type='email' name="uemail" placeholder='Enter your email' className=' in-1 my-2 p-1 w-5/6 lg:w-2/3 lg:pl-3'/>
                <p>Phone Number</p>
                <input type='text'name='unumber' placeholder='Enter your number' className='in-1 my-2 p-1 w-5/6 lg:w-2/3 lg:pl-3'/>
                <p>Subject</p>
                <input type='text'name='usub' placeholder='Enter your subject' className='in-1 my-2 p-1 w-5/6 lg:w-2/3 lg:pl-3'/>
                <p>Problem</p>
                <input placeholder='Enter your problem' type='text' className='in-1 my-2 p-1 w-5/6 lg:w-2/3 lg:pl-3'/><br/>
                <input type='submit' name='Submit' className='in-2 my-5 p-2 px-5 mx-20 lg:mx-64 lg:mt-10 lg:p-3 lg:px-7 hover:bg-gray-400 hover:text-black'/>
            </form>
        </div>
        <div className=' hidden lg:block lg:w-1/2 lg:mr-40 lg:mt-20 bg-blue-700'>
        <h2 className=' text-4xl p-10'>Contact information</h2>
            <h2 className=' text-center pt-60 text-2xl'>codeforge@fun.in</h2>
        </div>
        <div className='b-2 lg:hidden block w-5/6 ml-6 bg-blue-700'>
            <h2 className=' text-2xl p-3'>Contact information</h2>
            <h2 className=' text-center pt-28 text-xl'>codeforge@fun.in</h2>
        </div>
      </div>
    </>
  )
}

export default Contact
