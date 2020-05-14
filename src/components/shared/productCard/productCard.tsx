import React from "react";
import { Link } from "react-router-dom";
import { ProductCardContainer } from "./style";

import { ProductCardProps } from "../../../interfaces/IProductCard";
import StarRating from "../starRating/starRating";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { image, name, rating, price } = product;
    return (
        <Link to={{ pathname: "/product/" + name, state: { product } }}>
            <ProductCardContainer image={image}>
                <div className="img-wrapper">
                    <div className="image"></div>
                </div>
                <h4 className="name">{name}</h4>
                <StarRating rating={rating} />
                <h4 className="price">{price}</h4>
                {/* <button className="select-button">select options</button> */}
            </ProductCardContainer>
        </Link>
    );
};

export default ProductCard;
