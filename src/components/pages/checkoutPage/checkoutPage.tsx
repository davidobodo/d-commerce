import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/button";
import * as EmailValidator from "email-validator";

import { CheckoutPageContainer } from "./style";

import { countryList } from "../../../constants/AllCountries";

const CheckoutPage = () => {
    const history = useHistory();
    const cart = useSelector(state => {
        return state.cart;
    }, shallowEqual);
    const [currentCountry, setCurrentCountry] = useState();

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        streetAddress: "",
        apartment: "",
        town: "",
        state: "",
        zip: "",
        phoneNumber: "",
        email: "",
        orderNotes: ""
    });

    const handleOnChange = e => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleOnSubmit = () => {
        userDetails.country = currentCountry;
        console.log(userDetails);
        history.push("/payment");
    };

    const handleValidateForm = e => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            company,
            country,
            streetAddress,
            town,
            state,
            zip,
            phoneNumber,
            email
        } = userDetails;
        const letters = /^[A-Za-z]+$/;

        //--
        // if (firstName === "") {
        //     console.log("Name cannot be empty");
        // }

        // if (!firstName.match(letters)) {
        //     console.log("please input only letters");
        // }
        //--

        //--
        // if (lastName === "") {
        //     console.log("Name cannot be empty");
        // }

        // if (!lastName.match(letters)) {
        //     console.log("please input only letters");
        // }
        //--

        //--
        // if (zip === "") {
        //     console.log("Zip cannot be empty");
        // }

        // if (zip.length !== 5) {
        //     console.log("zip code must be 5 numbers");
        // }
        //--

        // if (company === "") {
        //     console.log("company cannot be empty");
        // }

        // if (streetAddress === "") {
        //     console.log("street address cannot be empty");
        // }

        // if (town === "") {
        //     console.log("town cannot be empty");
        // }

        // if (state === "") {
        //     console.log("state cannot be empty");
        // }

        // if (phoneNumber === "") {
        //     console.log("phoneNumber cannot be empty");
        // }

        // if (email === "") {
        //     console.log("email cannot be empty");
        // }

        // if (country === "Choose an option") {
        //     console.log("Please select a country");
        // }

        if (
            firstName === "" ||
            lastName === "" ||
            zip === "" ||
            streetAddress === "" ||
            town === "" ||
            state === "" ||
            phoneNumber === "" ||
            EmailValidator.validate(email) === false
        ) {
            alert("Please fill required fields with correct details");
        } else {
            handleOnSubmit();
        }
    };

    const renderItemTotalPrice = (price: any, quantity: any) => {
        const totalPrice = `$${(parseFloat(price.slice(1)) * quantity).toFixed(
            2
        )}`;
        return totalPrice;
    };

    const renderTotalPrice = () => {
        if (!!cart) {
            const total = Object.values(cart)
                .map((item: any) => {
                    const { price, productQuantity } = item;
                    const item_total_price = (
                        parseFloat(price.slice(1)) * parseInt(productQuantity)
                    ).toFixed(2);
                    return parseFloat(item_total_price);
                })
                .reduce((i: number, j: any) => {
                    return (i + j) as number;
                }, 0);
            return `$${total}`;
        }
    };

    return (
        <Layout isFooterPresent>
            <CheckoutPageContainer>
                <div className="checkout">
                    <div className="checkout__header">
                        <h1>Checkout</h1>
                    </div>
                    {/* <div className="checkout__alert">
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
                    </div> */}
                    <div className="checkout__user-info">
                        <form
                            action=""
                            className="checkout__user-info__form"
                            onChange={handleOnChange}
                            onSubmit={handleValidateForm}
                        >
                            <h2>Billing details</h2>
                            <div className="field-input">
                                <Input
                                    label="First name"
                                    name="firstName"
                                    required
                                />
                                <Input
                                    label="Last name"
                                    name="lastName"
                                    required
                                />
                            </div>
                            <Input
                                label="Company name(optional)"
                                name="company"
                            />
                            <div className="dropdown">
                                <label htmlFor="">
                                    <h6>Country</h6>
                                </label>
                                <Dropdown
                                    options={countryList}
                                    selectedOption={setCurrentCountry}
                                />
                            </div>
                            <div className="street-address">
                                <Input
                                    label="Street address"
                                    placeholder="House number and street name"
                                    name="streetAddress"
                                    required
                                />
                                <Input
                                    placeholder="Apartment, suite, unit etc.(optional)"
                                    name="apartment"
                                />
                            </div>
                            <Input label="Town/City" required name="town" />
                            <Input
                                label="State/County"
                                placeholder="Select an option..."
                                name="state"
                                required
                            />

                            <Input label="Postcode/ZIP" name="zip" required />
                            <Input label="Phone" name="phoneNumber" required />
                            <Input
                                label="Email address"
                                name="email"
                                required
                            />
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
                                {!!cart &&
                                    Object.values(cart).map((item: any, i) => {
                                        const {
                                            name,
                                            price,
                                            productQuantity
                                        } = item;
                                        return (
                                            <tr key={i}>
                                                <td>{name}</td>
                                                <td>
                                                    {renderItemTotalPrice(
                                                        price,
                                                        productQuantity
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                            <tfoot>
                                {/* <tr>
                                    <td>Subtotal:</td>
                                    <td>{renderTotalPrice()}</td>
                                </tr> */}
                                <tr>
                                    <td>Total:</td>
                                    <td>{renderTotalPrice()}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="checkout__btn" onClick={handleValidateForm}>
                        <Button blue_small_text>PLACE ORDER</Button>
                    </div>
                </div>
            </CheckoutPageContainer>
        </Layout>
    );
};

export default CheckoutPage;
