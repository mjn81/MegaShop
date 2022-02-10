import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Rating = ({rate}) => {
    return (
        <div className="text-primary">
            {Array(Math.floor(Number(rate))).fill().map((_,index)=>(
                <FontAwesomeIcon icon={faStar} key={index} />
            ))}
        </div>
    );
};

export default Rating;
