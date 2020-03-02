import React from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div<Prop>`
    position: fixed;
    background-color: rgba(0,0,0,0.95);
    width: 100%;
    height: 100%;
    z-index: 2;
    transform: translateY(-100vh);
    transition: transform 0.25s ease-in-out;

    ${({ isNavbarOpen }) => isNavbarOpen && 'transform: translateY(0)'}
`

interface Prop {
    isNavbarOpen: boolean
}

const Backdrop: React.FC<Prop> = ({ isNavbarOpen }) => {
    return (
        <BackdropContainer isNavbarOpen={isNavbarOpen}>

        </BackdropContainer>
    )
};

export default Backdrop