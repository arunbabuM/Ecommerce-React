import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefualtCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index ++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefualtCart());

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) =>{
        console.log("Clicked  add to Acrt",itemId);
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            console.log("BeforeEnetrs",cartItems[item]);
            console.log("Item",item);
            if(cartItems[item] > 0)
            {
                console.log("Enetrs If Block");
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                console.log("cartItems[item]",cartItems[item]);
                console.log("itemInfo.new_price",itemInfo.new_price);
                totalAmount += itemInfo.new_price * cartItems[item]
            }

        }
        return totalAmount;
    }



  

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item]
            }
        }
        return totalItem;
    }

    
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;