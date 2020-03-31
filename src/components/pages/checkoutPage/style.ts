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
            h2 {
                font-weight: 300;
            }
        }

        &__add-info {
            h2 {
                font-weight: 300;
            }

            .field-textarea {
                margin-bottom: 20px;

                textarea {
                    width: 100%;
                    min-height: 60px;
                    border: 1px solid ${props => props.theme.primaryColor};
                }
            }
        }

        &__total {
            margin-bottom: 20px;
            h2 {
                font-weight: 300;
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
`;
