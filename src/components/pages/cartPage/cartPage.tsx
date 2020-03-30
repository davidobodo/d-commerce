import React from "react";
import { CartPageContainer } from "./style";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";

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
                    </div>
                </div>
            </CartPageContainer>
        </Layout>
    );
};

export default CartPage;
