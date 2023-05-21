import axios from "axios";
import ModelInputInterface from "../utils/interfaces/model_input_interface";
import { TeamInterface } from "../utils/interfaces/team_interface";
import { mapAgentsToCateg, map_map_to_int } from "../utils/mapers";
import { MapsEnum } from "../utils/enums/maps_enum";
interface simulateInterface {
    map:MapsEnum;
    firstHalf:boolean;
    team1:TeamInterface;
    team2:TeamInterface;
}
const simulate = (props:simulateInterface)=>new Promise((resolve, reject) => {
  const team1_categs = mapAgentsToCateg(props.team1);
  const map_encoded = map_map_to_int(props.map);
  resolve(map_encoded);
  // const hosted = "localhost:5000";
  // const _data: ModelInputInterface = {
  //   t1_controller: 1,
  //   t1_duelist: 1,
  //   t1_initiator: 1,
  //   t1_sentinel: 1,
  //   t2_controller: 1,
  //   t2_duelist: 1,
  //   t2_initiator: 1,
  //   t2_sentinel: 1,
  //   Map: 1,
  //   Team1_SideFirstHalf: 1,
  // };
  //   axios
  //     .post(hosted + "/predict", {
  //       headers: {},
  //       data:_data,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       resolve([response.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       reject(err);
  //     });
});

export default simulate;
