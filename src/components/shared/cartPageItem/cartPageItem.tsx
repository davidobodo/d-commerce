import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Counter from "../../shared/counter/counter";
import { CartPageItemContainer } from "./style";

import {
    cartItemInterface,
    cartItemProp
} from "../../../redux/reducers/all/cart/cartInterface";

const CartPageItem: React.FC<cartItemProp> = ({
    item,
    handleDeleteProduct
}) => {
    const [quantity, setQuantity] = useState();
    const { name, image, price, productSize, productQuantity } = item[1];
    const cartProductId = item[0];
    const renderItemTotalPrice = (price: any, quantity: any) => {
        const totalPrice = `$${(parseFloat(price.slice(1)) * quantity).toFixed(
            2
        )}`;
        return totalPrice;
    };
    return (
        <CartPageItemContainer>
            <td className="col-cancel">
                <div onClick={() => handleDeleteProduct(cartProductId)}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </td>
            <td className="col-img">
                <img src={image} alt={image} />
            </td>
            <td className="col-name-size">
                <h4>{name}</h4>
                {productSize && (
                    <h5>
                        Sizes: <span>{productSize}</span>
                    </h5>
                )}
            </td>
            <td className="col-price">{price}</td>
            <td className="col-counter">
                <Counter
                    setValue={setQuantity}
                    initialCount={productQuantity}
                />
            </td>
            <td className="col-total-price">
                {renderItemTotalPrice(price, productQuantity) as any}
            </td>
        </CartPageItemContainer>
    );
};

export default CartPageItem;
