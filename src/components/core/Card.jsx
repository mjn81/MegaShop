export const Card = ({children}) => {
    return (
        <div className="shadow-sm col-span-1 bg-white rounded-md">
            {children}
        </div>
      );
}
 
export const LatestProductCard = ({id , title , price , category , image , rate})=>{
    return(
        <Card key={id}>
            <div className="p-6 h-96 overflow-hidden border-2 m-6">
                <img className="w-full object-cover" src={image} alt={title} />
            </div>
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
                {rate}
            </div>
        </Card>
    );
}