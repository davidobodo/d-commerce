import styled from "styled-components";
import { devices } from "../../../styling/devices";

export const ProductPageContainer = styled.div`
    .wrapper {
        margin-bottom: 20px;
        .product {
            border-top: 1px solid ${props => props.theme.primaryColor};
            margin-top: 20px;
            margin-bottom: 50px;
            padding-top: 15px;

            @media ${devices.laptop} {
                display: flex;
            }

            &__image {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 30px;

                .actual-image {
                    object-fit: cover;
                    width: 100%;
                    max-width: 400px;
                    max-height: 400px;
                    height: auto;
                    margin-bottom: 15px;

                    @media ${devices.laptop} {
                        width: 500px;
                        height: 500px;
                        max-height: 500px;
                        max-width: 500px;
                        margin-right: 30px;
                    }
                }

                .preview-image {
                    object-fit: cover;
                    width: 100px;
                    height: 100px;
                }
            }

            &__details {
                color: #444;
                .name {
                    border-bottom: 1px solid
                        ${props => props.theme.primaryColor};
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                    font-weight: 400;
                }

                .price {
                    border-bottom: 1px solid
                        ${props => props.theme.primaryColor};
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                    font-weight: 400;
                }

                .info {
                    margin-bottom: 15px;
                }

                .sizes {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;

                    h4 {
                        margin-right: 15px;
                    }
                }

                .btn-cart {
                    border-bottom: 1px solid
                        ${props => props.theme.primaryColor};
                    color: #ffffff;
                    background-color: #5f7fa2;
                    border: none;
                    font-size: 20px;
                    padding: 10px 20px;
                }

                .data {
                    margin-top: 30px;
                    padding-top: 30px;
                    border-top: 1px solid ${props => props.theme.primaryColor};
                    font-size: 11px;

                    &__section {
                        margin-bottom: 8px;

                        span {
                            font-weight: 600;
                        }
                    }
                }
            }
        }

        .related-products {
            margin-top: 50px;

            h1 {
                margin-bottom: 20px;
                font-weight: 400;
            }

            &__products-wrapper {
                @media ${devices.mobile} {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 15px;
                }

                @media ${devices.tablet} {
                    grid-template-columns: 1fr 1fr 1fr;
                }

                @media ${devices.laptop} {
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                }
            }
        }
    }
`;
