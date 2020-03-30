import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../shared/layout/layout";
import Dropdown from "../../shared/dropdown/dropdown";
import Tabs from "../../shared/tabs/tabs";
import { ProductPageContainer } from "./style";
import ProductCard from "../../shared/productCard/productCard";
import banner from "../../../assets/img/banner.png";

const allSizes = ["Large", "Medium", "Small", "X-Large", "X-small"];

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

const ProductPage = () => {
    return (
        <Layout isFooterPresent>
            <ProductPageContainer>
                <div className="wrapper">
                    <div className="product">
                        <div className="product__image">
                            <img
                                src="https://images.unsplash.com/photo-1585314540179-a05ddca757c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt=""
                                className="actual-image"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1585314540179-a05ddca757c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt=""
                                className="preview-image"
                            />
                        </div>
                        <div className="product__details">
                            <h1 className="name">Coffee T-shirt</h1>
                            <h3 className="price">$20.78</h3>
                            <p className="info">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Magni, excepturi qui expedita
                                tempore voluptates possimus provident libero
                                neque, nobis, laudantium corporis deleniti fuga
                                voluptas beatae natus quisquam! Eveniet, nulla
                                soluta!
                            </p>
                            <div className="sizes">
                                <h4>Sizes</h4>
                                <Dropdown options={allSizes} />
                            </div>
                            <Link to="/cart">
                                <button className="btn-cart">
                                    ADD TO CART
                                </button>
                            </Link>
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
                            {related_products.map(product => {
                                const { image, name, rating, price } = product;
                                return (
                                    <ProductCard
                                        image={image}
                                        name={name}
                                        rating={rating}
                                        price={price}
                                    />
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
