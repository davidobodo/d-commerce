import React from "react";

import { InputContainer } from "./style";
import { InputProps } from "../../../interfaces/IInput";

// text-field
const Input: React.FC<InputProps> = ({ label, placeholder }) => {
    return (
        <InputContainer>
            <label htmlFor="">
                <h6>{label}</h6>
            </label>
            <input type="text" placeholder={placeholder} />
        </InputContainer>
    );
};

export default Input;
