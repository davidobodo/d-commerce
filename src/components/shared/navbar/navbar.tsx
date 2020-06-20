import React, { FunctionComponent } from "react";

import { Link } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { NavbarContainer } from "./style";
import { signOutStart } from "../../../redux/actions/auth";
import { firestoreConnect } from "react-redux-firebase";

const Navbar = () => {
    const dispatch = useDispatch();
    // const firebase = useSelector(state => state.firebaseReducer, shallowEqual);
    const userId = useSelector((state) => state.auth.userId);
    const allUsers = useSelector(
        (state) => state.firestoreReducer.ordered.users
    );
    const handleSignout = () => {
        dispatch(signOutStart());
    };

    let loggedInUser;
    if (allUsers && userId) {
        loggedInUser = allUsers.filter((user) => userId === user.id);
    }

    // const { auth, profile } = firebase;

    const renderAuthLinks = () => {
        if (userId) {
            return (
                <>
                    <h4 className="nav__links__username">
                        Hi, {loggedInUser && loggedInUser[0].firstName}
                    </h4>
                    <div className="nav__links__auth">
                        <Link to="/dashboard">My Dashboard</Link>
                        <Link to="/" onClick={handleSignout}>
                            Log out
                        </Link>
                    </div>
                </>
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

export default firestoreConnect([{ collection: "users" }])(Navbar) as any;
