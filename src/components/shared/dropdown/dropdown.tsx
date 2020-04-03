import React, { useState, useEffect } from "react";
import { DropdownProps } from "../../../interfaces/IDropdown";
import { DropdownContainer } from "./style";

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentOption, setCurrentOption] = useState(options[0]);

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSelectOption = e => {
        setCurrentOption(e.target.id);
    };

    useEffect(() => {
        selectedOption(currentOption);
    }, [currentOption, selectedOption]);
    return (
        <DropdownContainer
            onClick={handleShowDropdown}
            showDropdown={showDropdown}
        >
            {currentOption}
            <ul onClick={handleSelectOption}>
                {options.map(option => {
                    return (
                        <li key={option} id={option}>
                            {option}
                        </li>
                    );
                })}
            </ul>
        </DropdownContainer>
    );
};

export default Dropdown;
