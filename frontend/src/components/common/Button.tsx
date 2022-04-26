import React from "react"
import "./Button.css"

export interface ITextInputProps{
    value: string
    onClick?: () => void
    className?: string
    isLoading?: boolean
}

const Button = ({
    value,
    onClick,
    className,
    isLoading,
}: ITextInputProps) => {
    const onClickHandler = () => {
        onClick && onClick()
    }
    return (
        <input 
            type="submit" 
            className="bttn"
            value={isLoading ? 'Loading...' : value} 
            onClick={onClickHandler} 
            data-test="button"
        />
    )
}

export default Button
