import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        // fetch('http://localhost:8000/posts')
        //     .then((response) => {
        //         // console
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setPostsData(data);
        //         setIsLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //         setIsLoading(false);
        //     })
        axios.get(url)
            .then((res) => {
                console.log(res);
                setData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                // console.log(err);
                setIsLoading(false);
                setIsError(true);
            })
    }, [url])

    return { data, isLoading, isError }
}

export default useFetch;