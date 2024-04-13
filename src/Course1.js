import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Course1() {
    return (
        <>
            <div className='flex-1 lg:flex-none lg:w-[550px] m-[20px] lg:m-[30px] font-sans'>
                <h1 className=' lg:text-[60px] text-[25px] text-gray-400 '>Build Full stack projects, SaaS tools, MVP products</h1>
                <div className=' lg:absolute lg:right-[290px] lg:w-[550px] lg:text-[25px] text-[13px] text-red-300 font-mono my-[60px] lg:my-0'>
                    <p className=' text-center  lg:text-start'>Unlock unlimited potential with lifetime access to 25+ full stack projects - revolutionize your skills and accelerate your success today!</p>
                </div>
                <button className=' w-[200px] lg:w-[300px] p-2 lg:p-3 rounded-[50px] mt-0 lg:mt-[180px] ml-[35px] lg:ml-[50px] text-[17px] lg:text-[25px] bg-red-500 text-white'>Buy Courses for Free</button>
            </div>
            <div className=' m-5 mt-20 lg:m-16 lg:mt-28 text-white font-sans lg:p-10'>
                <div className='lg:flex flex-wrap lg:justify-between'>
                    <h1 className=' text-[20px] py-5 pb-6 lg:pb-0 lg:py-0 lg:text-3xl'>OUR COURSES</h1>
                    <Link to='/courses' className=' p-2 border lg:p-3 lg:px-6 border-red-500 text-[25px]'>View More</Link>
                </div>
                <div className=' flex-1 flex-wrap mt-10 lg:flex lg:justify-evenly lg:mt-20'>
                    <Link to='/courses'>
                        <Card coursespic='fullstack.jpg' coursename='Build Full stack Project' coursedescriptation='30DaysCoding' courses='18' price='Free' />
                    </Link>
                    <Link to='/courses'>
                        <Card coursespic='codehlep.webp' coursename='Data Structures & Algorithms' coursedescriptation='CodeHelp' courses='100' price='Free' />
                    </Link>
                    <Link to='/courses'>
                        <Card coursespic='sheryisns.webp' coursename='Front - End Domination' coursedescriptation='Sheryins' courses='16' price='Free' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Course1
