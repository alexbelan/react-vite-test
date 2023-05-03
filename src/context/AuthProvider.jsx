import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => localStorage.getItem('user') || null)

    const signin = (newUser, callbeck) => {
        setUser(newUser)
        localStorage.setItem('user', newUser)
        callbeck()
    }

    const signout = (callbeck) => {
        setUser(null)
        localStorage.removeItem('user')
        callbeck()
    }

    const value = {
        user,
        signin,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}