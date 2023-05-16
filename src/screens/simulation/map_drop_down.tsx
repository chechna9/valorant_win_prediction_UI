import { useState } from "react";
import MapInterface from "../../utils/interfaces/map_interface";
import { all_maps } from "../../utils/consts";

interface MapDropDownProps {
    map: MapInterface;
    setMap: React.Dispatch<React.SetStateAction<MapInterface>>;
}
const MapDropDown = (props:MapDropDownProps) => {
  
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-xs bg-myDark2 p-2 rounded-3xl">
      <button
        className="mx-auto flex justify-center items-center text-white font-medium"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.map.name}
        <img src={props.map.img} className="ml-2 w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-lg" alt="" />
      </button>
      {open && (
        <ul className="">
          {all_maps.map((_map, index) => {
            if (_map !== props.map)
              return (
                <li
                onClick={()=>props.setMap(_map)}
                  key={index}
                  className="mx-auto flex justify-between items-center text-white font-medium mt-1 cursor-pointer hover:bg-myLight2"
                >
                  {_map.name}
                  <img
                    src={_map.img}
                    className="ml-2 w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-md"
                    alt=""
                  />
                </li>
              );
            return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default MapDropDown;
