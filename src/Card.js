import React from 'react'
import { Link } from 'react-router-dom'

function Card({coursespic,coursename,coursedescriptation,courses}) {
    return (
        <>
            <div className=" lg:w-[350px] rounded-md border text-white font-mono my-6 lg:my-0">
                <img
                    src={coursespic}
                    alt="Laptop"
                    className="h-[220px] w-full rounded-t-md object-fill"
                />
                <div className="p-5 text-wrap">
                    <h1 className="text-[30px] py-3">
                        {coursename}
                    </h1>
                    <p className="mt-3 text-[18px]">
                        {coursedescriptation}
                    </p>
                    <p className=' text-[18px] mt-4'>
                        {courses}
                    </p>
                    <Link to=''>
                        <h1 className=' text-[20px] mt-4 border-[1px] w-[80px] p-1 pl-[22px] border-white'>Buy</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card
