import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar , faTags , faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";
export const Card = ({children}) => {
    return (
        <div className="shadow-sm border-2 col-span-1  bg-white rounded-md p-6 transition-shadow duration-200 ease-out hover:shadow-xl">
            {children}
        </div>
      );
}
 
export const LatestProductCard = ({id , title , price , category , image , rate})=>{
    return(
        <Card key={id}>
            <div className="h-80 overflow-hidden ">
                <img className="w-full object-cover" src={image} alt={title} />
            </div>
            <section className="my-3">
                <h4 className="font-bold ">
                    {title}
                </h4>
                <section className="flex justify-between text-gray-500 my-4">
                    <h6 className="">
                        <FontAwesomeIcon icon={faTags} />
                        <span className="mx-2">${price}</span>
                    </h6>
                    <p>
                        <FontAwesomeIcon icon={faPlusSquare} />
                        <span className="m-2">{category}</span>
                    </p>
                <div className="text-primary">
                    {Array(Math.floor(Number(rate))).fill().map(()=>(
                        <FontAwesomeIcon icon={faStar}  />
                    ))}
                </div>
                </section>
                <Button >
                    more Info
                </Button>
            </section>
        
        </Card>
    );
}