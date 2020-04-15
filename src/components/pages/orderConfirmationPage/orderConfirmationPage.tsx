import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";
import { OrderConfirmationPageContainer } from "./style";
import checkmark from "../../../assets/img/confirm.svg";

const OrderConfirmationPage = () => {
    return (
        <Layout isFooterPresent>
            <OrderConfirmationPageContainer>
                <section className="order-confirmation__header">
                    <img src={checkmark} alt="" />
                    <h2>We received your order</h2>
                    <h4>Order no# 1234567890</h4>
                    <p>
                        A copy of your receipt has been sent to:
                        obododavid5@gmail.com
                    </p>
                </section>
                <section className="order-confirmation__summary">
                    <h4 className="order-confirmation__summary__header">
                        Order Summary
                    </h4>
                    <div className="order-confirmation__summary__item">
                        <div className="left-column">
                            <img
                                src="https://images.unsplash.com/photo-1586894172418-c7e4c755e1ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt=""
                            />
                        </div>
                        <div className="center-column">
                            <h4>Blazing Suit</h4>
                            <p>Size: Medium</p>
                            <p>Qty: 2</p>
                        </div>
                        <div className="right-column">$4.20</div>
                    </div>
                    <div className="order-confirmation__summary__item">
                        <div className="left-column">
                            <img
                                src="https://images.unsplash.com/photo-1586894172418-c7e4c755e1ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt=""
                            />
                        </div>
                        <div className="center-column">
                            <h4>Blazing Suit</h4>
                            <p>Size: Medium</p>
                            <p>Qty: 2</p>
                        </div>
                        <div className="right-column">$4.20</div>
                    </div>
                    <div className="order-confirmation__summary__total">
                        <span>Total:</span>
                        <span>$15678.98</span>
                    </div>
                </section>
                <section className="order-confirmation__delivery-details">
                    <h4 className="order-confirmation__delivery-details__header">
                        Delivery Details
                    </h4>
                    <div className="order-confirmation__delivery-details__section">
                        <h5>Delivery for</h5>
                        <p>Mr Obodod David</p>
                        <p>+234-810-554-6642</p>
                    </div>
                    <div className="order-confirmation__delivery-details__section">
                        <h5>Address</h5>
                        <p>19 Olanipekun street, oke-ira ogba </p>
                        <p>Lagos Nigeria</p>
                    </div>
                    <div className="order-confirmation__delivery-details__section">
                        <h5>Credit Card</h5>
                        <p>Card Number:</p>
                        <p>Expiry Date: 09/22</p>
                        <p>Amount: $76.9</p>
                    </div>
                </section>
                <Link to={"/"}>
                    <Button blue_small_text>Return to Home</Button>
                </Link>
            </OrderConfirmationPageContainer>
        </Layout>
    );
};

export default OrderConfirmationPage;
