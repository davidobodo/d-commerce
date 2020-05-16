import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { SidebarProps } from "./ISidebar";
import { SidebarContainer } from "./style";
import { signOutStart } from "../../../redux/actions/auth";

const Sidebar: React.FC<SidebarProps> = ({ isNavbarOpen }) => {
    const dispatch = useDispatch();
    const firebase = useSelector(state => state.firebaseReducer, shallowEqual);
    const userInfo = useSelector(state => state.signup.data)
    const handleSignout = () => {
        dispatch(signOutStart());
    };

    const renderAuthLinks = () => {
        if (userInfo) {

            if (userInfo.localId) {
                return (
                    <div className="sideNav__authLinks">
                        <Link to="/" onClick={handleSignout}>
                            Log out
                    </Link>
                    </div>
                );
            }
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
                {/* <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="www.obododavid.com" target="_blank">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        Chat App
                    </a>
                </li>
                <li>Contact Us</li> */}
            </ul>
            {renderAuthLinks()}
        </SidebarContainer>
    );
};

export default Sidebar;
