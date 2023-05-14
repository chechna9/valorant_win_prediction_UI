import { useState } from "react";
import CustomButton from "../../components/custom_button";
import LoadingSpinner from "../../components/loadingSpinner";
import TeamSelection from "./team_selection";

const SimulationPage = () => {
  const [loading, setLoading] = useState(false);
  const [team1Attack,setTeam1Attack] = useState(false)
  return (
    <div className="bg-myDark h-screen">
      <div className="flex p-4 h-[80vh]">
        {/* team 1 */}
        <div className="bg-myLight flex-auto">
          <TeamSelection switchAttack={()=>setTeam1Attack(!team1Attack)} team="1" isAttacker={team1Attack} />
        </div>
        {/* map*/}
        <div className="bg-myLight2 flex-auto"></div>
        {/* team 2 */}
        <div className="bg-myLight flex-auto">
          <TeamSelection switchAttack={()=>setTeam1Attack(!team1Attack)} team="2" isAttacker={!team1Attack} />
        </div>
      </div>

      <div className="flex justify-center">
     

          <CustomButton
            onClick={() => {
              console.log("calling the api");
            }}
          >
             {loading && <LoadingSpinner />}
             {!loading && "Simulate"}
            
          </CustomButton>
       
      </div>
    </div>
  );
};

export default SimulationPage;
