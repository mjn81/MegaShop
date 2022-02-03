import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"
const SearchInput = () => {
    return (  
        <div className="relative w-full">
            <FontAwesomeIcon icon={faSearch} className="absolute left-5 icon-center z-20 text-xl text-gray-400" />
            <input type="search" className=' bg-gray-100 py-4 px-12 w-full lg:w-4/6 rounded-xl focus:bg-white focus:drop-shadow-md focus:outline-none text-gray-600' placeholder="what do you want ..."/>
        </div>
       
    );
}
 
export default SearchInput;