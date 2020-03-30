import styled from "styled-components";

export const CartPageContainer = styled.div`
    .wrapper {
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
        }
    }
`;
