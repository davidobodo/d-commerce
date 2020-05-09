import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../shared/layout/layout";
import Dropdown from "../../shared/dropdown/dropdown";
import Counter from "../../shared/counter/counter";
import Tabs from "../../shared/tabs/tabs";
import { ProductPageContainer } from "./style";
import ProductCard from "../../shared/productCard/productCard";

import { useDispatch } from "react-redux";
import { updateCart, editItemQuantity } from "../../../redux/actions/cart";

import { v4 as uuidv4 } from "uuid";

import { myproducts } from "../../../constants/AllProducts";

const ProductPage = ({ location }) => {
    const [productSize, setProductSize] = useState();
    const [productQuantity, setProductQuantity] = useState();
    const {
        image,
        name,
        price,
        description,
        sizes,
        category: mainItemCategories
    } = location.state.product;
    const dispatch = useDispatch();
    const history = useHistory();

    const cart = useSelector(state => state.cart);

    const handleUpdateCart = () => {
        if (productSize === "Choose an option") {
            alert("please select a size");
            return;
        }
        const cartProductId = uuidv4();

        if (!!cart) {
            const getCurrentProduct: any = Object.entries(cart).find(
                (item: any) => {
                    return item[1].name === name;
                }
            );
            console.log(getCurrentProduct);
            if (getCurrentProduct) {
                const getCurrentProductQuantity =
                    getCurrentProduct[1].productQuantity;
                const getCurrentProductId = getCurrentProduct[0];

                const newProductQuantity =
                    getCurrentProductQuantity + productQuantity;

                dispatch(
                    editItemQuantity(getCurrentProductId, newProductQuantity)
                );
                history.push("/cart");
                return;
            }
        }
        dispatch(
            updateCart(
                cartProductId,
                name,
                image,
                price,
                productSize,
                productQuantity
            )
        );

        history.push("/cart");
    };

    const relatedProducts = myproducts.filter(product => {
        const { category: otherItemCategories } = product;
        function check(first, second) {
            var commonValuesLength = 0;
            for (let i = 0; i < first.length; i++) {
                for (let j = 0; j < second.length; j++) {
                    if (first[i] === second[j]) {
                        commonValuesLength += 1;
                    }
                }
            }
            return commonValuesLength;
        }

        return check(mainItemCategories, otherItemCategories) >= 2;
    });

    return (
        <Layout isFooterPresent>
            <ProductPageContainer>
                <div className="wrapper">
                    <div className="product">
                        <div className="product__image">
                            <img src={image} alt="" className="actual-image" />
                            <img
                                src={image}
                                alt={image}
                                className="preview-image"
                            />
                        </div>
                        <div className="product__details">
                            <h1 className="name">{name}</h1>
                            <h3 className="price">{price}</h3>
                            <p className="info">{description}</p>
                            {sizes && (
                                <div className="sizes">
                                    <h4>Sizes</h4>
                                    <Dropdown
                                        options={sizes}
                                        selectedOption={setProductSize}
                                    />
                                </div>
                            )}

                            <div className="counter-cart">
                                <Counter setValue={setProductQuantity} />
                                <button
                                    className="btn-cart"
                                    onClick={handleUpdateCart}
                                >
                                    ADD TO CART
                                </button>
                            </div>
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
                    <Tabs />
                    <div className="related-products">
                        <h1>Related products</h1>
                        <div className="related-products__products-wrapper">
                            {relatedProducts.slice(0, 4).map((product, i) => {
                                return (
                                    <ProductCard product={product} key={i} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </ProductPageContainer>
        </Layout>
    );
};

export default ProductPage;
