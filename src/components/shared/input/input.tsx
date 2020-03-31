import React from "react";

import { InputContainer } from "./style";
import { InputProps } from "../../../interfaces/IInput";

// text-field
const Input: React.FC<InputProps> = ({ label }) => {
    return (
        <InputContainer>
            <label htmlFor="">
                <h6>{label}</h6>
            </label>
            <input type="text" />
        </InputContainer>
    );
};

export default Input;
