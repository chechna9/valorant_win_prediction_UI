import { MapsEnum } from "./enums/maps_enum";
import { TeamInterface } from "./interfaces/team_interface";
// what the encoder user
const agent_categ = {
  jett: "duelist",
  chamber: "sentinel",
  sova: "initiator",
  viper: "controller",
  skye: "initiator",
  astra: "controller",
  raze: "duelist",
  sage: "sentinel",
  kayo: "initiator",
  killjoy: "sentinel",
  reyna: "duelist",
  cypher: "sentinel",
  breach: "initiator",
  omen: "controller",
  brimstone: "controller",
  phoenix: "duelist",
  yoru: "duelist",
};
// what the encoder user
const firstHalf_encode = {
  deffend: 0,
  attack: 1,
};
// what the encoder user
const map_encode = {
  ascent: 0,
  bind: 1,
  breeze: 2,
  fracture: 3,
  haven: 4,
  icebox: 5,
  split: 6,
};

const mapAgentsToCateg = (team: TeamInterface) => {
  const categs = team.agents.map((agent) => agent_categ[agent.agent]);
  return categs;
};
const map_firstHalf_to_int = (firstHalf: boolean) => {
    return firstHalf_encode[firstHalf ? "attack" : "deffend"];
};
const map_map_to_int = (map: MapsEnum) => {
    return map_encode[map];
};
export { mapAgentsToCateg,map_firstHalf_to_int,map_map_to_int };
