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
        border: 1px solid;
        border-color: ${props => props.theme.primaryColor};
        font-size: 14px;
        padding: 7px;
        outline: none;
        transition: border-color 0.5s ease-in-out;

        &:focus {
            border-color: rgba(50, 84, 168, 1);
        }

        &.error {
            border-color: #ff0000;
        }
    }

    .error-message {
        font-weight: 400;
        color: #ff0000;
        margin-bottom: 0;
        margin-top: 3px;
    }
`;
