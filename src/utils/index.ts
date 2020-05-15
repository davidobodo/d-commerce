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