import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Button, SearchInput} from '../core';
import Nav from "./Nav";
import {LinkButton, LinkOutLined} from "../core/Link";
import {authActions} from "../../redux/AutheSlice";

const Header = () => {
    const searchRef = useRef();
    const navigator = useNavigate();

    const logState = useSelector(state => state.auth.loggedIn);
    const quantity = useSelector(state => state.cart.quantity);

    const dispatch = useDispatch();

    const onLogoutHandler = () =>{
        dispatch(authActions.logOut());
    }


    const onSearchHandler = e => {
        e.preventDefault();
        const key = searchRef.current.value;
        navigator(`/Search/${key}`, {replace: true});
    }
    return (
        <header className='shadow-md'>
            <section className='lg:grid lg:grid-cols-8 text-center text-md py-4'>
                <div
                    className='font-bold col-span-1  text-primary text-4xl lg:text-3xl flex items-center justify-center '>
                    <Link to="/home">MegaShop</Link>
                </div>
                <form onSubmit={onSearchHandler}
                      className='col-span-6 text-left flex items-center m-4 lg:my-0'>
                    <SearchInput reference={searchRef}/>
                </form>
                <div className='col-span-1 text-center'>
                    {!logState&&(<LinkButton path="/Authentication/Login">
                            Login
                        </LinkButton>
                    )}
                    {logState&&(
                        <div className="flex justify-center items-center">
                            <div>
                                <Link to="/profile" className="hover:text-primary hover:underline">
                                    {/* adding username to this part */}
                                    profile
                                </Link>
                                <Button onSubmit={onLogoutHandler}>
                                    Logout
                                </Button>
                            </div>
                            <span className='border-l-2 h-8 mx-4 block border-gray-100'> </span>
                            <LinkOutLined path="/Cart">
                                <div className="relative">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <div className="absolute top-3 left-2 text-white bg-primary w-4 h-4 text-xs rounded-xl">
                                        {quantity}
                                    </div>
                                </div>
                            </LinkOutLined>
                        </div>
                    )}
                </div>
            </section>
            <Nav/>
        </header>
    );
}

export default Header;