import React from "react";
import Layout from "../../shared/layout/layout";
import Dropdown from "../../shared/dropdown/dropdown";
import { ProductPageContainer } from "./style";

const allSizes = ["Large", "Medium", "Small", "X-Large", "X-small"];

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
                            <button className="btn-cart">ADD TO CART</button>
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
                </div>
            </ProductPageContainer>
        </Layout>
    );
};

export default ProductPage;
