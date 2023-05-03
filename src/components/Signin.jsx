import React, { useState } from 'react'
import InputText from './InputText';

const baseValues = {
    email: '',
    password: '',
}

const Signin = ({onSubmit}) => {
    const [values, setValues] = useState(baseValues)

    const handleChange = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(values)
        reset()
    }

    const reset = () => {
        setValues(baseValues)
    }

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <InputText
                id={'emailPro'}
                type="email"
                isRequired
                placeholder="Your email"
                name='email'
                onChange={handleChange}
                value={values.email}
                label="Email"
            />
            <InputText
                type="password"
                isRequired
                placeholder="Your password"
                name='password'
                onChange={handleChange}
                value={values.password}
                label="Password"
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signin