import { createContext, useState,useEffect } from "react";

//if exits, quantity+1, if else, add a new cart item.
const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) =>
        cartItem.id === productToAdd.id
    )
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

const removeItem = (cartItems,productToRemove) =>{
    const isExstingItem = cartItems.find((cartItem)=>cartItem.id===productToRemove.id);
    if(isExstingItem.quantity==1){
        return cartItems.filter((cartItem)=>cartItem.id!==productToRemove.id);
    }

    return cartItems.map((cartItem)=>
    cartItem.id===productToRemove.id? 
    {...cartItem,quantity:cartItem.quantity-1}:cartItem);
};

const clearItem =(cartItems,cartItemToClear)=>{
    return cartItems.filter((cartItem)=>cartItem.id!==cartItemToClear.id);

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartCount:0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] =useState(0);
    const [total,setTotal] =useState(0);


    useEffect(()=>{
        const newCartCount =cartItems.reduce((total,cartItem)=>
        total+cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newTotal =cartItems.reduce((total,cartItem)=>
        total+cartItem.quantity*cartItem.price,0);
        setTotal(newTotal);
    },[cartItems]);

    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart =(producToRemove)=>{
        setCartItems(removeItem(cartItems,producToRemove));
    }

    const clearItemFromCart =(cartItemToClear)=>{
        setCartItems(clearItem(cartItems,cartItemToClear));
    }


    const value = { isCartOpen, setIsCartOpen, addItemToCart,removeItemFromCart, clearItemFromCart, cartItems,cartCount,total };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}