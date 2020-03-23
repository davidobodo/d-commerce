import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";

import banner from "../../../assets/img/banner.png";
import ProductCard from "../../shared/productCard/productCard";

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
        padding-bottom: 15px;
        border-bottom: 1px solid ${props => props.theme.primaryColor};

        h1 {
            font-weight: 400;
            margin-bottom: 15px;
        }

        h6 {
            font-weight: 400;
        }
    }
`;

const myproducts = [
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
                    {myproducts.map(product => {
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
                </section>
            </HomeContainer>
        </Layout>
    );
};

export default Home;
