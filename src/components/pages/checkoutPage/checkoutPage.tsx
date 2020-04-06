import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/button";

import { CheckoutPageContainer } from "./style";

import { countryList } from "../../../constants/AllCountries";

const CheckoutPage = () => {
    const history = useHistory();
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

    const handleSetCurrentCountry = () => {
        // setUserDetails({
        //     ...userDetails,
        //     country: currentCountry
        // });
    };

    const handleOnChange = e => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleValidateForm = () => {
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
        if (firstName == "") {
            console.log("Name cannot be empty");
        }

        if (!firstName.match(letters)) {
            console.log("please input only letters");
        }
        //--

        //--
        if (lastName == "") {
            console.log("Name cannot be empty");
        }

        if (!lastName.match(letters)) {
            console.log("please input only letters");
        }
        //--

        //--
        if (zip == "") {
            console.log("Zip cannot be empty");
        }

        if (zip.length !== 5) {
            console.log("zip code must be 5 numbers");
        }
        //--

        if (company == "") {
            console.log("company cannot be empty");
        }

        if (streetAddress == "") {
            console.log("street address cannot be empty");
        }

        if (town == "") {
            console.log("town cannot be empty");
        }

        if (state == "") {
            console.log("state cannot be empty");
        }

        if (phoneNumber == "") {
            console.log("phoneNumber cannot be empty");
        }

        if (email == "") {
            console.log("email cannot be empty");
        }

        if (country === "Choose an option") {
            console.log("Please select a country");
        }
    };

    const handleOnSubmit = e => {
        handleValidateForm();
        userDetails.country = currentCountry;
        console.log(userDetails);
        // history.push("/payment");
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
                            onSubmit={handleOnSubmit}
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
                            <Input label="Phone" name="phone" required />
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
                    <div className="checkout__btn" onClick={handleOnSubmit}>
                        <Button blue_small_text>PLACE ORDER</Button>
                    </div>
                </div>
            </CheckoutPageContainer>
        </Layout>
    );
};

export default CheckoutPage;
