import styled from "styled-components";
import { ProductProps } from "../../../interfaces/IProductCard";

export const ProductCardContainer = styled.div<Partial<ProductProps>>`
    border: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    cursor: pointer;

    .img-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 15px;

        .image {
            padding-top: 280px;
            background-size: cover;
            background-position: center;
            max-width: 300px;
            width: 100%;
            ${({ image }) => image && `background-image: url(${image})`};
        }
    }

    .name {
        margin-bottom: 15px;
        opacity: 0.7;
    }

    .price {
        margin-bottom: 15px;
        opacity: 0.7;
    }

    .select-button {
        background-color: ${props => props.theme.primaryColor};
        color: #ffffff;
        width: 100%;
        font-size: 18px;
        font-weight: 300;
        text-transform: uppercase;
        border: none;
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;
