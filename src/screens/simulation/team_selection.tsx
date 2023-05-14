import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Switch from "@mui/material/Switch";

interface props {
  team: String;
  isAttacker: boolean;
  switchAttack: () => void;
}
const TeamSelection: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">Team {props.team}</h1>
        <div>
          <h2 className="text-white font-medium">Attacks first</h2>
          <Switch
            checked={props.isAttacker}
            onClick={() => props.switchAttack()}
          />
        </div>
      </div>
      {/* select agents */}
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"f"}
            label="Agent"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
       
      </div>
    </div>
  );
};

export default TeamSelection;
