import { useState, useEffect, useRef } from "react";
import { addIcon } from "../../utils/assets";
import { AgentInterface } from "../../utils/interfaces/agent_interface";
import { useContext } from "react";
import Team1Context from "../../utils/contexts/team1_context";
import Team2Context from "../../utils/contexts/team2_context";
interface AddAgentBoxInterface {
  team: string;
  dispAgents: AgentInterface[];
  setDispAgents: React.Dispatch<React.SetStateAction<AgentInterface[]>>;
}
const AddAgentBox = (props: AddAgentBoxInterface) => {
  // context
  const t1CTX = useContext(Team1Context);
  const t2CTX = useContext(Team2Context);
  const isT1 = props.team === "1";
  // state
  const [chosen, setChosen] = useState(false);
  const [showList, setShowList] = useState(false);
  const [currentAgent, setCurrentAgent] = useState<AgentInterface | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // functions
  const selectAgent = (agent: AgentInterface) => {
    let tempDisp = props.dispAgents;
    // deleting the agent from the disp agents and add it to the current agent
    tempDisp.splice(tempDisp.indexOf(agent), 1);
    props.setDispAgents(tempDisp);
    if (isT1) {
      t1CTX?.setTeam1({ agents: [...t1CTX.team1.agents, agent] });
    }
    if (!isT1) {
      t2CTX?.setTeam2({ agents: [...t2CTX.team2.agents, agent] });
    }
    setShowList(false);
    setChosen(true);
    setCurrentAgent(agent);
  };
  const removeAgent = (agent: AgentInterface) => {
    let tempDisp = props.dispAgents;
    // adding the agent to the disp agents and remove it from the current agent
    if (isT1 && t1CTX) {
      let prevAgents = t1CTX.team1.agents;
      prevAgents.splice(prevAgents.indexOf(agent), 1);
      t1CTX?.setTeam1({ agents: prevAgents });
    }
    if (!isT1 && t2CTX) {
      let prevAgents = t2CTX.team2.agents;
      prevAgents.splice(prevAgents.indexOf(agent), 1);
      t2CTX.setTeam2({
        agents: prevAgents,
      });
    }
    tempDisp.push(agent);
    props.setDispAgents(tempDisp);
    setCurrentAgent(null);
    setChosen(false);
  };

  // close the list when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props.dispAgents]);

  return (
    <div className=" max-w-[150px] m-2 max-h-[150px] w-[15vw] h-[15vw] bg-myDark2 flex flex-col justify-center items-center  rounded-xl">
      {!chosen && (
        <div>
          <button
            ref={buttonRef}
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <img
              className="transition-all  hover:scale-110 duration-300 w-[5vw] h-[5vw] max-w-[50px]"
              src={addIcon}
              alt="add agent"
            />
          </button>
          {/* list of agents to select */}

          {showList && (
            <div className="bg-myLight2 p-4 absolute rounded-lg sm:max-w-[50vw] w-[90vw]  z-20 top-2 left-[50%] -translate-x-[50%] shadow-sm shadow-white ">
              <ol className="flex flex-wrap justify-center">
                {props.dispAgents.map((agent, index) => (
                  <li className="m-1" key={index}>
                    <button onClick={() => selectAgent(agent)}>
                      <img
                        className="h-16 w-16 object-cover rounded-xl"
                        src={agent.img}
                        alt=""
                      />
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
      {chosen && currentAgent && (
        <div className="h-full hover:scale-110 transition-all duration-300 relative">
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-myLight rounded-full flex justify-center items-center text-xs"
            onClick={() => removeAgent(currentAgent)}
          >
            x
          </button>
          <img
            src={currentAgent.img}
            className="h-full w-full object-cover rounded-xl shadow-sm shadow-slate-300  hover:shadow-lg transition-all duration-300"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default AddAgentBox;
