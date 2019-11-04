import { useState, useEffect } from 'react';

export default function useFetch(url: RequestInfo) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    async function fetchUrl() {
        try {
            const response = await fetch(url);
            if (response.status === 200) {
                const json = await response.json();
                setData(json.data);
            } else {
                setData({});
                setError(true)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true)
        }
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, error, loading];
}
