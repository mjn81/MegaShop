import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Input = ({type="text" , placeHolder , id=null , name=null }) => {
    return (
        <input type={type} id={id ? id : ""} name={name ? name : ""}
               className='block bg-gray-100 py-4 px-6 w-full rounded-xl
               text-lg focus:drop-shadow-md focus:outline-none text-gray-600'
               placeholder={placeHolder} />
    );
}
export const SearchInput = () => {
    return (  
        <div className="relative w-full">
            <FontAwesomeIcon icon={faSearch} className="absolute left-5 icon-center
            z-20 text-xl text-gray-400" />
            <input type="search" className=' bg-gray-100 py-4 px-12 w-full text-lg lg:w-4/6
            rounded-xl focus:bg-white focus:drop-shadow-md focus:outline-none text-gray-600'
                   placeholder="what do you want ..."/>
        </div>
       
    );
}

export const FormInput = ({haveSpace=false , title , type="text" , name , id , placeHolder=""}) => {
    return (
        <div className={haveSpace ? "mt-6 mb-8" : ""}>
            <label className="text-lg mb-3 block" htmlFor={id}>{title} :</label>
            <Input id={id} type={type} name={name} placeHolder={placeHolder} />
        </div>
    );
}
