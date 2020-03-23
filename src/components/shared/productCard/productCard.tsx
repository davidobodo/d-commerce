import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ProductProps {
    image: any;
    name: string;
    rating: number | undefined;
    price: string;
}

const ProductCardContainer = styled.div<Partial<ProductProps>>`
    border: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;

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

    .stars {
        margin-bottom: 15px;

        .checked {
            color: #ffa500;
        }
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

const ProductCard: React.FC<ProductProps> = ({
    image,
    name,
    rating,
    price
}) => {
    return (
        <ProductCardContainer image={image}>
            <div className="img-wrapper">
                <div className="image"></div>
            </div>
            <h4 className="name">{name}</h4>
            <div className="stars">
                <FontAwesomeIcon icon={faStar} className="checked" />
                <FontAwesomeIcon icon={faStar} className="checked" />
                <FontAwesomeIcon icon={faStar} className="checked" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <h4 className="price">{price}</h4>
            <button className="select-button">select options</button>
        </ProductCardContainer>
    );
};

export default ProductCard;
