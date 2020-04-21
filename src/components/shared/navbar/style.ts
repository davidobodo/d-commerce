import styled from "styled-components";
import { devices } from "../../../styling/devices";

export const NavbarContainer = styled.div`
    width: 100%;
    background-color: #faf9f9;
    top: 0;
    position: fixed;
    z-index: 5;
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
                align-items: center;
                list-style: none;

                li {
                    margin-right: 30px;
                }

                &__pages {
                    display: flex;
                    list-style: none;
                    margin-right: 100px;
                }

                &__username {
                    margin-right: 20px;
                    font-weight: 400;
                }

                &__auth {
                    display: flex;
                    list-style: none;
                    align-items: center;

                    a {
                        background-color: #2e5c87;
                        color: white;
                        padding: 10px 40px;
                        border-radius: 30px;
                        margin-right: 30px;

                        &:nth-child(2) {
                            border: 1px solid #2e5c87;
                            background-color: transparent;
                            color: #2e5c87;
                            margin-right: 0px;
                        }
                    }
                }
            }
        }
    }
`;
