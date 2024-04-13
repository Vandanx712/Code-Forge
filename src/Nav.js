import './App.css';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';


function Nav() {
    const width = 0
    const [style, setstyle] = useState(width)
    const openmenu = () => {
        let newstyle = 210
        setstyle(newstyle)
    }
    const closemenu = () => {
        setstyle(width)
    }
    const [islogin, setlogin] = useState(localStorage.getItem("islogin") ? true : false)
    return (
        <>
            <nav className=' flex flex-wrap'>
                <button onClick={openmenu} className="mbtn  w-7 h-7 my-8 mx-1 lg:w-10 lg:mt-10 lg:hidden"><img src="menu.png"></img></button>
                <Link to="/">
                    <img src='logo.png' className='mt-2 ml-4 lg:ml-0 lg:mt-0 w-42 h-20 lg:w-64 lg:h-24' />
                </Link>
                <ul className=' list-none hidden lg:flex flex-wrap space-x-20 text-3xl space-y-7'>
                    <li className=' ml-40 mt-7 '><NavLink to="/" classname={({ isActive }) =>
                        isActive ? 'text-black' : 'text-red-800'
                    }>
                        Home
                    </NavLink>
                    </li>
                    <NavLink to="courses" classname={({ isActive }) =>
                        `  duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Courses
                    </NavLink>

                    <li><NavLink to="learninghub" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        LearningHub
                    </NavLink>
                    </li>
                    <li><NavLink to="liveclasses" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        LiveClasses
                    </NavLink>
                    </li>
                    <NavLink to="contact" classname={({ isActive }) =>
                        `duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Contact
                    </NavLink>

                    {islogin ? (
                        <Link to="/dash"><div className=' bg-red-500 w-10 h-10 rounded-full text-center pt-1 text-white text-2xl'>D</div></Link>
                    ) : (<li><Link to="/login" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Login
                    </Link>
                    </li>)}
                </ul>
            </nav>
            <div className="slidebar lg:hidden" style={{ width: style }}>
                <button className="cross  w-7 m-7 mx-36" onClick={closemenu} ><img src="cross.png"></img></button>
                <ul className=' list-none p-10 pl-7 text-3xl'>
                    {islogin ? (
                        <li className=' py-3 mb-7 text-center text-4xl rounded-full w-16 h-16 text-white bg-red-600'><NavLink to="/dash">D</NavLink></li>
                    ) : (<li className=" py-3"><Link to="/login" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Login
                    </Link>
                    </li>)}
                    <li className="sli py-3"><NavLink to="" classname={({ isActive }) =>
                        `  duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Home
                    </NavLink>
                    </li>
                    <li className="sli py-3"><NavLink to="courses" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Courses
                    </NavLink>
                    </li>
                    <li className="sli py-3"><NavLink to="learninghub" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        LearningHub
                    </NavLink>
                    </li>
                    <li className="sli py-3"><NavLink to="liveclasses" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        LiveClasses
                    </NavLink>
                    </li>
                    <li className="sli py-3"><NavLink to="contact" classname={({ isActive }) =>
                        ` duration-200 ${isActive ? "underline" : "no-underline"}`
                    }>
                        Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav;