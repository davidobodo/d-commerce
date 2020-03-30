import React from "react";
import { ButtonContainer } from "./style";
import { ButtonProps } from "../../../interfaces/IButton";

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
