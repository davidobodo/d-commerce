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
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: ""
    });

    const handleOnChange = e => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            const _value = value.match(/(\d{1,4})/g) || [];

            const formattedValue = _value.join(" ");

            if (value.length <= 19) {
                setCardDetails({ ...cardDetails, [name]: formattedValue });
            }
        }

        if (name === "expiryDate") {
            const _value = value.match(/(\d{1,2})/g) || [];

            const formattedValue = _value.join("/");

            if (value.length <= 5) {
                setCardDetails({ ...cardDetails, [name]: formattedValue });
            }
        }
    };

    const { cardNumber, expiryDate, cvv } = cardDetails;
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
                                value={cardNumber}
                                handleOnChange={handleOnChange}
                            />
                            <Input
                                label="Expiry date(mm/yy)"
                                placeholder="MM/YY"
                                name="expiryDate"
                                value={expiryDate}
                                handleOnChange={handleOnChange}
                            />
                            <Input
                                label="CVV"
                                placeholder="..."
                                name="cvv"
                                value={cvv}
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
