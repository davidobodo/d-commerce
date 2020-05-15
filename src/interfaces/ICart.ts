export interface cartItemInterface {
    cartProductId: any;
    name: any;
    image: any;
    price: any;
    productSize?: any;
    productQuantity?: any;
    type: any;
    num: number;
}

export interface cartItemProp {
    item: any;
    handleDeleteProduct: any;
    handleEditItemQuantity?: any;
}

export interface cartItemType {
    name: string;
    image: string;
    price: string;
    productQuantity: number
}
