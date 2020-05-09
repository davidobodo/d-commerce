import React, { useState, useEffect } from "react";
import { DropdownProps } from "../../../interfaces/IDropdown";
import { DropdownContainer } from "./style";

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption }) => {
    let allOptions = ["Choose an option", ...options];
    const [_allOptions, set_allOptions] = useState(allOptions)
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentOption, setCurrentOption] = useState(allOptions[0]);
    const [searchOption, setSearchOption] = useState();

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSelectOption = e => {
        setCurrentOption(e.target.id);
    };

    const handleFindMatches = e => {
        const wordToMatch = e.target.value;
        const regex = new RegExp(wordToMatch, 'gi')
        const updatedOptions = allOptions.filter(option => {
            return option.match(regex);
        })

        set_allOptions(updatedOptions)
    }

    useEffect(() => {
        selectedOption(currentOption);
    }, [currentOption, selectedOption]);

    return (
        <DropdownContainer
            onClick={handleShowDropdown}
            showDropdown={showDropdown}
        >
            <input value={searchOption} onChange={handleFindMatches} />
            <ul onClick={handleSelectOption}>
                {_allOptions.map(option => {
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
