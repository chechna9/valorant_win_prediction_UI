import axios from "axios";
import ModelInputInterface from "../utils/interfaces/model_input_interface";
import { TeamInterface } from "../utils/interfaces/team_interface";
import { mapAgentsToCateg, map_firstHalf_to_int, map_map_to_int } from "../utils/mapers";
import { MapsEnum } from "../utils/enums/maps_enum";
interface simulateInterface {
    map:MapsEnum;
    firstHalf:boolean;
    team1:TeamInterface;
    team2:TeamInterface;
}
const simulate = (props:simulateInterface)=>new Promise((resolve, reject) => {
  // mapping the props as the model
  const team1_categs = mapAgentsToCateg(props.team1);
  const team2_categs = mapAgentsToCateg(props.team2);
  const map_encoded = map_map_to_int(props.map);
  const first_half = map_firstHalf_to_int(props.firstHalf);
  const _data:ModelInputInterface ={
    Map:map_encoded,
    Team1_SideFirstHalf:first_half,
    t1_controller:team1_categs.filter((categ)=>categ==="controller").length,
    t1_duelist:team1_categs.filter((categ)=>categ==="duelist").length,
    t1_initiator:team1_categs.filter((categ)=>categ==="initiator").length,
    t1_sentinel:team1_categs.filter((categ)=>categ==="sentinel").length,
    t2_controller:team2_categs.filter((categ)=>categ==="controller").length,
    t2_duelist:team2_categs.filter((categ)=>categ==="duelist").length,
    t2_initiator:team2_categs.filter((categ)=>categ==="initiator").length,
    t2_sentinel:team2_categs.filter((categ)=>categ==="sentinel").length,
  }

  
  const hosted = "http://127.0.0.1:5000";
  
    axios
      .post(hosted + "/predict", {
        headers: {
          "Content-Type": "application/json",
        },
        data:_data,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
 
});

export default simulate;
