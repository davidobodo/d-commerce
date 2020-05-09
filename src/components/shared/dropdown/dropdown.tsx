import React, { useState, useEffect } from "react";
import { DropdownProps } from "../../../interfaces/IDropdown";
import { DropdownContainer } from "./style";

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption }) => {
    let allOptions = ["Choose an option", ...options];
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentOption, setCurrentOption] = useState(allOptions[0]);

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
            <input value={currentOption} />
            <ul onClick={handleSelectOption}>
                {allOptions.map(option => {
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
