import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import banner from "../../../assets/img/banner.png";

const HomeContainer = styled.div`
    select {
        border: 1px solid rgba(0, 0, 0, 0.5);
        outline: none;
        border-radius: 0px;
        padding: 7px;
        font-size: 14px;
        margin-bottom: 20px;
    }

    .shop {
        margin-bottom: 20px;

        h1 {
            font-weight: 400;
            margin-bottom: 15px;
        }

        h6 {
            font-weight: 400;
        }
    }

    .product {
        border: 1px solid ${props => props.theme.primaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;

        &__img-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 15px;
        }

        &__name {
            margin-bottom: 15px;
            opacity: 0.7;
        }

        &__stars {
            margin-bottom: 15px;

            .checked {
                color: #ffa500;
            }
        }

        &__price {
            margin-bottom: 15px;
            opacity: 0.7;
        }

        &__select-button {
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
    }
`;

const Home = () => {
    return (
        <Layout isFooterPresent>
            <HomeContainer>
                <select name="" id="">
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="average-rating">
                        Sort by average rating
                    </option>
                    <option value="latest">Sort by latest</option>
                    <option value="low-high">Sort by price: low to high</option>
                    <option value="high-low">Sort by price: high to low</option>
                </select>
                <div className="shop">
                    <h1>Shop</h1>
                    <h6>Showing 1-12 of 20 results</h6>
                </div>
                <section>
                    <div className="product">
                        <div className="product__img-wrapper">
                            <div
                                style={{
                                    backgroundImage: `url(${banner})`,
                                    paddingTop: "280px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    maxWidth: "300px",
                                    width: "100%"
                                }}
                            ></div>
                        </div>
                        <h4 className="product__name">Racer T-shirt</h4>
                        <div className="product__stars">
                            <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                            />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h4 className="product__price">$20.98</h4>
                        <button className="product__select-button">
                            select options
                        </button>
                    </div>
                </section>
            </HomeContainer>
        </Layout>
    );
};

export default Home;
