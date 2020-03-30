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
        }
    }
`;
