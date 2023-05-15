import { useState } from "react";
import { addIcon } from "../../utils/assets";

const AddAgentBox = () => {
  const [chosen, setChosen] = useState(false);
  return <div className="w-28 h-28 bg-myDark2 flex flex-col justify-center items-center">
    {
        !chosen && (
            <button>
                <img src={addIcon} alt="add agent" />
            </button>
        )
    }
  </div>;
};

export default AddAgentBox;
