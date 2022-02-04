import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faBars} from '@fortawesome/free-solid-svg-icons'
import {Button , ButtonOutline} from '../core';
import SearchInput from '../core/Input';
import {Link} from "react-router-dom";
const Header = () => {
    const categorytmp = [
        {
            "id":2,
            "title":"Market",
            "route":"/cat"
        },
        {
            "id":3,
            "title":"Discount's",
            "route":"/cat"
        },
        {
            "id":4,
            "title":"Suggestion's",
            "route":"/cat"
        },
        {
            "id":5,
            "title":"Q&A",
            "route":"/cat"
        }
    ];
    return ( 
        <header className='shadow-md'>
            <section className='lg:grid lg:grid-cols-8 text-center text-md py-4'>
                <div className='font-bold col-span-1  text-primary text-4xl lg:text-3xl flex items-center justify-center '>
                    <span>MegaShop</span>
                </div>
                <div className='col-span-6 text-left flex items-center m-4 lg:my-0'>
                    <SearchInput />
                </div>
                <div className='col-span-1 flex items-center text-center justify-center'>
                    <Button>
                        login
                    </Button>
                    <span className='border-l-2 h-8 mx-4 block border-gray-100'></span>
                   <ButtonOutline>
                         <FontAwesomeIcon icon={faShoppingCart} />
                   </ButtonOutline>
                </div>
            </section>
            <section>
                <nav className='mx-10 my-4 lg:my-0'>
                    <ul className='flex justify-center lg:justify-start text-gray-600 text-center '>
                        <li key={0} className='header-nav-list '>        
                            <Link className='block py-4 px-3' to="/cat"> 
                                <FontAwesomeIcon icon={faBars} />
                                    <span className='pl-1'>
                                        Category
                                    </span>
                                </Link>
                        </li>
                        {
                            categorytmp.map(category=>(
                                <li key={category.id} className='header-nav-list'>
                                    <Link className='block px-3 py-4' to={category.route}> 
                                        {category.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
        </header>
     );
}
 
export default Header;