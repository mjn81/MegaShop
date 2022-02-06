import { useFetchLatest } from "../../hooks/useFetch";
import { LatestProductCard } from "../core";

const Offers = () => {
    const [res , isLoading , error] = useFetchLatest(6);
    console.log(res);
    return (
        <div className="p-6">
           <h2 className="text-4xl mb-6 border-b-2 pb-4 border-secondary-200">Latest Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {res?.map(product=>(
                    <LatestProductCard id={product.id} title={product.title} price={product.price}
                    image={product.image} rate={product.rating.rate} category={product.category} /> 
                ))}
            </div>
        </div>
    );
}
 
export default Offers;