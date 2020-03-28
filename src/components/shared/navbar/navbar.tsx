import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #faf9f9;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    padding-left: 20px;

    .nav__brand {
        color: #444444;
    }

    .nav__links {
        display: none;
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <h1 className="nav__brand">d-Commerce</h1>
            <ul className="nav__links">
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
