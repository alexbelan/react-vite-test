import React, { useState } from 'react';
import { HiUser } from "react-icons/hi";
import InputText from './InputText';

const baseValues = {
    name: '',
    nick: '',
    email: '',
    gender: '',
    password: '',
    password2: ''
}

const Signup = ({onSubmit}) => {
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
                type="text"
                placeholder="Your name"
                name='name'
                onChange={handleChange}
                value={values.name}
                label="Name"
            />
            <InputText
                type="text"
                placeholder="Your nick"
                name='nick'
                prefix={<HiUser />}
                onChange={handleChange}
                value={values.nick}
                label="Nick"
            />
            <InputText
                type="email"
                placeholder="Your email"
                name='email'
                onChange={handleChange}
                value={values.email}
                label="Email"
            />
            <span>Gender</span>
            <div>
                <input type="radio" id="man" name="gender" value="man" onChange={handleChange} />
                <label htmlFor="man">Man</label>
            </div>

            <div>
                <input type="radio" id="woman" name="gender" value="woman" onChange={handleChange} />
                <label htmlFor="woman">Woman</label>
            </div>
            <InputText
                type="password"
                placeholder="Your password"
                name='password'
                onChange={handleChange}
                value={values.password}
                label="Password"
            />
            <InputText
                type="password"
                placeholder="Your repit password"
                name='password2'
                onChange={handleChange}
                value={values.password2}
                label="Repit password"
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signup