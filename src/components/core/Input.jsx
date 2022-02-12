import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

export const Input = ({type = "text", placeHolder, id = null, name = null}) => {
    return (
        <input type={type} id={id ? id : ""} name={name ? name : ""}
               className='block bg-gray-100 py-4 px-6 w-full rounded-xl
               text-lg focus:drop-shadow-md focus:outline-none text-gray-600 focus:bg-white'
               placeholder={placeHolder}/>
    );
}
export const SearchInput = ({reference}) => {
    return (
        <div className="relative w-full">
            <FontAwesomeIcon icon={faSearch} className="absolute left-5 icon-center
            z-20 text-xl text-gray-400"/>
            <input ref={reference} type="search" className=' bg-gray-100 py-4 px-12 w-full text-lg lg:w-4/6
            rounded-xl focus:bg-white focus:drop-shadow-md focus:outline-none text-gray-600'
                   placeholder="what do you want ..."/>
        </div>

    );
}

export const FormInput = ({haveSpace = false, title, type = "text", name, id, placeHolder = ""}) => {
    return (
        <div className={haveSpace ? "mt-6 mb-8" : ""}>
            <label className="text-lg mb-3 block" htmlFor={id}>{title} :</label>
            <Input id={id} type={type} name={name} placeHolder={placeHolder}/>
        </div>
    );
}

export const AddableInput = ({value, setValue}) => {
    const onPlusHandler = () => {
        setValue(value + 1);
    }
    const onChange = e => {
        const v = e.currentTarget.value;
        if (v === "")
            setValue(0);
        if (!+v)
            return
        setValue(+v);
    }
    const onMinusHandler = () => {
        setValue(value - 1 < 0 ? 0 : value - 1);
    }
    return (
        <div className="relative overflow-hidden rounded-lg border-2">
            <input type="text" onChange={onChange} value={value}
                   className="block w-full text-center outline-2 outline-secondary-100 px-4 py-2"/>
            <button onClick={onMinusHandler} className="absolute h-full top-0.5 -translate-x-0.5 left-4">
                <FontAwesomeIcon
                    icon={faMinus}/>
            </button>
            <button onClick={onPlusHandler} className="absolute h-full top-0.5 -translate-x-0.5  right-4">
                <FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
}