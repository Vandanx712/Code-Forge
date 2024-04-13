import React, { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  // let str = document.getElementById("first").value
  // const str2 = str.indexof(0)
  // console.log(str2)
  const [islogin, setlogin] = useState(false)
  const navigate = useNavigate()
  localStorage.setItem("islogin",false)
  
  function navi(){
    setlogin(true)
    localStorage.setItem("islogin",true)
    navigate("/")
    window.location.reload()
  }
  return (
    <>
      <div class="wrapper bg-white w-11/12 lg:w-3/12 rounded-xl font-poppins mx-auto mt-10 shadow-lg">
        <div class="title text-center text-white text-2xl lg:text-3xl font-semibold rounded-t-lg p-5 select-none bg-gradient-to-tr from-purple-700 to-blue-500">
          Login Form
        </div>
        <form method='get' className=" px-4 py-3 lg:px-5 lg:py-10">
          <div class="field my-5 h-12 relative">
            <input type="text" required class="w-full h-full outline-none border border-gray-300 rounded-3xl px-5 transition-all duration-300 focus:border-blue-500" id='first'/>
            <label class="absolute top-3 left-6 text-gray-500 font-normal  pointer-events-none  transition-all duration-300">Username</label>
          </div>
          <div class="field my-5 h-12 relative">
            <input type="password" required class="w-full h-full outline-none border border-gray-300 rounded-3xl px-5 transition-all duration-300 focus:border-blue-500" />
            <label class="absolute top-3 left-6 text-gray-500 font-normal  pointer-events-none transition-all duration-300">Password</label>
          </div>
          <div class="content flex-1 lg:flex items-center justify-evenly my-3 lg:my-5 text-1xl lg:h-10 text-center">
            <input type="checkbox" id="remember-me" className=" w-3 h-3 bg-red-500"/>
            <label for="remember-me" class="lg:text-1xl lg:pr-10 pl-1">Remember me</label>
            <div class="pass-link mt-2">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div class="field">
            <input type="submit" value="Login" class="w-full  text-white border-none py-2 lg:px-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-95" onClick={navi}/>
          </div>
          <div class="signup-link mt-5 text-center">
            Not a member? <Link to="/signup" class="text-blue-500">Signup now</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
