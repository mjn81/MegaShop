import {useParams} from "react-router-dom";

const SearchResPage = () => {
    const {key} = useParams();
    // TODO: because of api shortcomings this part will be added later
    return (
        <div className="text-4xl flex items-center justify-center text-center h-screen text-gray-600">
            <p>Your results will be here soon...</p>
        </div>
    );
};

export default SearchResPage;
