import styled from "styled-components";
import { InputProps } from "../../../interfaces/IInput";

export const InputContainer = styled.div<InputProps>`
    display: inline-block;
    margin-bottom: 20px;

    input {
        width: 300px;
        border: 1px solid ${props => props.theme.primaryColor};
        font-size: 14px;
        padding: 7px;
        outline: none;
    }
`;
