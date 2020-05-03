import React from "react";
import styled from "styled-components";
import { BackdropProps } from './IBackdrop';

const BackdropContainer = styled.div<BackdropProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: transform 0.25s ease-in-out;

    ${({ behaviour }) => behaviour == 'right2left' && 'transform: translateX(100vw);'};

    ${({ isNavbarOpen }) => isNavbarOpen && "transform: translateX(0)"};

    ${({ blackBackdrop }) => blackBackdrop && "background-color: rgba(0, 0, 0, 0.6)"};

    ${({ whiteBackdrop }) => whiteBackdrop && "background-color: rgba(255, 255, 255, 0.9)"};
`;



const Backdrop: React.FC<BackdropProps> = ({ isNavbarOpen, blackBackdrop, whiteBackdrop, behaviour }) => {
    return <BackdropContainer
        isNavbarOpen={isNavbarOpen}
        blackBackdrop={blackBackdrop}
        whiteBackdrop={whiteBackdrop}
        behaviour={behaviour}
    >
    </BackdropContainer>;
};

export default Backdrop;
