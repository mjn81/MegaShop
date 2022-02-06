import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const Card = ({children}) => {
    return (
        <div className="shadow-sm border-2 col-span-1 bg-white rounded-md p-6">
            {children}
        </div>
      );
}
 
export const LatestProductCard = ({id , title , price , category , image , rate})=>{
    return(
        <Card key={id}>
            <div className="h-96 overflow-hidden border-2">
                <img className="w-full object-cover" src={image} alt={title} />
            </div>
            <section className="my-3">
                <div>
                    {title}
                </div>
                <div>
                <span>
                    {price} 
                </span>
                <span>
                    {category}
                </span>
                </div>
                <div>
                    {Array(Math.floor(Number(rate))).fill().map(()=>(
                        <FontAwesomeIcon icon={faStar} />
                    ))}
                </div>
            </section>
        
        </Card>
    );
}