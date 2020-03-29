import styled from "styled-components";
import { HomeProps } from "../../../interfaces/IHome";
import { devices } from "../../../styling/devices";

export const HomeContainer = styled.div<HomeProps>`
    .dropdown-shop {
        @media ${devices.tablet} {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid ${props => props.theme.primaryColor};
            margin-bottom: 20px;
            padding-bottom: 15px;
        }

        .dropdown {
            border: 1px solid rgba(0, 0, 0, 0.5);
            outline: none;
            border-radius: 0px;
            padding: 10px;
            font-size: 14px;
            margin-bottom: 20px;
            position: relative;
            cursor: pointer;
            max-width: 300px;

            @media ${devices.tablet} {
                order: 2;
                align-self: center;
                width: 300px;
            }

            &:before {
                content: "";
                position: absolute;
                border-bottom: 5px solid black;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                right: 10px;
                top: 12px;
            }

            &:after {
                content: "";
                position: absolute;
                border-top: 5px solid black;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                right: 10px;
                top: 20px;
            }

            ul {
                list-style: none;
                position: absolute;
                background-color: #ffffff;
                border: 1px solid rgba(0, 0, 0, 0.5);
                width: 100%;
                left: 0px;
                top: 31px;
                ${({ showDropdown }) => showDropdown && "display: block"};
                ${({ showDropdown }) => !showDropdown && "display: none"};

                li {
                    padding: 10px;
                    cursor: pointer;

                    &:hover {
                        background-color: ${props => props.theme.primaryColor};
                        color: #ffffff;
                    }
                }
            }
        }

        .shop {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid ${props => props.theme.primaryColor};

            @media ${devices.tablet} {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: 0;
            }

            h1 {
                font-weight: 400;
                margin-bottom: 15px;
            }

            h6 {
                font-weight: 400;
            }
        }
    }

    .products {
        @media ${devices.mobile} {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
        }

        @media ${devices.tablet} {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media ${devices.laptop} {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`;
