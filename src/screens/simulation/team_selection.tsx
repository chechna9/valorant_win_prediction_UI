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
  const flex_direction =
    props.team === "1" ? "sm:flex-row" : "sm:flex-row-reverse";
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-white sm:text-2xl text-md font-bold">
          Team {props.team}
        </h1>
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center space-x-1">
          <ToggleSwitch
            checked={props.isAttacker}
            onChange={props.switchAttack}
          />
          <span className="text-[10px] font-medium text-gray-900 dark:text-white">
            Attacks first
          </span>
        </div>
      </div>
      {/* select agents */}
      <div className={"flex flex-col flex-wrap " + flex_direction}>
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
