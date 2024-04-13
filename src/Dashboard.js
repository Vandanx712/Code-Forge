import React from 'react'
import './App.css'
import { useNavigate,Link,Outlet} from 'react-router-dom'


function Dashboard() {
  const navi = useNavigate()
  function remove(){
    localStorage.removeItem("islogin")
    navi("/")
    window.location.reload()
  }
  return (
    <>
      <div className='hidden lg:flex'>
        <div className='p lg:block lg:flex-1 lg:w-1/4 lg:h-screen'>
          <div className='pro lg:py-10 lg:pl-14 text-white'> 
            <Link to='/dash/profile'><div className='pro1 lg:w-20 lg:h-20 text-center lg:py-5  lg:text-5xl rounded-full'>U</div></Link>
            <h1 className=' lg:w-2/12 text-wrap lg:my-5 text-1xl text-white'>Username</h1>
            <Link to='/courses'><li className=' list-none lg:p-1 lg:py-3 text-2xl'>Your Courses</li></Link>
            <Link to='/contact'><li className=' list-none lg:p-1 lg:pt-3 lg:pb-5 text-2xl'>Contact us</li></Link>
            <button className='btn-lout text-2xl lg:p-1' onClick={remove}>Log Out</button>
          </div>
        </div>
        <div className='dash lg:w-9/12 lg:h-screen'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
