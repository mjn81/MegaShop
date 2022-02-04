import { useState } from "react";
import { Link } from "react-router-dom"; 
import SubMenu from './SubMenu';
const MenuItem = ({item}) => {
      const [isHovered , setIsHovered] = useState(false);
    const mouseEnterHandler = ()=>{
        setIsHovered(true);
    }
    const mouseLeaveHandler = ()=>{
        setIsHovered(false);
    }
    return (  
        <li key={item.id} className='header-nav-list relative' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <Link className='block px-3 py-4' to={item.route}> 
                {item.icon && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon.path} />
                </svg>
                }
            <span className={item.icon ? 'pl-1' : ''}>
                {item.title}
            </span>
            </Link>
            {item.subMenu && 
            <ul className='absolute rounded-bl-xl bg-white py-2 custom-shadow-left w-max text-left ' hidden={!isHovered}>
                {item.subMenu.map((subMenu,i)=>(
                    <SubMenu key={subMenu.id} item={subMenu} isActive={i===0 ? true : false} />
                ))}
            </ul>
            }
        </li>
    
    );
}
 
export default MenuItem;