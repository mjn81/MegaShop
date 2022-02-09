import { Link } from "react-router-dom";
const Pagination = ({pageNumber , category , active , setLimit}) => {
    if(pageNumber < 8){
        return (
            <ul className="flex border-2 w-fit border-r-0 border-primary rounded-lg overflow-hidden font-bold text-gray-600">
                {Array(pageNumber).fill().map((_,index)=>(
                    <li key={index} className="border-r-2 border-primary" >
                        <Link to={`/category/${category}/${index*15}/${(index+1)*15}`} 
                        className={`block py-2 px-3 ${active===index ? 'bg-primary text-white' : ''}`} 
                        onClick={()=>setLimit({start:index*15 , end:(index+1)*15})}>
                            {index+1}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
    else {
        return (  
            <ul className="flex border-2 w-fit border-r-0 border-primary rounded-lg overflow-hidden font-bold text-gray-600">
                
                {active > 2&& (<li className="border-r-2 border-primary px-3 py-1">...</li>)}
                
                {Array(active < pageNumber-4 ? 3 : pageNumber-active-2).fill().map((_,index)=>(
                    index+active>0 &&<li key={index} className="border-r-2 border-primary" >
                        <Link to={`/category/${category}/${(index+active-1)*15}/${(index+active)*15}`} 
                        className={`block py-2 px-3 ${active===(index+active-1) ? 'bg-primary text-white' : ''}`} 
                        onClick={()=>setLimit({start:(index+active-1)*15 , end:(index+active)*15})}>
                            {index+active}
                        </Link>
                    </li>
                ))}
                
                {active < pageNumber-4 &&(<li className="border-r-2 border-primary py-1 px-3">...</li>)}
                
                {Array(3).fill().map((_,index)=>(
                    active<pageNumber && <li key={pageNumber+(index-3)} className="border-r-2 border-primary" >
                        <Link to={`/category/${category}/${(pageNumber+(index-3))*15}/${(pageNumber+(index-2))*15}`} 
                        className={`block py-2 px-3 ${active===(pageNumber+(index-3)) ? 'bg-primary text-white' : ''}`} 
                        onClick={()=>setLimit({start:(pageNumber+(index-3))*15 , end:(pageNumber+(index-2))*15})}>
                            {(pageNumber+(index-2))}
                        </Link>
                    </li>
                ))}
            </ul>
            );
    }
}
 
export default Pagination;