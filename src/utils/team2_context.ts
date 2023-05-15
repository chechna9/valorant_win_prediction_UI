import  { createContext } from 'react';

import { TeamInterface } from './interfaces/team_interface';

interface TeamContextInterface{
    team2:TeamInterface;
    setTeam2:React.Dispatch<React.SetStateAction<TeamInterface>>;
}

const Team2Context = createContext<TeamContextInterface | null>(null);


export default Team2Context;