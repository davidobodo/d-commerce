import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";

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
            }
        }
    }
`;

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
                        </div>
                    </div>
                </div>
            </ProductPageContainer>
        </Layout>
    );
};

export default ProductPage;
