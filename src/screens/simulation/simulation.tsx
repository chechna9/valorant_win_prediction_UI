import { useState } from "react";
import CustomButton from "../../components/custom_button";
import LoadingSpinner from "../../components/loadingSpinner";

const SimulationPage = () => {
    const [loading,setLoading] = useState(false);
  return (
    <div className="bg-myDark h-screen">
      <div className="flex p-4 h-[80vh]">
        {/* team 1 */}
        <div className="bg-myLight flex-auto"></div>
        {/* map*/}
        <div className="bg-myLight2 flex-auto"></div>
        {/* team 2 */}
        <div className="bg-myLight flex-auto"></div>
      </div>

      <div className="flex justify-center">{
        loading && <LoadingSpinner/>
      }
       { !loading && <CustomButton onClick={()=>{
            console.log("calling the api");
        }}>Simulate</CustomButton>}
      </div>
    </div>
  );
};

export default SimulationPage;
