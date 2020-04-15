import styled from "styled-components";

export const OrderConfirmationPageContainer = styled.div`
    padding-top: 40px;

    h4 {
        font-size: 18px;
    }

    .order-confirmation {
        &__header {
            border-bottom: 1px solid ${props => props.theme.primaryColor};
            margin-bottom: 20px;
            padding-bottom: 20px;
            text-align: center;

            img {
                width: 50px;
                margin-bottom: 10px;
            }

            h2 {
                font-weight: 300;
                margin-bottom: 6px;
            }

            h4 {
                margin-bottom: 6px;
            }

            p {
                line-height: 16px;
                font-style: italic;
                opacity: 0.6;
                font-size: 14px;
            }
        }

        &__summary {
            margin-bottom: 40px;

            &__header {
                margin-bottom: 15px;
                padding-left: 10px;
            }

            &__item {
                display: flex;
                border-bottom: 1px solid ${props => props.theme.primaryColor};
                margin-bottom: 20px;
                padding: 10px;
                padding-bottom: 20px;

                .left-column {
                    margin-right: 20px;

                    img {
                        object-fit: cover;
                        width: 120px;
                        height: 120px;
                    }
                }

                .center-column {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    p:last-child {
                        margin-top: auto;
                    }
                }

                .right-column {
                    align-self: flex-end;
                }
            }

            &__total {
                display: flex;
                justify-content: space-between;
                font-size: 18px;
                font-weight: 600;
                background-color: #cecece;
                padding: 10px;
            }
        }

        &__delivery-details {
            margin-bottom: 40px;

            &__header {
                margin-bottom: 15px;
            }

            &__section {
                margin-bottom: 30px;

                h5 {
                    margin-bottom: 5px;
                    font-size: 16px;
                }
            }
        }
    }
`;
