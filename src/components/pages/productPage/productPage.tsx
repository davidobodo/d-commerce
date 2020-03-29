import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";
import Dropdown from "../../shared/dropdown/dropdown";

const ProductPageContainer = styled.div`
    .wrapper {
        .product {
            border-top: 1px solid ${props => props.theme.primaryColor};
            margin-top: 20px;
            padding-top: 15px;

            &__image {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 30px;

                .actual-image {
                    object-fit: cover;
                    width: 100%;
                    max-width: 400px;
                    height: auto;
                    max-height: 400px;
                    margin-bottom: 15px;
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
    }
`;

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
