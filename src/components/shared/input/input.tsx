import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { InputContainer } from "./style";
import { InputProps } from "../../../interfaces/IInput";

// text-field
const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    required = false,
    type = "text"
}) => {
    return (
        <InputContainer>
            <label htmlFor="">
                <h6>
                    {label}
                    {required && <FontAwesomeIcon icon={faStar} />}
                </h6>
            </label>
            <input type={type} placeholder={placeholder} />
        </InputContainer>
    );
};

export default Input;
