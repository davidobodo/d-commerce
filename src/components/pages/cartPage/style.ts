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
                        }
                    }
                }

                tbody {
                    tr {
                        border-bottom: 1px solid
                            ${props => props.theme.primaryColor};

                        &:nth-child(2n) {
                            background-color: #f7f7f7;
                        }

                        .col-cancel {
                            width: 70px;
                            padding-left: 20px;
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
                            width: 120px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            img {
                                object-fit: cover;
                                width: 100px;
                                height: 100px;
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
                            width: 15%;
                        }

                        .col-counter {
                            width: 15%;
                        }

                        .col-total-price {
                            width: 15%;
                        }
                    }
                }

                tfoot {
                    input {
                        border: 1px solid ${props => props.theme.primaryColor};
                        padding: 7px;
                        outline: none;
                        margin: 15px 10px 15px 0;
                    }
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
