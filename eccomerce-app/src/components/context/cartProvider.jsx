import { useState } from "react"
import { createContext} from 'react';


export const CartContext =  createContext();

export function CartProvider({ defaultValue= 0, children }) {
    const [total, setTotal] = useState(defaultValue)

    function addToCart() {
        setTotal(total++)
        console.log("añadir")
    }

    function deleteToCart() {
        setTotal(total--)
        console.log("eliminar")
    }

    function emptyChart() {
        setTotal(0)
        console.log("vaciar")
    }

    function endBought() {
        setTotal(0)
        console.log("comprado")
    }

    return (
        <CartContext.Provider value={{total, setTotal, addToCart, deleteToCart, emptyChart, endBought}}>
            {children}
        </CartContext.Provider>
    );
}