import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/button";

import { CheckoutPageContainer } from "./style";

import { countryList } from "../../../constants/AllCountries";

const CheckoutPage = () => {
    return (
        <Layout isFooterPresent>
            <CheckoutPageContainer>
                <div className="checkout">
                    <div className="checkout__header">
                        <h1>Checkout</h1>
                    </div>
                    <div className="checkout__alert">
                        <FontAwesomeIcon icon={faInfo} />
                        <h4>
                            Returning customer? <span>Click here to login</span>
                        </h4>
                    </div>
                    <div className="checkout__alert">
                        <FontAwesomeIcon icon={faInfo} />
                        <h4>
                            Have a coupon?{" "}
                            <span>Click here to enter your coupon</span>
                        </h4>
                    </div>
                    <div className="checkout__user-info">
                        <form action="" className="checkout__user-info__form">
                            <h2>Billing details</h2>
                            <div className="field-input">
                                <Input label="First name" />
                                <Input label="Last name" />
                            </div>
                            <Input label="Company name(optional)" />
                            <div className="dropdown">
                                <label htmlFor="">
                                    <h6>Country</h6>
                                </label>
                                <Dropdown
                                    options={countryList}
                                    selectedOption={() => console.log("here")}
                                />
                            </div>
                            <div className="street-address">
                                <Input
                                    label="Street address"
                                    placeholder="House number and street name"
                                />
                                <Input placeholder="Apartment, suite, unit etc.(optional)" />
                            </div>
                            <Input label="Town/City" />
                            <Input
                                label="State/County"
                                placeholder="Select an option..."
                            />

                            <Input label="Postcode/ZIP" />
                            <Input label="Phone" />
                            <Input label="Email address" />
                        </form>
                        <div className="checkout__user-info__add-info">
                            <h2>Additional Information</h2>
                            <div className="field-textarea">
                                <label htmlFor="">
                                    <h6>Order notes (optional)</h6>
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Notes about your order e.g special notes for delivery"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__total">
                        <h2>Your Orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td>Product</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>T-shirt</td>
                                    <td>$56.45</td>
                                </tr>
                                <tr>
                                    <td>Boffin-T-shirt</td>
                                    <td>$56.45</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Subtotal:</td>
                                    <td>$180.96</td>
                                </tr>
                                <tr>
                                    <td>Total:</td>
                                    <td>$180.96</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <Link to="payment">
                        <Button blue_small_text>PLACE ORDER</Button>
                    </Link>
                </div>
            </CheckoutPageContainer>
        </Layout>
    );
};

export default CheckoutPage;
