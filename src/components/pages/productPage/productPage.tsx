import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../shared/layout/layout";
import Dropdown from "../../shared/dropdown/dropdown";
import Counter from "../../shared/counter/counter";
import Tabs from "../../shared/tabs/tabs";
import { ProductPageContainer } from "./style";
import ProductCard from "../../shared/productCard/productCard";
import banner from "../../../assets/img/banner.png";

const allSizes = [
    "Choose an option",
    "Large",
    "Medium",
    "Small",
    "X-Large",
    "X-small"
];

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
    const { image, name, price, description } = location.state.product;
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
                            <div className="sizes">
                                <h4>Sizes</h4>
                                <Dropdown options={allSizes} />
                            </div>
                            <div className="counter-cart">
                                <Counter />
                                <Link to="/cart">
                                    <button className="btn-cart">
                                        ADD TO CART
                                    </button>
                                </Link>
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
