import { Link } from "react-router-dom";
import {useState} from 'react';

const SubMenu = ({item, isActive}) => {
    const [isHovered , setIsHovered] = useState(isActive);
    const mouseEnterHandler = ()=>{
        setIsHovered(true);
    }
    const mouseLeaveHandler = ()=>{
        setIsHovered(isActive);
    }
    return ( 
        <li className='my-2  border-white hover:bg-gray-50' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <Link to={item.path} className='block py-3 px-5 hover:text-primary'>
                {item.title}
            </Link>
            {item.subMenu && <div id="menu-hover" className={`${isActive ? 'custom-shadow-right' : ''} top-0 left-full h-full grid grid-cols-4 gap-x-28 gap-y-6 py-4 px-2 rounded-br-lg absolute w-max border-l-2 border-gray-50 bg-white ${isHovered ? 'active' : 'deactive'}`}>
                {item.subMenu.map(subElem=>(
                    <div key={subElem.id} className="col-span-1 px-4 h-fit">
                        <Link to={subElem.path} className=" border-l-2 border-secondary-200 px-1 hover:text-primary font-bold">{subElem.title}</Link>
                        {subElem.subMenu && 
                        <ul key={subElem.id} className="text-gray-500 font-light ">
                            {subElem.subMenu.map(listItem =>(
                                <li key={listItem.id} className="pt-3">
                                <Link to={listItem.path} className="block hover:text-primary">{listItem.title}</Link></li>
                            ))}    
                        </ul>
                        }
                    </div>
                ))}
            </div>}
        </li>
     );
}
 
export default SubMenu;