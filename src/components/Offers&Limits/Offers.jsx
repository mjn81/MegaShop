import { useFetchLatest , useFetchPopulars } from "../../api";
import BigCard from "../Wrappers/BigCard";

export const Latest = () => {
    const [res , isLoading , error] = useFetchLatest(6);
    return (
       <BigCard title="Latest Products" data={res} isLoading={isLoading} />
    );
}

export const Populars = () => {
    const [res , isLoading , error] = useFetchPopulars(6);
    return (
        <BigCard title="Most Populars" data={res} isLoading={isLoading} />  
    );
}
 
