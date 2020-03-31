import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../shared/layout/layout";

import { CheckoutPageContainer } from "./style";

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
                </div>
            </CheckoutPageContainer>
        </Layout>
    );
};

export default CheckoutPage;
