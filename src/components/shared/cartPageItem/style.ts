import styled from "styled-components";
import { devices } from "../../../styling/devices";

export const CartPageItemContainer = styled.tr`
    border-bottom: 1px solid ${props => props.theme.primaryColor};

    &:nth-child(even) {
        background-color: #f7f7f7;
    }

    .col-cancel {
        padding-left: 5px;

        @media ${devices.mobile} {
            width: 70px;
            padding-left: 20px;
        }

        div {
            display: inline-block;
            padding: 3px;

            svg {
                color: #ff0000;
                transform: rotate(45deg);
            }

            &:hover {
                background-color: #ff0000;

                svg {
                    color: #ffffff;
                }
            }
        }
    }

    .col-img {
        display: none;

        @media ${devices.mobile} {
            display: table-cell;
            width: 80px;
            padding-top: 10px;
            padding-bottom: 10px;

            img {
                object-fit: cover;
                width: 80px;
                height: 80px;
            }
        }

        @media ${devices.tablet} {
            width: 120px;

            img {
                width: 100px;
                height: 100px;
            }
        }
    }

    .col-name-size {
        h4 {
            font-weight: 400;
            color: #2e5c87;
            margin-bottom: 5px;
        }

        h5 {
            span {
                font-weight: 400;
            }
        }
    }

    .col-price {
        @media ${devices.mobile} {
            width: 15%;
        }
    }

    .col-counter {
        @media ${devices.mobile} {
            width: 15%;
        }
    }

    .col-total-price {
        @media ${devices.mobile} {
            width: 15%;
        }
    }
`;
