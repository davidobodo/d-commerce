import React from "react";

import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { NavbarContainer } from "./style";

const Navbar = () => {
    const firebase = useSelector(state => state.firebaseReducer, shallowEqual);

    const renderAuthLinks = () => {
        if (firebase.auth.uid) {
            return (
                <div className="nav__links__auth">
                    <Link to="/login">Log out</Link>
                </div>
            );
        }
        return (
            <div className="nav__links__auth">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        );
    };
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
                    {renderAuthLinks()}
                </ul>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;
