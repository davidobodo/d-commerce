import React from "react";

import { Link } from "react-router-dom";
import { NavbarContainer } from "./style";

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="nav">
                <Link to="/">
                    <h1 className="nav__brand">d-Commerce</h1>
                </Link>
                <ul className="nav__links">
                    <ul className="nav__links__pages">
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Features</li>
                        <li>Blog</li>
                    </ul>
                    <ul className="nav__links__auth">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </ul>
                </ul>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;
