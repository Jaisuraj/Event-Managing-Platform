import React, { useState } from "react"
import "./TextInput.css"
export interface ITextInputProps{
    id: string
    name: string
    placeholder?: string
    onChange?: (value: string) => void
    defaultValue?: string
    className?: string
}

const TextInput = ({
    id,
    name,
    placeholder,
    onChange,
    defaultValue,
    className,
}: ITextInputProps) => {
    const [value, setValue] = useState(defaultValue || '')
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange && onChange(e.target.value)
    }
    return (
        <input 
            className="inputtx"
            type="text" 
            id={id} 
            name={name} 
            placeholder={""} 
            onChange={onChangeHandler}
            value={value}
            data-test="textInput"
        />
    )
}

export default TextInput
