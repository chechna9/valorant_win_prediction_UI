import AddAgentBox from "./add_agent_box";
import ToggleSwitch from "../../components/toggle";
import { AgentInterface } from "../../utils/interfaces/agent_interface";

interface props {
  team: string;
  isAttacker: boolean;
  switchAttack: () => void;
  dispAgents: AgentInterface[];
  setDispAgents: React.Dispatch<React.SetStateAction<AgentInterface[]>>;
}
const TeamSelection: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">Team {props.team}</h1>
        <div>
          <h2 className="text-white font-medium">Attacks first</h2>
          <ToggleSwitch
            checked={props.isAttacker}
            onChange={props.switchAttack}
          />
        </div>
      </div>
      {/* select agents */}
      <div>
        <AddAgentBox
          dispAgents={props.dispAgents}
          setDispAgents={props.setDispAgents}
          team={props.team}
        />
        <AddAgentBox
          dispAgents={props.dispAgents}
          setDispAgents={props.setDispAgents}
          team={props.team}
        />
        <AddAgentBox
          dispAgents={props.dispAgents}
          setDispAgents={props.setDispAgents}
          team={props.team}
        />
        <AddAgentBox
          dispAgents={props.dispAgents}
          setDispAgents={props.setDispAgents}
          team={props.team}
        />
        <AddAgentBox
          dispAgents={props.dispAgents}
          setDispAgents={props.setDispAgents}
          team={props.team}
        />
      </div>
    </div>
  );
};

export default TeamSelection;
