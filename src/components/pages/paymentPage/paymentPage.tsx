import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";

import americanExpress from "../../../assets/img/american-express.svg";
import mastercard from "../../../assets/img/mastercard.svg";
import visa from "../../../assets/img/visa.svg";
import card from "../../../assets/img/pay.svg";

const PaymentPageContainer = styled.div`
    margin-bottom: 50px;
    .payment {
        &__header {
            border-bottom: 1px solid ${props => props.theme.primaryColor};
            margin-bottom: 20px;
            padding-bottom: 20px;
            h1 {
                font-weight: 400;
                font-size: 38px;
            }
        }

        &__by-card {
            border: 1px solid ${props => props.theme.primaryColor};
            border-radius: 3px;
            margin-bottom: 20px;
            max-width: 500px;

            header {
                border-bottom: 1px solid ${props => props.theme.primaryColor};
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;

                div {
                    display: flex;

                    img {
                        margin-right: 10px;
                        width: 20px;
                    }

                    h4 {
                        font-weight: 400;
                    }
                }
            }

            form {
                padding: 20px;

                h6 {
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
`;

const PaymentPage = () => {
    return (
        <Layout isFooterPresent>
            <PaymentPageContainer>
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
                            <img src={americanExpress} alt={americanExpress} />
                        </div>
                    </header>
                    <form action="">
                        <Input
                            label="Card Number"
                            placeholder=".... .... .... ...."
                        />
                        <Input label="Expiry date(mm/yy)" placeholder="MM/YY" />
                    </form>
                </div>
                <Button blue_small_text>Pay</Button>
            </PaymentPageContainer>
        </Layout>
    );
};

export default PaymentPage;
