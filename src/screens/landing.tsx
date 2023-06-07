
import valoImage from '../assets/images/valorant.jpg';
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
      <div className='min-h-screen w-screen xl:px-48 px-10 lg:pt-10 pt-10 lg:text-left lg:text-3xl sm:text-2xl text-xl text-center'>
      <h3 className='font-bold pb-6'>It's Open Source! </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="bg-gray-200 p-4">Square 1</div>
        <div className="bg-gray-200 p-4">Square 2</div>
        <div className="bg-gray-200 p-4">Square 3</div>
        <div className="bg-gray-200 p-4">Square 4</div>
      </div>  

        </div>
      </div>
      
    );
}

export default LandingPage;

