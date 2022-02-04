import { Link } from "react-router-dom";
;

const SubMenu = ({item}) => {
    return ( 
        <li className='my-2 border-y-2 border-white hover:bg-gray-50 hover:border-gray-100'>
            <Link to={item.path} className='block py-3 px-5'>
                {item.title}
            </Link>
            {item.subMenu && <div className=" custom-shadow-right top-0 left-full grid grid-cols-5 gap-24 py-4 px-2 w-max rounded-br-xl absolute h-full border-l-2 bg-white">
                {item.subMenu.map(subElem=>(
                    <div className="col-span-1 px-2">
                        <Link to={subElem.path} className=" border-l-2 border-secondary-200 px-1 hover:text-primary font-bold">{subElem.title}</Link>
                        {subElem.subMenu && 
                        <ul className="text-gray-500 font-light ">
                            {subElem.subMenu.map(listItem =>(
                                <li className="pt-3">
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