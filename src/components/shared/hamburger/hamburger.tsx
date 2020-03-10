import React from "react";
import styled from "styled-components";

interface Props {
    handleShowNavbar?: any;
    isNavbarOpen: boolean;
}

const HamburgerContainer = styled.div<Props>`
    position: fixed;
    z-index: 50;
    right: 45px;
    top: 35px;
    cursor: pointer;

    .hamburger{
            width: 25px;
            height: 3px;
            background-color: #000000;
            align-self: center;
            ${({ isNavbarOpen }) => isNavbarOpen && "height: 0"};
            

            &:before{
                content: '';
                width: 25px;
                height: 3px;
                background-color: inherit;
                position: absolute;
                top: -7px;
                transition: all 0.5s ease-in-out;
                ${({ isNavbarOpen }) =>
                    isNavbarOpen && "top: 0; transform: rotate(45deg)"};
            }

            &:after{
                content: '';
                width: 25px;
                height: 3px;
                background-color: inherit;
                position: absolute;
                top: 7px;
                transition: all 0.5s ease-in-out;
                ${({ isNavbarOpen }) =>
                    isNavbarOpen && "top: 0; transform: rotate(-45deg)"};
            }
        }
    }

    .click-box{
        height: 20px;
        position: absolute;
        width: 100%;
        top: -10px;
    }
`;

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
