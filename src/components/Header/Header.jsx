import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {SearchInput} from '../core';
import Nav from "./Nav";
import {Link, useNavigate} from "react-router-dom";
import {LinkButton, LinkOutLined} from "../core/Link";
import {useRef} from "react";

const Header = () => {
    const searchRef = useRef();
    const navigator = useNavigate();
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
                <div className='col-span-1 flex items-center text-center justify-center'>
                    <LinkButton path="/Authentication/Login">
                        Login
                    </LinkButton>
                    <span className='border-l-2 h-8 mx-4 block border-gray-100'> </span>
                    <LinkOutLined path="/Cart">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </LinkOutLined>
                </div>
            </section>
            <Nav/>
        </header>
    );
}

export default Header;