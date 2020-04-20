import styled from "styled-components";
import { ButtonProps } from "../../../interfaces/IButton";

export const ButtonContainer = styled.button<ButtonProps>`
    border: none;
    padding: 12px 25px;
    cursor: pointer;
    outline: none;

    ${({ blue_small_text }) =>
        blue_small_text && "background-color: #2e5c87; color: #ffffff"};
    ${({ ash_small_text }) =>
        ash_small_text && "background-color: #eeeeee; color: #000000"};

    ${({ disabled }) => disabled && "cursor: not-allowed; opacity: 0.5"};

    font-size: 12px;
`;
