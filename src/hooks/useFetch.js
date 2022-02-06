import axios from "axios";
import { useState , useEffect } from "react";
export const useFetch = (url , data={}) => {
    const [error, setError] = useState(null);
    const [res , setRes] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(url , data)
        .then(res=>{
            if(res.status===200){
                setRes(res.data);      
            }else{
                throw new Error("something went wrong with servers pleas call the administrator!!")
            }
        
        }).then(()=>{
            setIsLoading(false);
        })
        .catch(error=>{
            setError(error);
            console.log(error);
        });
      
    }, [url , data]);
    
    return [res , isLoading , error];
}

export const useFetchProduct = (limit = null) =>{
    return useFetch('https://fakestoreapi.com/products' + (limit ? `?limit=${limit}` : ''));
}
export const useFetchUser = () =>{
    return useFetch('https://fakestoreapi.com/users');
} 
export const useFetchLatest = (limit=5) =>{
    const [res , isLoading , error] =  useFetchProduct();
    const [latest  , setLatest] = useState([]);
    useEffect(()=>{
        if(!isLoading){
            const des = res.sort((a,b)=>b-a);
            setLatest(des.slice(0 , limit));   
        }
    } , [isLoading , limit])
    
    return [latest , isLoading , error]; 
}