import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) =>
        cartItem.id === productToAdd.id
    );
    //if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        );
    }

    //return new array with modified cartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, productToRemove) => {
    const isExstingItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (isExstingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};

const clearItem = (cartItems, cartItemToClear) =>
cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const setIsCartOpen=(bool)=>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool);


export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);

};

export const clearItemFromCart = (cartItems,cartItemToClear) => {

    const newCartItems = clearItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);

};