import styled from "styled-components";
import { InputProps } from "../../../interfaces/IInput";
import { devices } from "../../../styling/devices";

export const InputContainer = styled.div<InputProps>`
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;

    @media ${devices.tablet} {
        width: 300px;
    }

    label {
        h6 {
            margin-bottom: 10px;
            font-weight: 800;
        }

        svg {
            color: #ff0000;
            width: 7px !important;
            margin-left: 3px;
            margin-bottom: 3px;
        }
    }

    input {
        width: 100%;
        border: 1px solid ${props => props.theme.primaryColor};
        font-size: 14px;
        padding: 7px;
        outline: none;
    }
`;
