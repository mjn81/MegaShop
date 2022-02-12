import {useFetch} from "../hooks";
import {useEffect, useState} from "react";

export const useFetchProduct = (limit = null) => {
    return useFetch('https://fakestoreapi.com/products' + (limit ? `?limit=${limit}` : ''));
}
export const useFetchId = (id) => {
    return useFetch('https://fakestoreapi.com/products/' + id);
}
export const useFetchCategory = (category, limit) => {
    const [res, isLoading, error] = useFetch(
        category === 'All' ? 'https://fakestoreapi.com/products/' : ('https://fakestoreapi.com/products/category/' + category));
    const [quantity, setQuantity] = useState(0);
    const [limitedRes, setLimitedRes] = useState([]);
    useEffect(() => {
        if (!isLoading) {
            setQuantity(res.length);
            const holder = [...res].slice(limit.start, limit.end);
            setLimitedRes(holder);
        }
    }, [isLoading, res, limit]);
    return [limitedRes, quantity, isLoading, error];
}

export const useFetchLatest = (limit = 5) => {
    const [res, isLoading, error] = useFetchProduct();
    const [sortedRes, setSortedRes] = useState([]);
    useEffect(() => {
        if (!isLoading) {
            const tmp = [...res].sort((a, b) => a - b); // because there is no date in the spicified api
            setSortedRes(tmp.slice(0, limit));
        }
    }, [isLoading, res, limit]);
    return [sortedRes, isLoading, error];
}

export const useFetchPopulars = (limit = 5) => {
    const [res, isLoading, error] = useFetchProduct();
    const [populars, setPopulars] = useState([]);
    useEffect(() => {
        if (!isLoading) {
            const tmp = [...res].sort((a, b) => b.rating.rate - a.rating.rate);
            setPopulars(tmp.slice(0, limit));
        }
    }, [res, isLoading, limit]);
    return [populars, isLoading, error];
}
