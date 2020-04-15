import styled from "styled-components";

export const PaymentPageContainer = styled.div`
    margin-bottom: 50px;
    .payment {
        &__header {
            border-bottom: 1px solid ${props => props.theme.primaryColor};
            margin-bottom: 20px;
            padding-bottom: 20px;
            h1 {
                font-weight: 400;
                font-size: 38px;
            }
        }

        &__by-card {
            border: 1px solid ${props => props.theme.primaryColor};
            border-radius: 3px;
            margin-bottom: 20px;
            max-width: 500px;

            header {
                border-bottom: 1px solid ${props => props.theme.primaryColor};
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;

                div {
                    display: flex;

                    img {
                        margin-right: 10px;
                        width: 20px;
                    }

                    h4 {
                        font-weight: 400;
                    }
                }
            }

            form {
                padding: 20px;

                h6 {
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }

    .note-section {
        margin-top: 20px;
        color: #ff0000;
    }
`;
