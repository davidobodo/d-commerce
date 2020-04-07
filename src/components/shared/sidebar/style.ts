import styled from "styled-components";
import { SidebarProps } from "../../../interfaces/ISidebar";

export const SidebarContainer = styled.div<SidebarProps>`
    width: 100%;
    height: 100vh;
    transform: translateX(100vw);
    background-color: #fff;
    position: fixed;
    z-index: 40;
    padding-left: 30px;
    padding-bottom: 100px;
    transition: transform 0.25s ease-in-out;
    display: flex;
    flex-direction: column;

    ${({ isNavbarOpen }) => isNavbarOpen && "transform: translateX(15vw)"};

    .sideNav__brand {
        height: 70px;
        display: flex;
        align-items: center;
        color: #444444;
    }

    .sideNav__links {
        li {
            font-size: 20px;
            margin-bottom: 30px;
            list-style: none;
        }
    }

    .sideNav__authLinks {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: auto;

        a {
            background-color: #2e5c87;
            color: white;
            padding: 10px 40px;
            border-radius: 30px;
            margin-bottom: 20px;
            width: 140px;
            text-align: center;

            &:nth-child(2) {
                border: 1px solid #2e5c87;
                background-color: transparent;
                color: #2e5c87;
                margin-bottom: 0px;
            }
        }
    }
`;
