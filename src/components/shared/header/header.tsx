import React from 'react';
import styled from 'styled-components';



const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FAF9F9;
    top: 0;

    @media(max-width: 765px){
        position: fixed;
        z-index: 1;
    }
`

const Header = () => {
    return (
        <HeaderContainer>
        </HeaderContainer>
    )
};

export default Header