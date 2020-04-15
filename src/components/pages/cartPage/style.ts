import styled from "styled-components";
import { devices } from "../../../styling/devices";

export const CartPageContainer = styled.div`
    .wrapper {
        margin-bottom: 50px;
        .cart {
            &__header {
                border-bottom: 1px solid ${props => props.theme.primaryColor};
                margin-bottom: 20px;
                padding-bottom: 20px;
                h1 {
                    font-weight: 400;
                    font-size: 38px;
                }
            }

            &__alert {
                border: 1px solid ${props => props.theme.primaryColor};
                padding: 20px;
                margin-bottom: 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;

                .first-section {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;

                    svg {
                        font-size: 22px;
                        margin-right: 12px;
                        color: #2e5c87;
                    }

                    @media ${devices.mobile} {
                        margin-bottom: 0;
                    }
                }
            }

            &__table {
                border: 1px solid ${props => props.theme.primaryColor};
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 40px;

                thead {
                    background-color: #f7f7f7;
                    font-weight: 600;

                    tr {
                        border-bottom: 1px solid
                            ${props => props.theme.primaryColor};
                        td {
                            padding: 10px;

                            &:nth-child(2) {
                                display: none;

                                @media ${devices.mobile} {
                                    display: table-cell;
                                }
                            }
                        }
                    }
                }

                .desktop-table-footer {
                    display: none;

                    @media ${devices.laptop} {
                        display: table-row-group;
                        input {
                            border: 1px solid
                                ${props => props.theme.primaryColor};
                            padding: 7px;
                            outline: none;
                            margin: 15px 10px 15px 0;
                        }
                    }
                }
            }

            .mobile-table-footer {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                @media ${devices.laptop} {
                    display: none;
                }
                input {
                    border: 1px solid ${props => props.theme.primaryColor};
                    padding: 7px;
                    outline: none;
                    margin: 15px 10px 15px 0;
                }
            }

            &__total {
                @media ${devices.tablet} {
                    width: 500px;
                    margin-left: auto;
                }
                h1 {
                    font-weight: 400;
                    font-size: 38px;
                    margin-bottom: 15px;
                }

                table {
                    border: 1px solid ${props => props.theme.primaryColor};
                    border-collapse: collapse;
                    margin-bottom: 5px;
                    width: 100%;

                    tr {
                        border-bottom: 1px solid
                            ${props => props.theme.primaryColor};

                        &:nth-child(2n) {
                            background-color: #f7f7f7;
                        }

                        td {
                            padding: 10px;
                            font-weight: 800;
                        }

                        .subtotal-value {
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }
`;
