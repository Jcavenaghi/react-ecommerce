import { useState } from "react"
import { createContext} from 'react';


export const CartContext =  createContext();

export function CartProvider({ defaultValue= 0, children }) {
    const [total, setTotal] = useState(defaultValue)
    const [totalPrice, setTotalPrice] = useState(defaultValue)
    const [productos, setItem] = useState([])

    function addItem(obj) {
        setTotal(total + 1)
        if (productos.some(prod => prod.id === obj.id)) {
            let i = productos.findIndex(prod => prod.id === obj.id)
            productos[i].cant++
        } else {
            productos.push(obj)
        }
        setTotalPrice(totalPrice + parseFloat(obj.price))
    }

    function deleteItem(objId) {
        productos = productos.filter((id) => {
            return objId !== id
        })
        setTotal(total--)
        console.log("eliminar")
    }

    function emptyChart() {
        setItem([])
        setTotal(0)
        console.log("vaciar")
    }

    function endBought() {
        setItem([])
        setTotal(0)
        console.log("comprado")
    }

    return (
        <CartContext.Provider value={{total, setTotal, totalPrice, setTotalPrice, productos ,setItem, addItem, deleteItem, emptyChart, endBought}}>
            {children}
        </CartContext.Provider>
    );
}