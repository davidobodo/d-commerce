import React from "react";

import { Link } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { NavbarContainer } from "./style";
import { signOutStart } from "../../../redux/actions/auth";

const Navbar = () => {
    const dispatch = useDispatch();
    const firebase = useSelector(state => state.firebaseReducer, shallowEqual);

    const handleSignout = () => {
        dispatch(signOutStart());
    };

    const renderAuthLinks = () => {
        if (firebase.auth.uid) {
            return (
                <div className="nav__links__auth">
                    <Link to="/" onClick={handleSignout}>
                        Log out
                    </Link>
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
                        {/* <li>Home</li>
                        <li>Portfolio</li>
                        <li>Chat App</li>
                        <li>Contact Us</li> */}
                    </ul>
                    {renderAuthLinks()}
                </ul>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;
