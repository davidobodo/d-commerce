import React from "react";
import { CartPageContainer } from "./style";
import Layout from "../../shared/layout/layout";

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
                            <div>
                                <span>Coffee T-shirt</span> has been added to
                                your cart
                            </div>
                            <div>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </CartPageContainer>
        </Layout>
    );
};

export default CartPage;
