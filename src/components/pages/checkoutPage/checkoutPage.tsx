import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/button";
import * as EmailValidator from "email-validator";

import { CheckoutPageContainer } from "./style";

import { countryList } from "../../../constants/AllCountries";
import { setDeliveryDetails } from "../../../redux/actions/deliveryDetails";

const CheckoutPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { cart, firebase } = useSelector(state => {
        return {
            cart: state.cart,
            firebase: state.firebaseReducer
        };
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

    const [firstNameHasError, setFirstNameHasError] = useState(false);
    const [lastNameHasError, setLastNameHasError] = useState(false);
    const [countryHasError, setCountryHasError] = useState(false);
    const [stAddHasError, setStAddHasError] = useState(false);
    const [townHasError, setTownHasError] = useState(false);
    const [stateHasError, setStateHasError] = useState(false);
    const [zipHasError, setZipHasError] = useState(false);
    const [phoneHasError, setPhoneHasError] = useState(false);
    const [emailHasError, setEmailHasError] = useState(false);

    const [firstNameHasErrorMessage, setFirstNameHasErrorMessage] = useState(
        ""
    );
    const [lastNameHasErrorMessage, setLastNameHasErrorMessage] = useState("");
    const [countryHasErrorMessage, setCountryHasErrorMessage] = useState("");
    const [stAddHasErrorMessage, setStAddHasErrorMessage] = useState("");
    const [townHasErrorMessage, setTownHasErrorMessage] = useState("");
    const [stateHasErrorMessage, setStateHasErrorMessage] = useState("");
    const [zipHasErrorMessage, setZipHasErrorMessage] = useState("");
    const [phoneHasErrorMessage, setPhoneHasErrorMessage] = useState("");
    const [emailHasErrorMessage, setEmailHasErrorMessage] = useState("");

    let _firstNameHasError = false;
    let _lastNameHasError = false;
    let _countryHasError = false;
    let _stAddHasError = false;
    let _townHasError = false;
    let _stateHasError = false;
    let _zipHasError = false;
    let _phoneHasError = false;
    let _emailHasError = false;

    const handleOnChange = e => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleOnKeyDown = e => {
        const { name } = e.target;
        const { zip, email, phoneNumber } = userDetails;

        if (e.key === "Enter") return;

        if (name === "firstName") {
            setFirstNameHasError(false);
        }

        if (name === "lastName") {
            setLastNameHasError(false);
        }

        if (name === "streetAddress") {
            setStAddHasError(false);
        }

        if (name === "town") {
            setTownHasError(false);
        }

        if (name === "state") {
            setStateHasError(false);
        }

        if (name === "zip") {
            setZipHasError(false);
        }

        if (name === "email") {
            setEmailHasError(false);
        }

        if (name === "phoneNumber") {
            setPhoneHasError(false);
        }
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
        if (firstName === "") {
            _firstNameHasError = true;
            setFirstNameHasError(true);
            setFirstNameHasErrorMessage("first name cannot be empty");
        }

        if (!firstName.match(letters)) {
            _firstNameHasError = true;
            setFirstNameHasError(true);
            setFirstNameHasErrorMessage("first name must contain only letters");
        }
        //--

        //--
        if (lastName === "") {
            _lastNameHasError = true;
            setLastNameHasError(true);
            setLastNameHasErrorMessage("last name cannot be empty");
        }

        if (!lastName.match(letters)) {
            _lastNameHasError = true;
            setLastNameHasError(true);
            setLastNameHasErrorMessage("last name cannot be empty");
        }
        //--

        //--
        if (zip === "") {
            _zipHasError = true;
            setZipHasError(true);
            setZipHasErrorMessage("zip code cannot be empty");
        }

        if (zip.length !== 5) {
            _zipHasError = true;
            setZipHasError(true);
            setZipHasErrorMessage("zip code must be exactly 5 numbers");
        }

        if (zip.match(letters)) {
            _zipHasError = true;
            setZipHasError(true);
            setZipHasErrorMessage("zip code must contain only numbers");
        }
        //--

        if (streetAddress === "") {
            _stAddHasError = true;
            setStAddHasError(true);
            setStAddHasErrorMessage("street address cannot be empty");
        }

        if (town === "") {
            _townHasError = true;
            setTownHasError(true);
            setTownHasErrorMessage("town cannot be empty");
        }

        if (state === "") {
            _stateHasError = true;
            setStateHasError(true);
            setStateHasErrorMessage("state cannot be empty");
        }

        if (phoneNumber === "") {
            _phoneHasError = true;
            setPhoneHasError(true);
            setPhoneHasErrorMessage("phone number cannot be empty");
        }

        if (phoneNumber.match(letters)) {
            _phoneHasError = true;
            setPhoneHasError(true);
            setPhoneHasErrorMessage("phone number can only be numbers");
        }

        if (phoneNumber.length !== 11) {
            _phoneHasError = true;
            setPhoneHasError(true);
            setPhoneHasErrorMessage("phone number must be 11 characters");
        }

        if (!EmailValidator.validate(email)) {
            _emailHasError = true;
            setEmailHasError(true);
            setEmailHasErrorMessage("please enter a valid email address");
        }

        if (country === "Choose an option") {
            _countryHasError = true;
            setCountryHasError(true);
            setCountryHasErrorMessage("please select a country");
        }

        if (
            _firstNameHasError ||
            _lastNameHasError ||
            _phoneHasError ||
            _stAddHasError ||
            _stateHasError ||
            _townHasError ||
            _zipHasError ||
            _phoneHasError ||
            _emailHasError ||
            _countryHasError
        )
            return true;
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        const err = handleValidateForm();
        userDetails.country = currentCountry;

        if (err) return;
        dispatch(setDeliveryDetails(userDetails));
        history.push("/payment");
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
            return `$${total.toFixed(2)}`;
        }
    };

    useEffect(() => {
        setUserDetails({
            ...userDetails,
            country: currentCountry
        });
    }, [currentCountry]);

    if (!firebase.auth.uid) {
        return <Redirect to="/login" />;
    }

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
                            className="checkout__user-info__form"
                            onChange={handleOnChange}
                            id="delivery-form"
                            onSubmit={handleOnSubmit}
                            onKeyDown={handleOnKeyDown}
                        >
                            <h2>Delivery details</h2>
                            <div className="field-input">
                                <Input
                                    label="First name"
                                    name="firstName"
                                    required
                                    hasError={firstNameHasError}
                                    errorMessage={firstNameHasErrorMessage}
                                />
                                <Input
                                    label="Last name"
                                    name="lastName"
                                    required
                                    hasError={lastNameHasError}
                                    errorMessage={lastNameHasErrorMessage}
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
                                {countryHasError && (
                                    <h6 className="error-message">
                                        {countryHasErrorMessage}
                                    </h6>
                                )}
                            </div>
                            <div className="street-address">
                                <Input
                                    label="Street address"
                                    placeholder="House number and street name"
                                    name="streetAddress"
                                    required
                                    hasError={stAddHasError}
                                    errorMessage={stAddHasErrorMessage}
                                />
                                <Input
                                    placeholder="Apartment, suite, unit etc.(optional)"
                                    name="apartment"
                                />
                            </div>
                            <Input
                                label="Town/City"
                                required
                                name="town"
                                hasError={townHasError}
                                errorMessage={townHasErrorMessage}
                            />
                            <Input
                                label="State/County"
                                placeholder="Select an option..."
                                name="state"
                                required
                                hasError={stateHasError}
                                errorMessage={stateHasErrorMessage}
                            />

                            <Input
                                label="Postcode/ZIP"
                                name="zip"
                                required
                                hasError={zipHasError}
                                errorMessage={zipHasErrorMessage}
                            />
                            <Input
                                label="Phone Number"
                                name="phoneNumber"
                                type="tel"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required
                                hasError={phoneHasError}
                                errorMessage={phoneHasErrorMessage}
                            />
                            <Input
                                label="Email address"
                                name="email"
                                required
                                hasError={emailHasError}
                                errorMessage={emailHasErrorMessage}
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
                    <div className="checkout__btn">
                        <Button blue_small_text form="delivery-form">
                            PLACE ORDER
                        </Button>
                    </div>
                </div>
            </CheckoutPageContainer>
        </Layout>
    );
};

export default CheckoutPage;
