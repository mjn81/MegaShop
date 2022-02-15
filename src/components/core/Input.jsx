import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";

import {cartActions} from "../../redux/CartSlice";

export const Input = ({type = "text", placeHolder, id = null, name = null , reference}) => {
    return (
        <input ref={reference} type={type} id={id ? id : ""} name={name ? name : ""}
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

export const FormInput = ({haveSpace = false, title, reference , type = "text", name, id, placeHolder = ""}) => {
    return (
        <div className={haveSpace ? "mt-6 mb-8" : ""}>
            <label className="text-lg mb-3 block" htmlFor={id}>{title} :</label>
            <Input id={id} type={type} name={name} placeHolder={placeHolder} reference={reference} />
        </div>
    );
}

export const AddableInput = ({value, setValue}) => {
    const onPlusHandler = () => {
        setValue(() => value + 1);
    }
    const onChange = e => {
        const v = e.currentTarget.value;
        if (v === "")
            setValue(1);
        if (!+v)
            return
        setValue(() => +v);
    }
    const onMinusHandler = () => {
        setValue(() => value - 1 < 1 ? 1 : value - 1);
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



export const ReduxAddableInput = ({product}) => {
    const dispatch = useDispatch();

    const onPlusHandler = () => {
        dispatch(cartActions.addToCart({ prod:product , quantity:1}))
    }

    const onMinusHandler = () => {
        dispatch(cartActions.removeFromCart({prodId:product.id , quantity:1}))
    }
    return (
        <div className="relative overflow-hidden rounded-lg border-2">
            <input type="text" readOnly={true} value={product.amount}
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

