import { CustomButtonInterface } from "../utils/interfaces/custom_button_interface";
const CustomButton: React.FC<CustomButtonInterface> = (props) => {
  return (
    <button
      {...props}
      className="text-lg font-bold text-white bg-myLight transition-all duration-200 hover:shadow-myDark2 shadow-myDark2 hover:shadow-[5px_5px] hover:-translate-x-1 hover:-translate-y-1 py-4 px-6 w-[40vw]"
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
