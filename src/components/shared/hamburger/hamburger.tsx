import React from "react";
import { Props } from './IHamburger';
import { HamburgerContainer } from './style';


const Hamburger: React.FC<Props> = ({ handleShowNavbar, isNavbarOpen }) => {
    return (
        <HamburgerContainer
            onClick={handleShowNavbar}
            isNavbarOpen={isNavbarOpen}
        >
            <div className="hamburger"></div>
            <div className="click-box"></div>
        </HamburgerContainer>
    );
};

export default Hamburger;
