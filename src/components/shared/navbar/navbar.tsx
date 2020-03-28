import React from "react";
import styled from "styled-components";
import { devices } from "../../../styling/devices";

const NavbarContainer = styled.div`
    width: 100%;
    background-color: #faf9f9;
    top: 0;
    position: fixed;
    z-index: 1;
    padding-left: 20px;

    @media ${devices.tablet} {
        padding-left: ${props => props.theme.padding};
        padding-right: ${props => props.theme.padding};
    }

    .nav {
        max-width: 1440px;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        &__brand {
            color: #444444;
        }

        &__links {
            display: none;

            @media ${devices.tablet} {
                display: flex;
                list-style: none;

                li {
                    margin-right: 30px;
                }
            }
        }
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="nav">
                <h1 className="nav__brand">d-Commerce</h1>
                <ul className="nav__links">
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Download</li>
                </ul>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;
