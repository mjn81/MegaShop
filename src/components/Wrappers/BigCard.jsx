import { ProductCard } from "../core";
const BigCard = ({data , isLoading , title}) => {
    return (
        <div className="p-6">
           <h2 className="text-4xl mb-6 border-b-2 pb-4 border-secondary-200">{title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {!isLoading&&data?.map(product=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      );
}
 
export default BigCard;