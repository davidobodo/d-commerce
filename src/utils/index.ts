import { cartItemType } from '../interfaces/ICart';

export const cloneObject = <T>(source: T): T => {
    return JSON.parse(JSON.stringify(source)) as T;
};

export const getRand = (a: number, b = 1) => {
    return Math.round(Math.random() * (a - b)) + 1;
};

export const shuffleArray = () => { };

const calculateItemTotalPrice = (price: string, quantity: number) => {
    return (parseFloat(price.slice(1)) * quantity).toFixed(2)
}

export const renderItemTotalPrice = (price: string, quantity: number): string => {
    return `$${calculateItemTotalPrice(price, quantity)}`;
};

export const renderTotalPrice = (cart: {}) => {
    if (!!cart) {
        const total = Object.values(cart)
            .map((item: cartItemType) => {
                return parseFloat(calculateItemTotalPrice(item.price, item.productQuantity));
            })
            .reduce((i: number, j: number) => i + j, 0);
        return `$${total.toFixed(2)}`;
    }
};
