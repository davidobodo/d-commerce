import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProductCardContainer } from "./style";

import { ProductCardProps } from "../../../interfaces/IProductCard";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { image, name, rating, price } = product;
    return (
        <Link to={"/product/" + name}>
            <ProductCardContainer image={image}>
                <div className="img-wrapper">
                    <div className="image"></div>
                </div>
                <h4 className="name">{name}</h4>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map(i => {
                        return i <= rating ? (
                            <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                            />
                        ) : (
                            <FontAwesomeIcon icon={faStar} />
                        );
                    })}
                </div>
                <h4 className="price">{price}</h4>
                <button className="select-button">select options</button>
            </ProductCardContainer>
        </Link>
    );
};

export default ProductCard;
