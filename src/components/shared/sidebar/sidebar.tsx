import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #faf9f9;
    top: 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 765px) {
        position: fixed;
        z-index: 1;
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <div>Logo</div>
            <ul className="navlinks">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Download</li>
            </ul>
        </NavbarContainer>
    );
};

export default Navbar;
