import React from "react";
import { Link } from "react-router-dom";
import { CartPageContainer } from "./style";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";
import CartPageItem from "../../shared/cartPageItem/cartPageItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { cartItemInterface } from "../../../interfaces/ICart";
import { deleteCartItem } from "../../../redux/actions/cart";

import { renderTotalPrice } from '../../../utils/index';

const CartPage = () => {

    const cart = useSelector(state => state.cart, shallowEqual);

    // localStorage.setItem('cart', Object.entries(cart) as any);

    const dispatch = useDispatch();

    const handleDeleteProduct = id => {
        dispatch(deleteCartItem(id));
    };


    const renderCartLength = () => {
        if (!!cart) {
            const _cart = Object.values(cart);
            return _cart.length;
        }
    };

    const renderLastCartItem = () => {
        if (!!cart) {
            const _cart = Object.values(cart);
            const lastItem: any = _cart[_cart.length - 1];
            return lastItem.name;
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
                            {renderCartLength() === 0 || cart == null ? (
                                <div className="first-section">
                                    <FontAwesomeIcon icon={faFrown} />
                                    <h4>Sorry you have no item in your cart</h4>
                                </div>
                            ) : (
                                    <div className="first-section">
                                        <FontAwesomeIcon icon={faCheck} />
                                        <h4>
                                            <span>{renderLastCartItem()}</span> has
                                            been added to your cart
                                    </h4>
                                    </div>
                                )}
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
                                        return (
                                            <CartPageItem
                                                key={i}
                                                item={item}
                                                handleDeleteProduct={
                                                    handleDeleteProduct
                                                }
                                            />
                                        );
                                    })}
                            </tbody>
                            {/* <tfoot className="desktop-table-footer">
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
                            </tfoot> */}
                        </table>
                        {/* <div className="mobile-table-footer">
                            <div>
                                <input type="text" placeholder="Coupon Code" />
                                <Button ash_small_text>Apply coupon</Button>
                            </div>
                            <div>
                                <Button ash_small_text>Update Cart</Button>
                            </div>
                        </div> */}
                        <div className="cart__total">
                            <h1>Cart totals</h1>
                            <table>
                                <tbody>
                                    {/* <tr>
                                        <td>Subtotal:</td>
                                        <td className="subtotal-value">
                                            {renderTotalPrice() as any}
                                        </td>
                                    </tr> */}
                                    <tr>
                                        <td>Total:</td>
                                        <td>{renderTotalPrice(cart) as any}</td>
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
