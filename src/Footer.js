import './App.css';
import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Footer() {
    return (
        <footer className="lg:block">
            <div className=" flex-1 lg:flex lg:space-x-36 mt-32 lg:justify-centercd">
                <div className=" lg:ml-16 lg:my-20 lg:text-3xl">
                    <Link to="/">
                        <img src='logo.png' className=' lg:w-64 lg:h-24 invert'/>
                    </Link>
                </div>
                <div className=" text-xl lg:m-5 ml-10">
                    <h5 className=" py-5">Quick Links</h5>
                    <ul className=" list-none text-gray-400 lg:space-y-2 space-y-1"> 
                        <li className=" hover:text-indigo-500 hover:p-1">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className=" hover:text-indigo-500 hover:p-1">
                            <NavLink to="./courses">
                                Courses
                            </NavLink>
                        </li>
                        <li className=" hover:text-indigo-500 hover:p-1">
                            <NavLink to="./liveclasses">
                                LiveClasses
                            </NavLink>
                        </li>
                        <li className=" hover:text-indigo-500 hover:p-1">
                            <NavLink to="./contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className=" text-xl lg:m-5 ml-10">
                    <h5 className=" py-5">Legal</h5>
                    <ul className=" list-none text-gray-400 lg:space-y-2 space-y-1">
                        <li className=" hover:text-indigo-500 hover:p-1">Privacy Policy</li>
                        <li className=" hover:text-indigo-500 hover:p-1">Terms of use</li>
                        <li className=" hover:text-indigo-500 hover:p-1">Refund & Cancellation Policy</li>
                    </ul>
                </div>
                <div className="text-xl lg:m-5 ml-10">
                    <h5 className=" lg:py-5 py-4">GET IN TOUCH</h5>
                    <li className="list-none text-gray-400 hover:text-indigo-500 hover:p-1">codeforge@fun.in</li>
                </div>
            </div>
        </footer>
    )
}

export default Footer
