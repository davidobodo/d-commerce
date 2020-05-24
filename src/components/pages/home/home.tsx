import React, { useState, useEffect } from "react";
import Layout from "../../shared/layout/layout";

import ProductCard from "../../shared/productCard/productCard";

import { HomeContainer } from "./style";
import { HomeProps } from "../../../interfaces/IHome";

import { myproducts } from "../../../constants/AllProducts";
import useDebounce from '../../../utils/customHooks/useDebounce';

// const allSorts = [
//     "Default sorting",
//     "Sort by popularity",
//     "Sort by average rating",
//     "Sort by latest",
//     "Sort by price: low to high",
//     "Sort by price: high to low"
// ];

const Home: React.FC<HomeProps> = () => {
    // const [sorting, setSorting] = useState();
    const [currentProducts, setCurrentProducts] = useState(myproducts);

    const [searchedProduct, setSearchedProduct] = useState('');
    const _searchedProduct = useDebounce(searchedProduct, 500);

    useEffect(() => {
        handleSearchProduct(_searchedProduct)
    }, [_searchedProduct])

    const handleSearchProduct = wordToMatch => {
        const regex = new RegExp(wordToMatch, "gi");

        const searchedProducts = myproducts.filter(product => {
            const { category } = product;
            for (let i = 0; i < category.length; i++) {
                if (category[i].match(regex)) {
                    return product
                }
            }
            return null;
        });

        setCurrentProducts(searchedProducts);
    };


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
                    {/* <Dropdown options={allSorts} selectedOption={setSorting} /> */}
                    <div className="shop">
                        <h1>Shop</h1>
                        <input
                            type="text"
                            placeholder="search"
                            className="sorting-input"
                            value={searchedProduct}
                            onChange={(e) => setSearchedProduct(e.target.value)}
                        />
                        {/* <h6>Showing 1-12 of 20 results</h6> */}
                    </div>
                </div>
                <section className="products">
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product) => {
                            const { name, image, rating, price, id, category, description } = product;
                            return <ProductCard
                                name={name}
                                image={image}
                                rating={rating}
                                price={price}
                                id={id}
                                key={id}
                                category={category}
                                description={description} />;
                        })
                    ) : (
                            <p>Sorry we dont have such product</p>
                        )}
                </section>
            </HomeContainer>
        </Layout>
    );
};

export default Home;
