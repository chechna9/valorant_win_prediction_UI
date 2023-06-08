
import valoImage from '../assets/images/landing/valorant.jpg';
import githubImage from '../assets/images/landing/github-mark-white.svg';
import gcolabImage from '../assets/images/landing/Google_Colaboratory_SVG_Logo.svg';
import kaggleImage from '../assets/images/landing/Kaggle_logo.png';
import driveImage from '../assets/images/landing/drive.png';
import amir from '../assets/images/landing/amir.jpg';
import yacine from '../assets/images/landing/yacine.jpg';
import CustomButton  from '../components/custom_button';
import { Outlet, Link } from "react-router-dom";
const LandingPage = ()=>{
    return (
      <div className='App bg-myDark overflow-clip  text-white'>
<div className="h-screen">
        
        <h1 className="text-white absolute right-2 top-2 rotate-45">
            Beta
          </h1>
      <header className=' w-full'>
        <div className="hero flex align-middle flex-wrap-reverse w-screen lg:px-48 px-10 lg:pt-48 pt-24">
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
            <img src={valoImage} className="md:hero-image md:w-2/5 w-3/4 pb-12 lg:p-0 mx-auto bloc" alt="Valorant" />
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
      <div className='min-h-screen w-screen lg:px-48 px-10 lg:pt-10 pt-6 lg:text-left lg:text-3xl sm:text-2xl text-xl text-center flex flex-col justify-center align-center '>
      <h3 className='font-bold pb-6'>It's Open Source! </h3>
      <div className='max-w-fit mx-auto'>
        <div className="grid justify-around grid-cols-1 gap-4 sm:grid-cols-2 ">
          <div className="bg-myDark2 lg:w-64 w-32 lg:h-64 h-32 lg:p-8 p-2 grid content-stretch">
            <img src={githubImage} className="lg:h-full h-3/4 mx-auto " alt="Github" />
            
            <h3 className='font-bold text-xs lg:text-sm w-full text-center mt-auto'>Source Code</h3>
          </div>
          <div className="bg-myDark2  lg:w-64 w-32 lg:h-64 h-32 p-2 grid content-stretch">
            <img src={gcolabImage} className="h-full mx-auto" alt="CO" />
            <h3 className='font-bold text-xs lg:text-sm w-full text-center lg:mt-6 mt-auto'>NoteBook</h3>
          </div>
          <div className="bg-myDark2  lg:w-64 w-32 lg:h-64 h-32 lg:p-8 p-2 grid content-stretch">
          {/* <img src={driveImage} className="h-full mx-auto " alt="Drive" /> */}
            <div className="h-full mx-auto flex flex-col justify-center">
              <img src={driveImage} className=' h-2/3' alt="Drive" />
            </div>
            <h3 className='font-bold text-xs lg:text-sm w-full text-center  mt-auto'>Project Report</h3>
          </div>
          <div className="bg-myDark2  lg:w-64 w-32 lg:h-64 h-32 lg:p-8 p-2 grid content-stretch">
            <div className="h-full mx-auto flex flex-col justify-end">
              <img src={kaggleImage} alt="Kaggle" />
            </div>
            <h3 className='font-bold text-xs lg:text-sm w-full text-center mt-auto'>Dataset</h3>
          </div>
        </div>
      </div>


        </div>
        <div className='min-h-screen w-screen lg:px-48 px-10 lg:pt-10 pt-6 lg:text-left lg:text-3xl sm:text-2xl text-xl text-center'>
      <h3 className='font-bold pb-6'>Made With Coffee By</h3>
      <div className='grid grid-cols-1 lg:gap-20 gap-4 lg:grid-cols-2 h-full justify-between'>
          <div className="h-full p-2 grid content-start bg-myDark2">
            <img src={yacine} className="h-fill mx-auto" alt="Yacine" />
            <h3 className='font-bold text-xs lg:text-sm w-full text-center lg:mt-10 mt-2'>Ahmed Yacine Bouchouareb</h3>
          </div>
          <div className="h-full p-2 grid content-start bg-myDark2">
            <img src={amir} className="h-full mx-auto" alt="Amir" />
            <h3 className='font-bold text-xs lg:text-sm w-full text-center lg:mt-10 mt-2'>Amir Almamma</h3>
          </div>
      </div>
        </div>


      </div>
      
    );
}

export default LandingPage;

