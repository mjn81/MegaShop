import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
const CheckBox = ({text , onClick}) => {
    const id = 'chk'+text.replaceAll(' ', '-').toLowerCase();
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="w-fit flex items-center cursor-pointer"
             onClick={()=>{
                 setIsChecked(!isChecked)
                 onClick();
             }}>
            <span className={`block w-6 h-6 rounded-md border-secondary-200 border-2 flex items-center justify-center 
            ${isChecked ? 'bg-secondary-200' : ''}`}>
                <FontAwesomeIcon icon={faCheck} className={isChecked ? 'text-white' : 'text-transparent'} />
            </span>
            <p className="ml-2">{text}</p>
        </div>
    );
};

export default CheckBox;
