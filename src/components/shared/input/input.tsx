import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { InputContainer } from "./style";
import { InputProps } from "../../../interfaces/IInput";

// text-field
const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    name,
    required = false,
    type = "text",
    hasError,
    errorMessage,
    pattern = null
}) => {
    const errorClassName = hasError ? "error" : "";
    return (
        <InputContainer>
            <label htmlFor="">
                <h6>
                    {label}
                    {required && <FontAwesomeIcon icon={faStar} />}
                </h6>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                pattern={pattern}
                className={errorClassName}
            />
            {hasError && <h6 className="error-message">{errorMessage}</h6>}
        </InputContainer>
    );
};

export default Input;
