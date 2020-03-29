import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "../../../interfaces/IDropdown";
import { devices } from "../../../styling/devices";

const DropdownContainer = styled.div<DropdownProps>`
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: none;
    border-radius: 0px;
    padding: 10px;
    font-size: 14px;
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
    max-width: 300px;

    @media ${devices.tablet} {
        order: 2;
        align-self: center;
        width: 300px;
    }

    &:before {
        content: "";
        position: absolute;
        border-bottom: 5px solid black;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 10px;
        top: 12px;
    }

    &:after {
        content: "";
        position: absolute;
        border-top: 5px solid black;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 10px;
        top: 20px;
    }

    ul {
        list-style: none;
        position: absolute;
        background-color: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.5);
        width: 100%;
        left: 0px;
        top: 31px;
        ${({ showDropdown }) => showDropdown && "display: block"};
        ${({ showDropdown }) => !showDropdown && "display: none"};

        li {
            padding: 10px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.primaryColor};
                color: #ffffff;
            }
        }
    }
`;

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentOption, setCurrentOption] = useState(options[0]);

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSelectOption = e => {
        setCurrentOption(e.target.innerHTML);
    };
    return (
        <DropdownContainer
            onClick={handleShowDropdown}
            showDropdown={showDropdown}
        >
            {currentOption}
            <ul onClick={handleSelectOption}>
                {options.map(option => {
                    return <li key={option}>{option}</li>;
                })}
            </ul>
        </DropdownContainer>
    );
};

export default Dropdown;
