import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartPageContainer } from "./style";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";
import banner from "../../../assets/img/banner.png";
import Counter from "../../shared/counter/counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { cartActionInterface } from "../../../redux/reducers/all/cart/cartInterface";
import { updateCount } from "../../../redux/actions/cart";

const CartPage = () => {
    const [quantity, setQuantity] = useState();

    const cart = useSelector(state => state.cart, shallowEqual);

    const dispatch = useDispatch();

    const renderItemTotalPrice = (price: any, quantity: any) => {
        const totalPrice = `$${(parseFloat(price.slice(1)) * quantity).toFixed(
            2
        )}`;
        return totalPrice;
    };

    const renderTotalPrice = () => {
        if (!!cart) {
            const total = Object.values(cart)
                .map((item: cartActionInterface) => {
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
            <CartPageContainer>
                <div className="wrapper">
                    <div className="cart">
                        <div className="cart__header">
                            <h1>Cart</h1>
                        </div>
                        <div className="cart__alert">
                            <div className="first-section">
                                <FontAwesomeIcon icon={faCheck} />
                                <h4>
                                    <span>Coffee T-shirt</span> has been added
                                    to your cart
                                </h4>
                            </div>
                            <div className="second-section">
                                <Link to="/">
                                    <Button blue_small_text>
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <table className="cart__table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {!!cart &&
                                    Object.entries(cart).map((item: any, i) => {
                                        const {
                                            name,
                                            image,
                                            price,
                                            productSize,
                                            productQuantity
                                        } = item[1];
                                        const cartProductId = item[0];
                                        return (
                                            <tr key={i}>
                                                <td className="col-cancel">
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="col-img">
                                                    <img
                                                        src={image}
                                                        alt={image}
                                                    />
                                                </td>
                                                <td className="col-name-size">
                                                    <h4>{name}</h4>
                                                    {productSize && (
                                                        <h5>
                                                            Sizes:{" "}
                                                            <span>
                                                                {productSize}
                                                            </span>
                                                        </h5>
                                                    )}
                                                </td>
                                                <td className="col-price">
                                                    {price}
                                                </td>
                                                <td className="col-counter">
                                                    <Counter
                                                        setValue={setQuantity}
                                                        initialCount={
                                                            productQuantity
                                                        }
                                                    />
                                                </td>
                                                <td className="col-total-price">
                                                    {
                                                        renderItemTotalPrice(
                                                            price,
                                                            productQuantity
                                                        ) as any
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                            <tfoot className="desktop-table-footer">
                                <tr>
                                    <td></td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Coupon Code"
                                        />
                                    </td>
                                    <td>
                                        <Button ash_small_text>
                                            Apply coupon
                                        </Button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Button
                                            ash_small_text
                                            // onClick={handleUpdateCart}
                                        >
                                            Update Cart
                                        </Button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="mobile-table-footer">
                            <div>
                                <input type="text" placeholder="Coupon Code" />
                                <Button ash_small_text>Apply coupon</Button>
                            </div>
                            <div>
                                <Button ash_small_text>Update Cart</Button>
                            </div>
                        </div>
                        <div className="cart__total">
                            <h1>Cart totals</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td className="subtotal-value">
                                            {renderTotalPrice() as any}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total:</td>
                                        <td>{renderTotalPrice() as any}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to={{ pathname: "/checkout" }}>
                                <Button blue_small_text>
                                    Proceed to checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CartPageContainer>
        </Layout>
    );
};

export default CartPage;
