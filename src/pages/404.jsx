import {useNavigate} from "react-router-dom";
import { ButtonOutline} from "../components/core";

const NotFound = () => {
    const navigator = useNavigate();
    const onBackHandler = () => {
        navigator(-1);
    }
    return (
        <div className="text-center flex flex-col justify-center items-center text-gray-500 text-6xl">
            <p className="mt-56">404 NotFound :)</p>
            <p className="text-xl">
                we couldn't find your page
            </p>
            <div className="my-28 underline">
                <ButtonOutline onSubmit={onBackHandler}>
                    GO Back to previous page
                </ButtonOutline>
            </div>
        </div>
    );
};

export default NotFound;
