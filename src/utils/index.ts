export const cloneObject = <T>(source: T): T => {
    return JSON.parse(JSON.stringify(source)) as T;
};

export const getRand = (a: number, b = 1) => {
    return Math.round(Math.random() * (a - b)) + 1;
};

export const shuffleArray = () => { };


export const renderItemTotalPrice = (price: string, quantity: number): string => {
    const totalPrice = `$${(parseFloat(price.slice(1)) * quantity).toFixed(
        2
    )}`;
    return totalPrice;
};

export const renderTotalPrice = (cart) => {
    if (!!cart) {
        const total = Object.values(cart)
            .map((item: any) => {
                const { price, productQuantity } = item;
                const item_total_price = (
                    parseFloat(price.slice(1)) * parseInt(productQuantity)
                ).toFixed(2);
                return parseFloat(item_total_price);
            })
            .reduce((i: number, j: any) => {
                return (i + j) as number;
            }, 0);
        return `$${total.toFixed(2)}`;
    }
};