import { useFetchLatest } from "../../hooks/useFetch";
import { LatestProductCard } from "../core";

const Offers = () => {
    const [res , isLoading , error] = useFetchLatest(6);
    console.log(res);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6">
            {res?.map(product=>(
                <LatestProductCard id={product.id} title={product.title} price={product.price}
                image={product.image} rate={product.rating.rate} category={product.category} /> 
            ))}
        </div>
    );
}
 
export default Offers;