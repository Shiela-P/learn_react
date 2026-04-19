import {useState, useEffect} from 'react';

const useFetch = (url) =>{
     const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abordCont = new AbortController();
        fetch(url, {signal: abordCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("could not fetch data");
                }
            return res.json()
            }) 
            .then((data) => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setError(null);
            });

            return () => abordCont.abort();
        }, [url])
    
        return {data, isPending, error}
}

export default useFetch;