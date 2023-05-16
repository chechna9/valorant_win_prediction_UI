import  { createContext } from 'react';

import { TeamInterface } from '../interfaces/team_interface';

interface Team1ContextInterface{
    team1:TeamInterface;
    setTeam1:React.Dispatch<React.SetStateAction<TeamInterface>>;
}

const Team1Context = createContext<Team1ContextInterface | null>(null);


export default Team1Context;