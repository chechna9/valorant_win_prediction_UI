import { useState } from "react";
import { addIcon } from "../../utils/assets";
import { AgentInterface } from "../../utils/interfaces/agent_interface";
interface AddAgentBoxInterface {
  dispAgents: AgentInterface[];
  setDispAgents: React.Dispatch<React.SetStateAction<AgentInterface[]>>;
}
const AddAgentBox = (props: AddAgentBoxInterface) => {
  const selectAgent = (agent: AgentInterface) => {
    let tempDisp = props.dispAgents;
    // deleting the agent
    tempDisp.splice(tempDisp.indexOf(agent), 1);
    props.setDispAgents(tempDisp);
    setShowList(false);
    setChosen(true);
    setCurrentAgent(agent);
  };
  const removeAgent = (agent:AgentInterface) => {
    let tempDisp = props.dispAgents;
    // adding the agent
    tempDisp.push(agent)
    props.setDispAgents(tempDisp);
    setCurrentAgent(null);
    setChosen(false);
  };
  const [chosen, setChosen] = useState(false);
  const [showList, setShowList] = useState(false);
  const [currentAgent, setCurrentAgent] = useState<AgentInterface | null>(null);
  return (
    <div className="w-28 h-28 bg-myDark2 flex flex-col justify-center items-center relative">
      {!chosen && (
        <div>
          <button
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <img
              className="transition-all  hover:scale-110 duration-300"
              src={addIcon}
              alt="add agent"
            />
          </button>
          {/* list of agents to select */}
          {showList && (
            <div className="bg-myLight2 p-4 absolute left-[50%]  -translate-x-[50%] rounded-lg w-[30vw] z-10">
              <ol className="flex flex-wrap">
                {props.dispAgents.map((agent) => (
                  <li className="m-1">
                    <button onClick={() => selectAgent(agent)}>
                      <img
                        className="h-10 w-10 object-cover"
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
        <div className="bg-cyan-200 h-full">
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-myLight rounded-full flex justify-center items-center text-xs"
            onClick={() => removeAgent(currentAgent)}
          >
            x
          </button>
          <img
            src={currentAgent.img}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default AddAgentBox;
