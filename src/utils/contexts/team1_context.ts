import  { createContext } from 'react';

import { TeamInterface } from '../interfaces/team_interface';

interface TeamContextInterface{
    team1:TeamInterface;
    setTeam1:React.Dispatch<React.SetStateAction<TeamInterface>>;
}

const Team1Context = createContext<TeamContextInterface | null>(null);


export default Team1Context;