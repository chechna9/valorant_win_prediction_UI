import Switch from "@mui/material/Switch";

interface props {
  team: String;
  isAttacker: boolean;
  switchAttack : ()=>void;
}
const TeamSelection: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">Team {props.team}</h1>
        <div>
            <h2 className="text-white font-medium">Attacks first</h2>
          <Switch checked={props.isAttacker} onClick={()=>props.switchAttack()}/>
        </div>
      </div>
      {/* select agents */}
      <div>

      </div>
    </div>
  );
};

export default TeamSelection;