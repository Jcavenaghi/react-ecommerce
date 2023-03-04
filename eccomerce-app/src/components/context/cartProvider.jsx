import { useState, useEffect, useContext } from "react"
import { createContext} from 'react';
import { perfumesService } from "../../services/perfumes";
import swal from 'sweetalert';

export const CartContext =  createContext();

export function CartProvider({ defaultValue= 0, children }) {
    const [total, setTotal] = useState(defaultValue)
    const [totalPrice, setTotalPrice] = useState(defaultValue)
    const [productos, setItem] = useState([])
    const [cartId, setCartId] = useState(0)


    const saveCartToLocalStorage = (id) => {
        localStorage.setItem('cartId', JSON.stringify(id));
    }

    const loadCartFromLocalStorage = async () => {
        const storedCart = JSON.parse(localStorage.getItem('cartId'));
        if (!storedCart) {
            let items = [];
            let user = {id: random(10,1000000), name: ""}
            let cart = {items, total: totalPrice, user, totalItems: 0}
            let response = await perfumesService.addCart(cart)
            setCartId(response.id)
            saveCartToLocalStorage(response.id);
        } else {
            let response = await perfumesService.getCartById(storedCart)
            setItem(response.items);
            setCartId(storedCart);
            setTotal(response.totalItems);
            setTotalPrice(response.total)
        }
        
    }

    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    function addItem(obj) {
        if (productos.some(prod => prod.id === obj.id)) {
            let i = productos.findIndex(prod => prod.id === obj.id)
            productos[i].cant++
            perfumesService.updateCart(cartId, productos, obj.price)
        } else {
            setItem([...productos, obj])
            perfumesService.updateCartWithNewItem(cartId,obj, obj.price)
        }
        setTotal(total + 1)
        setTotalPrice(totalPrice + obj.price)
    }

    function deleteItem(objId) {
        let i = productos.findIndex(prod => prod.id === objId)
        productos[i].cant = productos[i].cant - 1
        setTotalPrice(totalPrice - productos[i].price)
        perfumesService.deleteItem(cartId, productos, productos[i].price)
        if (productos[i].cant === 0) {
            productos.splice(i,1)
        } 
        setTotal(total - 1)
    }

    function emptyChart() {
        swal({
            title: "¿Desea eliminar los items del carrito?",
            text: "Esta accion es irreversible.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
               setItem([])
               setTotal(0)
               setTotalPrice(0)
               perfumesService.deleteCart(cartId)
               localStorage.clear()
              swal("Carrito eliminado con exito.", {
                icon: "success",
              });
            } else {
              swal("Operación cancelada.");
            }
          });
    }

    function endBought() {
        setItem([])
        setTotal(0)
        setTotalPrice(0)
        localStorage.clear()
        
    }
    return (
        <CartContext.Provider value={{total, setTotal, totalPrice, setTotalPrice, productos ,setItem, addItem, deleteItem, emptyChart, endBought, loadCartFromLocalStorage}}>
            {children}
        </CartContext.Provider>
    );
}