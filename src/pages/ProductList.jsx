import { useParams } from "react-router-dom";
import { useFetchProduct } from "../hooks";
import { useState } from "react"
import BigCard from "../components/BigCard/BigCard";
const ProductList = () => {
    const {category , limit} = useParams();
    const [lim , setLim] = useState(limit ? Number(limit)  : 15);
    const [res , isLoading , error]  = useFetchProduct(lim,category);
    console.log(res);
    return (  
       <BigCard data={res} isLoading={isLoading} title={category.toUpperCase()} /> 
    );
}
 
export default ProductList;