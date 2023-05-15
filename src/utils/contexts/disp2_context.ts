import  { createContext } from 'react';
import { AgentInterface } from '../interfaces/agent_interface';



interface TeamContextInterface{
    disp2:AgentInterface[];
    setDisp2:React.Dispatch<React.SetStateAction<AgentInterface[]>>;
}

const Disp2Context = createContext<TeamContextInterface | null>(null);


export default Disp2Context;