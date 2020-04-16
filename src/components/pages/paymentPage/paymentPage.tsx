import React from "react";
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
                        <form action="">
                            <Input
                                label="Card Number"
                                placeholder=".... .... .... ...."
                            />
                            <Input
                                label="Expiry date(mm/yy)"
                                placeholder="MM/YY"
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
