import React from "react";
import { CartPageContainer } from "./style";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";
import banner from "../../../assets/img/banner.png";
import Counter from "../../shared/counter/counter";

const cart_products = [
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
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    }
];

const CartPage = () => {
    return (
        <Layout isFooterPresent>
            <CartPageContainer>
                <div className="wrapper">
                    <div className="cart">
                        <div className="cart__header">
                            <h1>Cart</h1>
                        </div>
                        <div className="cart__alert">
                            <div className="first-section">
                                <span>tic</span>
                                <h4>
                                    <span>Coffee T-shirt</span> has been added
                                    to your cart
                                </h4>
                            </div>
                            <div className="second-section">
                                <Button>Continue Shopping</Button>
                            </div>
                        </div>
                        <table className="cart__table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart_products.map(product => {
                                    const {
                                        image,
                                        name,
                                        rating,
                                        price
                                    } = product;
                                    return (
                                        <tr>
                                            <td>cancel</td>
                                            <td className="col-img">
                                                <img src={image} alt={image} />
                                            </td>
                                            <td className="col-name-size">
                                                <h4>{name}</h4>
                                                <h5>
                                                    Sizes: <span>Large</span>
                                                </h5>
                                            </td>
                                            <td>{price}</td>
                                            <td>
                                                <Counter />
                                            </td>
                                            <td>{price}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </CartPageContainer>
        </Layout>
    );
};

export default CartPage;
