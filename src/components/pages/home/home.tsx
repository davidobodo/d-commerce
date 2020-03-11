import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";

const HomeContainer = styled.div`
    select {
        border: 1px solid rgba(0, 0, 0, 0.5);
        outline: none;
        border-radius: 0px;
        padding: 7px;
        font-size: 14px;
        border-bottom: 5px solid ${props => props.theme.textColor};
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
            </HomeContainer>
        </Layout>
    );
};

export default Home;
