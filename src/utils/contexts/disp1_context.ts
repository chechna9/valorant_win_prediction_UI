import  { createContext } from 'react';
import { AgentInterface } from '../interfaces/agent_interface';



interface TeamContextInterface{
    disp1:AgentInterface[];
    setDisp1:React.Dispatch<React.SetStateAction<AgentInterface[]>>;
}

const Disp1Context = createContext<TeamContextInterface | null>(null);


export default Disp1Context;