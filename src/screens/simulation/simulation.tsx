import { useMemo, useState } from "react";
import CustomButton from "../../components/custom_button";
import LoadingSpinner from "../../components/loadingSpinner";
import TeamSelection from "./team_selection";
import { TeamInterface } from "../../utils/interfaces/team_interface";
import Team1Context from "../../utils/team1_context";

const SimulationPage = () => {
  const [loading, setLoading] = useState(false);
  const [team1Attack,setTeam1Attack] = useState(false);
  const [team1,setTeam1] = useState<TeamInterface>({agents:[]});
  const [team2,setTeam2] = useState<TeamInterface>({agents:[]});

const team1Value = useMemo(()=>({team1,setTeam1}),[team1,setTeam1])
const team2Value = useMemo(()=>({team1,setTeam1}),[team2,setTeam2])

  return (
   <Team1Context.Provider value={team1Value}>
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
   </Team1Context.Provider>
  );
};

export default SimulationPage;
