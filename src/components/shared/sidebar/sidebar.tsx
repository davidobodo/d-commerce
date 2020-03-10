import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    width: 100%;
    height: 100vh;
    transform: translateX(15vw);
    background-color: #f9f9;
    position: fixed;
    z-index: 1;
    padding-left: 30px;

    .logo {
        height: 70px;
        display: flex;
        align-items: center;
    }

    .navlinks {
        li {
            font-size: 20px;
            margin-bottom: 30px;
            list-style: none;
        }
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <div className="logo">Logo</div>
            <ul className="navlinks">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Download</li>
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
