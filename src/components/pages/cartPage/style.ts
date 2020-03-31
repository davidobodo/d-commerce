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
                    margin-bottom: 20px;

                    @media ${devices.mobile} {
                        margin-bottom: 0;
                    }
                }
            }

            &__table {
                border: 1px solid ${props => props.theme.primaryColor};
                border-collapse: collapse;
                width: 100%;

                thead {
                    background-color: #f7f7f7;
                    font-weight: 600;

                    tr {
                        td {
                            padding: 10px;
                        }
                    }
                }

                tbody {
                    tr {
                        border-top: 1px solid
                            ${props => props.theme.primaryColor};

                        &:nth-child(2n) {
                            background-color: #f7f7f7;
                        }

                        .col-img {
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
                    }
                }
            }
        }
    }
`;
