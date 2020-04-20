import React, { useState, useEffect } from "react";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import { PaymentPageContainer } from "./style";
import { Link } from "react-router-dom";

import americanExpress from "../../../assets/img/american-express.svg";
import mastercard from "../../../assets/img/mastercard.svg";
import visa from "../../../assets/img/visa.svg";
import card from "../../../assets/img/pay.svg";

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState({
        value: "",
        hasError: false,
        errorMessage: ""
    });

    const [expiryDate, setExpiryDate] = useState({
        value: "",
        hasError: false,
        errorMessage: ""
    });

    const [cvv, setCvv] = useState({
        value: "",
        hasError: false,
        errorMessage: ""
    });

    const [pin, setPin] = useState({
        value: "",
        hasError: false,
        errorMessage: ""
    });

    const [err, setErr] = useState(true);

    const handleOnChange = e => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            const _value = value.match(/(\d{1,4})/g) || [];

            const formattedValue = _value.join(" ");

            if (value.length <= 19) {
                setCardNumber({ ...cardNumber, value: formattedValue });
            }
        }

        if (name === "expiryDate") {
            const _value = value.match(/(\d{1,2})/g) || [];

            const formattedValue = _value.join("/");

            if (value.length <= 5) {
                setExpiryDate({ ...expiryDate, value: formattedValue });
            }
        }

        if (name === "cvv") {
            const _value = value.match(/(\d{1,3})/g) || [];

            const formattedValue = _value.join("");

            if (value.length <= 3) {
                setCvv({ ...cvv, value: formattedValue });
            }
        }

        if (name === "pin") {
            const _value = value.match(/(\d{1,4})/g) || [];

            const formattedValue = _value.join("");

            if (value.length <= 4) {
                setPin({ ...pin, value: formattedValue });
            }
        }
    };

    const handleValidateInput = e => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            if (value.length !== 19) {
                setCardNumber({
                    ...cardNumber,
                    hasError: true,
                    errorMessage: "Card Number must be 19 digits"
                });
            } else {
                setCardNumber({
                    ...cardNumber,
                    hasError: false,
                    errorMessage: ""
                });
            }
        }

        if (name === "expiryDate") {
            const day = value.slice(0, 2);

            if (value.length !== 5) {
                setExpiryDate({
                    ...expiryDate,
                    hasError: true,
                    errorMessage: "enter complete date"
                });
            } else if (day < 1 || day > 31) {
                setExpiryDate({
                    ...expiryDate,
                    hasError: true,
                    errorMessage: "enter a valid day"
                });
            } else {
                setExpiryDate({
                    ...expiryDate,
                    hasError: false,
                    errorMessage: ""
                });
            }
        }

        if (name === "cvv") {
            if (value.length !== 3) {
                setCvv({
                    ...cvv,
                    hasError: true,
                    errorMessage: "enter complete cvv"
                });
            } else {
                setCvv({
                    ...cvv,
                    hasError: false,
                    errorMessage: ""
                });
            }
        }

        if (name === "pin") {
            if (value.length !== 4) {
                setPin({
                    ...pin,
                    hasError: true,
                    errorMessage: "card pin must be 4 digits"
                });
            } else {
                setPin({
                    ...pin,
                    hasError: false,
                    errorMessage: ""
                });
            }
        }
    };

    useEffect(() => {
        if (
            !cardNumber.hasError &&
            !expiryDate.hasError &&
            !cvv.hasError &&
            !pin.hasError &&
            cardNumber.value.length !== 0
        ) {
            setErr(false);
        }
    }, [cardNumber.hasError, expiryDate.hasError, cvv.hasError, pin.hasError]);

    console.log(err);
    return (
        <Layout isFooterPresent>
            <PaymentPageContainer>
                <section>
                    <div className="payment__header">
                        <h1>Payment</h1>
                    </div>
                    <div className="payment__by-card">
                        <header>
                            <div>
                                <img src={card} alt={card} />
                                <h4>Pay with Card</h4>
                            </div>
                            <div>
                                <img src={mastercard} alt={mastercard} />
                                <img src={visa} alt={visa} />
                                <img
                                    src={americanExpress}
                                    alt={americanExpress}
                                />
                            </div>
                        </header>
                        <form>
                            <Input
                                label="Card Number"
                                placeholder="XXXX XXXX XXXX XXXX"
                                name="cardNumber"
                                value={cardNumber.value}
                                handleOnChange={handleOnChange}
                                handleOnBlur={handleValidateInput}
                                hasError={cardNumber.hasError}
                                errorMessage={cardNumber.errorMessage}
                            />
                            <Input
                                label="Expiry date(mm/yy)"
                                placeholder="MM/YY"
                                name="expiryDate"
                                value={expiryDate.value}
                                handleOnChange={handleOnChange}
                                handleOnBlur={handleValidateInput}
                                hasError={expiryDate.hasError}
                                errorMessage={expiryDate.errorMessage}
                            />
                            <Input
                                label="CVV"
                                placeholder="•••"
                                name="cvv"
                                value={cvv.value}
                                handleOnChange={handleOnChange}
                                handleOnBlur={handleValidateInput}
                                hasError={cvv.hasError}
                                errorMessage={cvv.errorMessage}
                            />
                            <Input
                                label="Pin"
                                placeholder="****"
                                name="pin"
                                type="password"
                                value={pin.value}
                                handleOnChange={handleOnChange}
                                handleOnBlur={handleValidateInput}
                                hasError={pin.hasError}
                                errorMessage={pin.errorMessage}
                            />
                        </form>
                    </div>
                    <Link to="/orderconfirmation">
                        <Button blue_small_text disabled={err}>
                            Pay
                        </Button>
                    </Link>
                </section>
                <section className="note-section">
                    <h4>Note:</h4>
                    <p>
                        Not to worry, just fill in random details as your card,
                        this is just to test the website
                    </p>
                </section>
            </PaymentPageContainer>
        </Layout>
    );
};

export default PaymentPage;
