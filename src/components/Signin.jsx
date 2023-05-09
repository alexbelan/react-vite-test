import React, { useState } from 'react'
import { Button, Input } from '@mantine/core';

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
            <Input.Wrapper
                id="emailPro"
                withAsterisk
                label="Email"
            >
                <Input
                    id={'emailPro'}
                    type="email"
                    isRequired
                    placeholder="Your email"
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    label="Email"
                />
            </Input.Wrapper>
            <Input.Wrapper
                id="password"
                withAsterisk
                label="Password"
            >
                <Input
                    id="password"
                    type="password"
                    isRequired
                    placeholder="Your password"
                    name='password'
                    onChange={handleChange}
                    value={values.password}
                    label="Password"
                />
            </Input.Wrapper>
            <Button sx={{margin: '10px 0'}} type='submit'>Submit</Button>
        </form>
    )
}

export default Signin