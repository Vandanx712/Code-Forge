import { Link } from 'react-router-dom';
import './App.css';
import Card from './Card';

function App() {

  return (
    <>
      <div className=" m-3 my-14 lg:m-24">
        <div className="intro1">
          <ul className="dynamic-txts text-4xl lg:text-4 xl">
            <li><span>" Welcome "</span></li>
            <li><span>" स्वागत "</span></li>
            <li><span>" આવો "</span></li>
          </ul>
          <div className="intro2 w-52 text-2xl p-3 lg:text-5xl lg:w-96 lg:pt-10">
            aboard to <p className="name text-4xl py-1 text-indigo-600 hover:p-5 hover:text-sky-300 lg:hover:p-7 lg:py-3">CodeForge!</p> We're dalighted to have you join our community of learners.
          </div>
        </div>
      </div>
      <div className="box1 lg:hidden relative lg:border-b-2 ">
        <img src="hello.png" className="w-52"></img>
        <h2 className="shake absolute top-24 left-5 text-white text-3xl">Hello Coder</h2>
        <p className=" absolute top-36 text-2xl left-5 text-gray-300 ">Forge Your Code, Shape Your Future</p>
      </div>
      <div className="box1  hidden lg:block absolute right-32 top-56 border-b-2">
        <img src="hello.png" className="img w-96"></img>
        <h2 className="shake absolute top-52  text-gray-300 text-5xl">Hello Coder</h2>
        <p className=" absolute top-72 text-3xl text-gray-300">Forge Your Code, Shape Your Future</p>
      </div>
      <div className=" mt-36 hidden lg:block">
        <div className="ad-slider  my-5  py-10 text-5xl">
          <h4>Angular.js</h4>
          <h4>React.js</h4>
          <h4>Next.js</h4>
          <h4>Node.js</h4>
          <h4>Express.js</h4>
        </div>
      </div>
      <div className=' m-5 mt-20 lg:m-16 lg:mt-28 text-white font-sans lg:p-10'>
        <div className='lg:flex flex-wrap lg:justify-between'>
          <h1 className=' text-[20px] py-5 pb-6 lg:pb-0 lg:py-0 lg:text-3xl'>OTHER ADDITIONAL COURSES</h1>
          <Link to='/courses' className=' p-2 border lg:p-3 lg:px-6 border-red-500 text-[25px]'>View More</Link>
        </div>
        <div className=' flex-1 flex-wrap mt-10 lg:flex lg:justify-evenly lg:mt-20'>
          <Link to='/courses'>
            <Card coursespic='fullstack.jpg'coursename='Build Full stack Project' coursedescriptation='30DaysCoding' courses='18' price='Free'/>
          </Link>
          <Link to='/courses'>
            <Card  coursespic='codehlep.webp' coursename='Data Structures & Algorithms' coursedescriptation='CodeHelp' courses='100' price='Free'/>
          </Link>
          <Link to='/courses'>
            <Card coursespic='sheryisns.webp' coursename='Front - End Domination' coursedescriptation='Sheryins' courses='16' price='Free'/>
          </Link>
        </div>
      </div>
      <div className=' mt-20 text-center lg:mt-32 font-sans'>
        <h1 className=' lg:text-[40px] text-[28px] text-gray-300 py-5 lg:py-4'>Welcome to Our coding Family</h1>
        <p className=' text-pretty text-white'>Join a supportive community of passionate coders, where learning, collaboration, and innovation come together. Embark on your coding journey with us.</p>
      </div>
      <div className=" flex lg:flex lg:justify-evenly w-[260px] lg:w-[1000px] lg:m-[auto] m-[auto] lg:mt-[100px] mt-[100px] space-x-5 lg:space-x-0 lg:p-5">
        <img
          className="relative z-30 inline-block lg:h-[100px] lg:w-[100px] h-[50px] w-[50px] rounded-full ring-2 ring-white bg-white"
          src="linkedin.png"
          alt="linkedin"
        />
        <img
          className="relative z-20 inline-block lg:h-[100px] lg:w-[100px] h-[50px] w-[50px]  rounded-full ring-2 ring-white bg-white"
          src="insta.png"
          alt="instagram"
        />
        <img
          className="relative z-10 inline-block lg:h-[100px] lg:w-[100px] h-[50px] w-[50px]   rounded-full ring-2 ring-white bg-white"
          src="discord.png"
          alt="discord"
        />
        <img
          className="relative z-0 inline-block lg:h-[100px] lg:w-[100px] h-[50px] w-[50px]   rounded-full ring-2 ring-white bg-white"
          src="telegram.png"
          alt="telegram"
        />
      </div>
    </>
  );
}

export default App;
