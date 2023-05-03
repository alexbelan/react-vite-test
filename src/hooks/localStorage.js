import { useEffect, useState } from "react"

export const useLocalStorage = (text) => {
    const [token, setToken] = useState(text ? text : '')

    const setItem = (newToken) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    const removeItem = () => {
        setToken('')
        localStorage.removeItem('token')
    }

    const getItem = () => {
        setToken(() => localStorage.getItem('token') ?? '')
    }

    return [token, {
        setItem,
        removeItem,
        getItem
    }]
}