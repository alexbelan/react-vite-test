import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const refetch = (params = {}) => {
        setIsLoading(true)
        setError(false)
        axios.get(url, params).then(res => {
            setData(res.data)
            setIsLoading(false)
        }).catch(() => {
            setData(null)
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        data,
        isLoading,
        error,
        refetch
    }
}