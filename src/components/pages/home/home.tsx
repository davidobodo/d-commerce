import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";

import banner from "../../../assets/img/banner.png";

const HomeContainer = styled.div`
    select {
        border: 1px solid rgba(0, 0, 0, 0.5);
        outline: none;
        border-radius: 0px;
        padding: 7px;
        font-size: 14px;
    }

    .product {
        border: 1px solid ${props => props.theme.primaryColor};
    }

    img {
        width: 100%;
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
                <div>
                    <h1>Shop</h1>
                    <h6>Showing 1-12 of 20 results</h6>
                </div>
                <section>
                    <div className="product">
                        <div className="product__img-wrapper">
                            <img src={banner} alt="product" />
                        </div>
                        <h3 className="product__name">Racer T-shirt</h3>
                        <div className="product__stars"></div>
                        <div className="product__price">$20.98</div>
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
