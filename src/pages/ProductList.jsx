import { useParams } from "react-router-dom";
import { useFetchCategory } from "../api";
import { useState } from "react"
import ListCard from "../components/Wrappers/ListCard";
import Pagination from "../components/Pagination/Pagination";
const ProductList = () => {
    const {category , start , end} = useParams();
    const [limit , setLimit] = useState(start&&end ? {start:+start , end:+end} : {start:0,end:15});
    const [res , counts , isLoading , error]  = useFetchCategory(category,limit);
    const pageNum = Math.ceil(counts/15);
    const active = limit.start/15;
    return ( 
        <main className="w-3/4 mx-auto my-6 shadow-sm">
            <ListCard data={res} isLoading={isLoading} title={category.toUpperCase()} /> 
            <div className="w-fit mx-auto py-8">
                <Pagination pageNumber={pageNum} category={category} active={active} setLimit={setLimit} />
            </div>
        </main>
    );
}
 
export default ProductList;

