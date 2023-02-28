import { CartContext } from "../context/cartProvider"
import { useState, useContext } from "react"
import { ChartItem } from "./ChartItem";

function ChartView() {
    const  { productos, totalPrice }  = useContext(CartContext)
    return (
        <>
            <div className="container">
                <h2 className="fw-bold fs-1 text-center m-4">CARRITO</h2>
                {productos.map(item =>
                    <ChartItem id={item.id} title={item.title} marca= {item.marca}descr={item.descr} price={item.price} cant={item.cant}/>
                    )
                }
                <h3 className="bg-info bg-opacity-50 p-2">Total: $ {totalPrice} </h3>
            </div>
        </>
    )
}

export { ChartView }