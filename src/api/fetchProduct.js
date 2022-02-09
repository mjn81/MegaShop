import { useFetch } from "../hooks";
import { useEffect , useState } from "react";

export const useFetchProduct = (limit = null) =>{
    return useFetch('https://fakestoreapi.com/products' +  (limit ? `?limit=${limit}` : '') );
}

export const useFetchCategory = (category, limit) => {
    const [res , isLoading , error] = useFetch('https://fakestoreapi.com/products' );
}

export const useFetchLatest = (limit=5) =>{
    const [res , isLoading , error] = useFetchProduct(); 
    const [sortedRes , setSortedRes] = useState([]);
    useEffect(()=>{
        if(!isLoading){
            const tmp = [...res].sort((a,b)=>a-b); // because there is no date in the spicified api
            setSortedRes(tmp.slice(0,limit));
        }
    },[isLoading , res , limit]);
    return [sortedRes , isLoading, error];
}

export const useFetchPopulars = (limit=5) => {
    const [res , isLoading , error] = useFetchProduct();
    const [populars , setPopulars] = useState([]);
    useEffect(()=>{
        if(!isLoading){
            const tmp = [...res].sort((a,b)=>b.rating.rate-a.rating.rate);
            setPopulars(tmp.slice(0,limit));
        }
    } , [res, isLoading , limit]);
    return [populars , isLoading , error];
}
