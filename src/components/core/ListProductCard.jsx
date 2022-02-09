import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar , faTags , faBars} from "@fortawesome/free-solid-svg-icons";
import { Card } from ".";
import { Link } from "react-router-dom";

export const ListProductCard = ({id , title , price , category , image , rate})=>{
    return(
        <Card key={id} >
            <Link to={`/productPage/${id}`}>
                <div className="h-60 overflow-hidden ">
                    <img className="w-full object-cover" src={image} alt={title} />
                </div>
                <section className="mt-3">
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
                </section>
            </Link>
        </Card>
    );
}
