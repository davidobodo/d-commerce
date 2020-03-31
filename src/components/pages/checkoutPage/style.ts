import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    .checkout {
        margin-bottom: 50px;

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
            align-items: center;

            svg {
                font-size: 22px;
                margin-right: 12px;
                color: #2e5c87;
            }

            h4 {
                font-weight: 400;
                font-size: 15px;

                span {
                    color: #2e5c87;
                }
            }
        }

        &__form {
            padding-top: 30px;
            margin-bottom: 40px;
            h2 {
                font-weight: 300;
                margin-bottom: 20px;
            }
        }

        &__add-info {
            margin-bottom: 40px;
            h2 {
                font-weight: 300;
                margin-bottom: 20px;
            }

            .field-textarea {
                margin-bottom: 20px;

                textarea {
                    width: 100%;
                    min-height: 60px;
                    border: 1px solid ${props => props.theme.primaryColor};
                    font-size: 14px;
                    padding: 7px;
                    outline: none;
                }
            }
        }

        &__total {
            margin-bottom: 20px;
            h2 {
                font-weight: 300;
                margin-bottom: 20px;
            }

            table {
                border: 1px solid ${props => props.theme.primaryColor};
                border-collapse: collapse;
                width: 100%;

                thead {
                    font-weight: 800;
                    background-color: #f7f7f7;
                }

                tfoot {
                    font-weight: 800;
                }

                tr {
                    border-bottom: 1px solid
                        ${props => props.theme.primaryColor};

                    &:nth-child(2n) {
                        background-color: #f7f7f7;
                    }

                    td {
                        padding: 10px;
                    }
                }
            }
        }
    }

    //-------------------------------------------------------------------------
    //resets on some components on this page
    //-------------------------------------------------------------------------

    h6 {
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: 800;
    }

    .dropdown {
        margin-bottom: 20px;

        div {
            max-width: 100%;
            border: 1px solid ${props => props.theme.primaryColor};

            ul {
                border: 1px solid ${props => props.theme.primaryColor};
            }
        }
    }

    .street-address {
        div:first-child {
            margin-bottom: 0;
        }
    }
`;
