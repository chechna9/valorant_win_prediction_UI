import {
  astra,
  breach,
  brimstone,
  chamber,
  cypher,
  jett,
  kayo,
  killjoy,
  omen,
  phoenix,
  raze,
  reyna,
  sage,
  skye,
  sova,
  viper,
  yoru,
  ascent,
  bind,
  fracture,
  breeze,
  heaven,
  icebox,
  split,
} from "./assets";
import { AgentEnum } from "./enums/agents_enum";
import { AgentInterface } from "./interfaces/agent_interface";
import MapInterface from "./interfaces/map_interface";

const all_agents: Array<AgentInterface> = [
  {
    agent: AgentEnum.jett,
    img: jett,
  },
  {
    agent: AgentEnum.chamber,
    img: chamber,
  },
  {
    agent: AgentEnum.sova,
    img: sova,
  },
  {
    agent: AgentEnum.viper,
    img: viper,
  },
  {
    agent: AgentEnum.skye,
    img: skye,
  },
  {
    agent: AgentEnum.astra,
    img: astra,
  },
  {
    agent: AgentEnum.raze,
    img: raze,
  },
  {
    agent: AgentEnum.sage,
    img: sage,
  },
  {
    agent: AgentEnum.kayo,
    img: kayo,
  },
  {
    agent: AgentEnum.killjoy,
    img: killjoy,
  },
  {
    agent: AgentEnum.reyna,
    img: reyna,
  },
  {
    agent: AgentEnum.cypher,
    img: cypher,
  },
  {
    agent: AgentEnum.breach,
    img: breach,
  },
  {
    agent: AgentEnum.brimstone,
    img: brimstone,
  },
  {
    agent: AgentEnum.phoenix,
    img: phoenix,
  },
  {
    agent: AgentEnum.yoru,
    img: yoru,
  },
  {
    agent: AgentEnum.omen,
    img: omen,
  },
];
const all_maps: Array<MapInterface> = [
  { name: "Ascent", img: ascent },
  { name: "Bind", img: bind },
  { name: "Breeze", img: breeze },
  { name: "Fracture", img: fracture },
  { name: "Haven", img: heaven },
  { name: "Icebox", img: icebox },
  { name: "Split", img: split },
];
export { all_maps, all_agents };
