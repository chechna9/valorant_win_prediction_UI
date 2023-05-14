import { CustomButtonInterface } from "../utils/interfaces/custom_button_interface";

const CustomButton:React.FC<CustomButtonInterface> = (props) => {
    return ( 
        <button {...props}>
            {props.children}
        </button>
     );
}
 
export default CustomButton;