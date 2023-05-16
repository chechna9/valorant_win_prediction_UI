import  { createContext } from 'react';
import { TeamInterface } from '../interfaces/team_interface';


interface Team2ContextInterface{
    team2:TeamInterface;
    setTeam2:React.Dispatch<React.SetStateAction<TeamInterface>>;
}

const Team2Context = createContext<Team2ContextInterface | null>(null);


export default Team2Context;