import {Link} from "react-router-dom";

export const LinkButton = ({path , children}) => {
    return (
        <Link className="text-gray-400 border-gray-300 font-bold
        outline-none border-2 py-2 px-4 rounded-lg" to={path}>
            {children}
        </Link>
    );
};

export const LinkOutLined = ({path , children}) => {
    return (
        <Link to={path} className="text-lg outline-none text-gray-500">
            {children}
        </Link>
    );
}