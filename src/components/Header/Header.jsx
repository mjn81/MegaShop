import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Button , ButtonOutline} from '../core';
import {SearchInput} from '../core';
import Nav from './Nav';
const Header = () => {
    
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
           <Nav />
        </header>
     );
}
 
export default Header;