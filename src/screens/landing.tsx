


const LandingPage = ()=>{
    return (
<div className="App bg-myDark h-screen">
<p className='text-white text-xl absolute z-10 top-0 right-0 rotate-45 pt-5' >BETA</p>
<header className=' w-full'>
  <div className="hero flex align-middle flex-wrap-reverse w-screen xl:px-28 px-10 lg:pt-48 pt-24">
    {/* Header */}
      <div className='lg:w-1/2 lg:pr-10 text-white lg:text-left lg:text-3xl sm:text-2xl text-xl text-center '>
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
</header>
</div>
    );
}

export default LandingPage;

