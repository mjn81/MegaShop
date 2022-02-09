import axios from "axios";
import { useState , useEffect } from "react";
export const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [res , setRes] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(url)
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
      
    }, [url]);
    
    return [res , isLoading , error];
}

