
import valoImage from '../assets/images/landing/valorant.jpg';
import githubImage from '../assets/images/landing/github-mark-white.svg';
import gcolabImage from '../assets/images/landing/Google_Colaboratory_SVG_Logo.svg';
import kaggleImage from '../assets/images/landing/Kaggle_logo.png';
import CustomButton  from '../components/custom_button';
import { Outlet, Link } from "react-router-dom";
const LandingPage = ()=>{
    return (
      <div className='App bg-myDark overflow-clip  text-white'>
<div className=" h-screen">
        
        <h1 className="text-white absolute right-2 top-2 rotate-45">
            Beta
          </h1>
      {/* <p className='text-white text-xl absolute z-10 top-0 right-0 rotate-45 pt-5' >BETA</p> */}
      <header className=' w-full'>
        <div className="hero flex align-middle flex-wrap-reverse w-screen xl:px-28 px-10 lg:pt-48 pt-24">
          {/* Header */}
            <div className='lg:w-1/2 lg:pr-10 lg:text-left lg:text-3xl sm:text-2xl text-xl text-center '>
              <h3 className='font-bold pb-6'>About The project: </h3>
              <p>
                Find your 
                <span className='font-bold bg-red'> Perfect</span> Valorant stack based on the <span className='font-bold bg-red'>Artificial Intelligence </span>
                Find your 
                <span className='font-bold bg-red'> Perfect</span> Valorant stack based on the <span className='font-bold bg-red'>Artificial Intelligence</span>
                </p>
            </div>
            <img src={valoImage} className="md:hero-image md:w-2/5 w-3/4 pb-12 lg:p-0" alt="logo" />
        </div>
        {/* action btn */}
          {/* simulate */}
          <div className="flex justify-center py-32">
            <Link to="/">
              <CustomButton>
                Try It Now!
              </CustomButton>
            </Link>
          </div>
      </header>
      </div>
      <div className='min-h-screen w-screen xl:px-48 px-10 lg:pt-10 pt-6 lg:text-left lg:text-3xl sm:text-2xl text-xl text-center flex flex-col justify-center align-center '>
      <h3 className='font-bold pb-6'>It's Open Source! </h3>
      <div className='max-w-fit mx-auto'>
        <div className="grid justify-around grid-cols-1 gap-4 sm:grid-cols-2 ">
          <div className="bg-myDark2 lg:w-64 w-32 lg:h-64 h-32 p-10 justify-between flex-col">
            <img src={githubImage} className="lg:w-2/3 w-full mx-auto block" alt="Github" />
            <h3 className='font-bold text-xs lg:text-sm w-full text-center bg-myDark '>Source Code</h3>
          </div>
          <div className="bg-myDark2  lg:w-64 w-32 lg:h-64 h-32 p-4">
            <img src={gcolabImage} className="px-8 w-full" alt="CO" />
            <h3 className='font-bold text-sm w-full text-center py-16'>NoteBook</h3></div>
          <div className="bg-myDark2  lg:w-64 w-32 lg:h-64 h-32 p-4">
            <img src={githubImage} className="px-8 w-full" alt="Github" />
            <h3 className='font-bold text-sm w-full text-center py-16'>Project Report</h3></div>
          <div className="bg-myDark2  lg:w-64 w-32 lg:h-64 h-32 p-4">
            <img src={kaggleImage} className="px-8 w-full" alt="Github" />
            <h3 className='font-bold text-sm w-full text-center py-16'>Dataset</h3>
            </div>
        </div>
      </div>


        </div>
        <div className='min-h-screen w-screen xl:px-48 px-10 lg:pt-10 pt-6 lg:text-left lg:text-3xl sm:text-2xl text-xl text-center'>
      <h3 className='font-bold pb-6'>Made With Coffee By</h3>


        </div>


      </div>
      
    );
}

export default LandingPage;

