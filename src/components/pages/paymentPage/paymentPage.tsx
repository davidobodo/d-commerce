import React, { useState } from "react";
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
                            />
                            <Input
                                label="Expiry date(mm/yy)"
                                placeholder="MM/YY"
                                name="expiryDate"
                                value={expiryDate.value}
                                handleOnChange={handleOnChange}
                            />
                            <Input
                                label="CVV"
                                placeholder="..."
                                name="cvv"
                                value={cvv.value}
                                handleOnChange={handleOnChange}
                            />
                            <Input
                                label="Pin"
                                placeholder="•••"
                                name="pin"
                                type="password"
                                value={pin.value}
                                handleOnChange={handleOnChange}
                            />
                        </form>
                    </div>
                    <Link to="/orderconfirmation">
                        <Button blue_small_text>Pay</Button>
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
