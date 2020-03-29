import React from "react";
import Layout from "../../shared/layout/layout";

import ProductCard from "../../shared/productCard/productCard";
import Dropdown from "../../shared/dropdown/dropdown";

import { HomeContainer } from "./style";
import { HomeProps } from "../../../interfaces/IHome";

import { myproducts } from "../../../AllProducts";

const allSorts = [
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low"
];

const Home: React.FC<HomeProps> = () => {
    return (
        <Layout isFooterPresent>
            <HomeContainer>
                {/* <select name="" id="">
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="average-rating">
                        Sort by average rating
                    </option>
                    <option value="latest">Sort by latest</option>
                    <option value="low-high">Sort by price: low to high</option>
                    <option value="high-low">Sort by price: high to low</option>
                </select> */}
                <div className="dropdown-shop">
                    <Dropdown options={allSorts} />
                    <div className="shop">
                        <h1>Shop</h1>
                        <h6>Showing 1-12 of 20 results</h6>
                    </div>
                </div>
                <section className="products">
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
