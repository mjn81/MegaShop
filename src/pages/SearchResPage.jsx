import {useParams} from "react-router-dom";

const SearchResPage = () => {
    const {key} = useParams();
    // TODO: because of api shortcomings this part will be added later
    return (
        <div>
            Your results will be here
        </div>
    );
};

export default SearchResPage;
