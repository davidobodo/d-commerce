import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    .checkout {
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
    }
`;
