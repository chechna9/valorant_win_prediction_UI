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
    <div className="mx-auto bg-myDark2 p-2 rounded-3xl">
      <button
        className="mx-auto flex sm:flex-row flex-col justify-center items-center text-white font-medium text-xs sm:text-sm"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.map.name.toUpperCase()}
        <img src={props.map.img} className="sm:ml-2 w-10 h-10 md:w-16 md:h-16 object-cover rounded-lg" alt="" />
      </button>
      {open && (
        <ul className="">
          {all_maps.map((_map, index) => {
            if (_map !== props.map)
              return (
                <li
                onClick={()=>props.setMap(_map)}
                  key={index}
                  className="mx-auto flex flex-row sm:justify-between justify-center  items-center text-white font-medium mt-1 cursor-pointer hover:bg-myLight2 text-xs"
                >
                  {_map.name.toUpperCase()}
                  <img
                    src={_map.img}
                    className="ml-2 w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-md hidden sm:block"
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
