import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchData = (url, page) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    let cancel
    const instance = axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
        cancelToken: new axios.CancelToken((c) => cancel = c)
    });

    const getData = () => {
        setIsLoading(true)
        instance.get(`${url}?page=${page}`)
        .then(res => {
            if(page === 1) {
                setData(res.data.results)
            } else {
                setData(prev => [...prev, ...res.data.results] )
            }
            setHasMore(res.data.results.length > 0)
            setIsLoading(false)
        })
        .catch(error => {
            if(axios.isCancel(error)) {
                return
            }
            console.error('Error', error)
            setError(true)
            setIsLoading(false)
        })
    }
    

    useEffect(() => {
        getData()
    }, [page, url])

    return {
        data,
        isLoading,
        error,
        hasMore
    }
}