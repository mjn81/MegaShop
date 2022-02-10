import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus , faTags , faBars} from "@fortawesome/free-solid-svg-icons";
import { Button , Card} from ".";
import { Link } from "react-router-dom";
import Rating from "./Rating";

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
                          <Rating rate={rate} />
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
