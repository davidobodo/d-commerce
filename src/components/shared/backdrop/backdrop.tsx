import React from "react";
import styled from "styled-components";

const BackdropContainer = styled.div<Prop>`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 2;
    transform: translateX(100vw);
    transition: transform 0.25s ease-in-out;

    ${({ isNavbarOpen }) => isNavbarOpen && "transform: translateX(0)"}
`;

interface Prop {
    isNavbarOpen: boolean;
}

const Backdrop: React.FC<Prop> = ({ isNavbarOpen }) => {
    return <BackdropContainer isNavbarOpen={isNavbarOpen}></BackdropContainer>;
};

export default Backdrop;
