import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar , faTags , faBars , faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";
import { Link } from "react-router-dom";
export const Card = ({children}) => {
    return ( 
        <div className="shadow-sm border-2 col-span-1  bg-white rounded-md p-6 transition-shadow duration-200 ease-out hover:shadow-xl">
          
                {children}
            
        </div>
      );
}
 
export const ProductCard = ({id , title , price , category , image , rate})=>{
    return(
        <Card key={id} >
                <Link to={`/productPage/${id}`}>
                    <div className="h-80 overflow-hidden ">
                        <img className="w-full object-cover" src={image} alt={title} />
                    </div>
                </Link>
            <section className="my-3">
                    <Link to={`/productPage/${id}`}>
                        <h4 className="font-bold ">
                            {title}
                        </h4>
                        <section className="flex justify-between text-gray-500 my-4">
                            <h6 className="">
                                <FontAwesomeIcon icon={faTags} />
                                <span className="mx-2">${price}</span>
                            </h6>
                            <p>
                                <FontAwesomeIcon icon={faBars} />
                                <span className="m-2">{category}</span>
                            </p>
                            <div className="text-primary">
                                {Array(Math.floor(Number(rate))).fill().map((_,index)=>(
                                    <FontAwesomeIcon icon={faStar} key={index} />
                                ))}
                            </div>
                        </section>
                    </Link>
                    <div>
                        <Button textColor='primary' borderColor='secondary-200'>
                            Add to Cart
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Button>
                    </div>
            </section>
        
        </Card>
    );
}
