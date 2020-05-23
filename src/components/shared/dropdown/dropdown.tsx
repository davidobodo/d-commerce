import React, { useState, useEffect } from "react";
import { DropdownProps } from "./IDropdown";
import { DropdownContainer } from "./style";

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption }) => {

    let allOptions = ["Choose an option", ...options];
    const [_allOptions, set_allOptions] = useState(allOptions)

    const [showDropdown, setShowDropdown] = useState(false);
    const [searchOption, setSearchOption] = useState(allOptions[0]);


    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSelectOption = e => {
        setSearchOption(e.target.id);
    };

    const handleFindMatches = e => {
        const wordToMatch = e.target.value;

        setSearchOption(wordToMatch)

        const regex = new RegExp(wordToMatch, 'gi')
        const updatedOptions = allOptions.filter(option => {
            return option.match(regex);
        })

        set_allOptions(updatedOptions)
    }

    useEffect(() => {
        selectedOption(searchOption);
    }, [searchOption, selectedOption]);


    return (
        <DropdownContainer
            onClick={handleShowDropdown}
            showDropdown={showDropdown}
            data-testid='dropdown'
        >
            <input value={searchOption} onChange={handleFindMatches} data-testid='input-field' />
            <ul onClick={handleSelectOption} data-testid='options'>
                {_allOptions.map(option => {
                    return (
                        <li key={option} id={option} data-testid={option}>
                            {option}
                        </li>
                    );
                })}
            </ul>
        </DropdownContainer>
    );
};

export default Dropdown;
