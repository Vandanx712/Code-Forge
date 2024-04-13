import React from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const navigote = useNavigate()
    function Navi(){
        navigote("/login")
    }
    return (
        <>
            <div class="wrapper bg-white w-11/12 lg:w-3/12 rounded-xl font-poppins mx-auto mt-10 shadow-lg">
                <div class="title text-center text-white text-2xl lg:text-3xl font-semibold rounded-t-lg p-5 select-none bg-gradient-to-tr from-purple-700 to-blue-500">
                    Signup Form
                </div>
                <form  method='post' class=" px-4 py-3 lg:px-5 lg:py-10">
                    <div class="field mt-5 h-12 relative">
                        <input type="text" required class="w-full h-full outline-none border border-gray-300 rounded-3xl px-5 transition-all duration-300 focus:border-blue-500" />
                        <label class="absolute top-3 left-6 text-gray-500 transition-all duration-300">Username</label>
                    </div>
                    <div class="field mt-5 h-12 relative">
                        <input type="text" required class="w-full h-full outline-none border border-gray-300 rounded-3xl px-5 transition-all duration-300 focus:border-blue-500" />
                        <label class="absolute top-3 left-6 text-gray-500  transition-all duration-300">Email Address</label>
                    </div>
                    <div class="field mt-5 h-12 relative">
                        <input type="text" required class="w-full h-full outline-none border border-gray-300 rounded-3xl px-5 transition-all duration-300 focus:border-blue-500" />
                        <label class="absolute top-3 left-6 text-gray-500  transition-all duration-300">Create a password</label>
                    </div>
                    <div class="field mt-5 h-12 relative">
                        <input type="password" required class="w-full h-full outline-none border border-gray-300 rounded-3xl px-5 transition-all duration-300 focus:border-blue-500" />
                        <label class="absolute top-3 left-6 text-gray-500  transition-all duration-300">Confirm your password</label>
                    </div>
                    <div class="field mt-4">
                        <input type="submit" value="Sign Up now" class="w-full bg-gradient-to-tr from-purple-600 to-blue-500 text-white border-none py-2 lg:px-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-95"onClick={Navi} />
                    </div>
                    <div class="signup-link mt-4 text-center">
                        Already have an account? <Link to="/login" class="text-blue-500">Login</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup
