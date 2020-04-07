import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { SidebarProps } from "../../../interfaces/ISidebar";
import { SidebarContainer } from "./style";

const Sidebar: React.FC<SidebarProps> = ({ isNavbarOpen }) => {
    const firebase = useSelector(state => state.firebaseReducer, shallowEqual);

    const renderAuthLinks = () => {
        if (firebase.auth.uid) {
            return (
                <div className="sideNav__authLinks">
                    <Link to="/login">Log out</Link>
                </div>
            );
        }
        return (
            <div className="sideNav__authLinks">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        );
    };
    return (
        <SidebarContainer isNavbarOpen={isNavbarOpen}>
            <h1 className="sideNav__brand">d-Commerce</h1>
            <ul className="sideNav__links">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Features</li>
                <li>Blog</li>
            </ul>
            {renderAuthLinks()}
        </SidebarContainer>
    );
};

export default Sidebar;
