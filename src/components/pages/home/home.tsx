import React, { useState } from "react";
import Layout from "../../shared/layout/layout";

import ProductCard from "../../shared/productCard/productCard";

import { HomeContainer } from "./style";
import { HomeProps } from "../../../interfaces/IHome";

import { myproducts } from "../../../AllProducts";

const Home: React.FC<HomeProps> = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentOption, setCurrentOption] = useState("Default sorting");

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSelectOption = e => {
        setCurrentOption(e.target.innerHTML);
    };

    return (
        <Layout isFooterPresent>
            <HomeContainer showDropdown={showDropdown}>
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
                    <section className="dropdown" onClick={handleShowDropdown}>
                        {currentOption}
                        <ul onClick={handleSelectOption}>
                            <li>Default sorting</li>
                            <li>Sort by popularity</li>
                            <li>Sort by average rating</li>
                            <li>Sort by latest</li>
                            <li>Sort by price: low to high</li>
                            <li>Sort by price: high to low</li>
                        </ul>
                    </section>
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
