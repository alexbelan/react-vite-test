import { useLocation, useNavigate } from 'react-router-dom'
import SignIn from '../components/Signin'
import { useAuth } from '../context/AuthProvider'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()

    useEffect(() => {
        if(auth.user) {
            navigate(location.state?.from || '/')
        }
    }, [])

    const handleSubmit = (values) => {
        if(values.email === 'test@test.com' && values.password === '12345') {
            auth.signin(values.email, () => navigate(location.state?.from || '/', {
                replace: true
            }))
        }
    }

    return (
        <SignIn onSubmit={handleSubmit} />
    )
}

export default Login