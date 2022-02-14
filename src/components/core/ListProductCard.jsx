import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTags , faBars} from "@fortawesome/free-solid-svg-icons";
import { Card } from ".";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export const ListProductCard = ({product})=>{
    return(
        <Card key={product.id} >
            <Link to={`/productPage/${product.id}`}>
                <div className="h-60 overflow-hidden ">
                    <img className="w-full object-cover" src={product.image} alt={product.title} />
                </div>
                <section className="mt-3">
                        <h4 className="font-bold ">
                            {product.title}
                        </h4>
                        <section className="flex justify-between text-gray-500 my-4">
                            <h6 className="">
                                <FontAwesomeIcon icon={faTags} />
                                <span className="mx-2">${product.price}</span>
                            </h6>
                            <p>
                                <FontAwesomeIcon icon={faBars} />
                                <span className="m-2">{product.category}</span>
                            </p>
                            <div className="text-primary">
                                <Rating rate={product.rating.rate} />
                            </div>
                        </section>                    
                </section>
            </Link>
        </Card>
    );
}
