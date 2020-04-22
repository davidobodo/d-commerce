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

        .shop {
            margin-bottom: 20px;
            margin-top: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid ${props => props.theme.primaryColor};
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media ${devices.tablet} {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: 0;
                width: 100%;
            }

            h1 {
                font-weight: 400;
                margin-bottom: 15px;
            }

            .sorting-input {
                font-size: 16px;
                border: 1px solid ${props => props.theme.primaryColor};
                border-radius: 5px;
                padding: 10px;
                outline: none;

                &:focus {
                    border-color: #2e5c87;
                }
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
