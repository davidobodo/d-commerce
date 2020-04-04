import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../shared/layout/layout";
import Dropdown from "../../shared/dropdown/dropdown";
import Counter from "../../shared/counter/counter";
import Tabs from "../../shared/tabs/tabs";
import { ProductPageContainer } from "./style";
import ProductCard from "../../shared/productCard/productCard";
import banner from "../../../assets/img/banner.png";

import { useDispatch } from "react-redux";
import { updateCart } from "../../../redux/actions/cart";

import { v4 as uuidv4 } from "uuid";

const related_products = [
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    }
];

const ProductPage = ({ location }) => {
    const [productSize, setProductSize] = useState();
    const [productQuantity, setProductQuantity] = useState();
    const {
        image,
        name,
        price,
        description,
        sizes,
        id: productId
    } = location.state.product;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUpdateCart = () => {
        if (productSize === "Choose an option") {
            alert("please select a size");
            return;
        }
        const cartProductId = uuidv4();
        dispatch(
            updateCart(
                cartProductId,
                name,
                image,
                price,
                productSize,
                productQuantity
            )
        );
        history.push("/cart");
    };
    return (
        <Layout isFooterPresent>
            <ProductPageContainer>
                <div className="wrapper">
                    <div className="product">
                        <div className="product__image">
                            <img src={image} alt="" className="actual-image" />
                            <img
                                src={image}
                                alt={image}
                                className="preview-image"
                            />
                        </div>
                        <div className="product__details">
                            <h1 className="name">{name}</h1>
                            <h3 className="price">{price}</h3>
                            <p className="info">{description}</p>
                            {sizes && (
                                <div className="sizes">
                                    <h4>Sizes</h4>
                                    <Dropdown
                                        options={sizes}
                                        selectedOption={setProductSize}
                                    />
                                </div>
                            )}

                            <div className="counter-cart">
                                <Counter setValue={setProductQuantity} />
                                <button
                                    className="btn-cart"
                                    onClick={handleUpdateCart}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                            <div className="data">
                                <div className="data__section">
                                    <span>SKU:</span> N/A
                                </div>
                                <div className="data__section">
                                    <span>Categories:</span> Apparel, T-shirts,
                                    Womans
                                </div>
                                <div className="data__section">
                                    <span>Tags:</span> Brand, clothing, T-shirts
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs />
                    <div className="related-products">
                        <h1>Related products</h1>
                        <div className="related-products__products-wrapper">
                            {related_products.map((product, i) => {
                                return (
                                    <ProductCard product={product} key={i} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </ProductPageContainer>
        </Layout>
    );
};

export default ProductPage;
