import React, { useMemo } from "react"

const InputText = ({
    name,
    value,
    onChange,
    label,
    placeholder,
    prefix,
    id,
    isRequired=false,
    type='text',
}) => {
    const labelId = useMemo(() => {
        return !!id ? id : name + '-' + window.crypto.randomUUID()
    }, []) 

    const handleFocus = (e) => {
        e.target.parentNode.style.border = '1px solid blue'
    }

    const handleBlur = (e) => {
        e.target.parentNode.style.border = '1px solid grey'
    }

    return (
        <div>
            {<><label htmlFor={labelId}>{!!label && label}</label>{isRequired && <span style={{color: 'red'}}>*</span>}<br/></>}
            <div className="input">
                {prefix}
                <input 
                    type={type}
                    id={labelId}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default InputText