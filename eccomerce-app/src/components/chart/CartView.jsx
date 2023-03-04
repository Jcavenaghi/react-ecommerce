import { CartContext } from "../context/cartProvider"
import { useState, useContext } from "react"
import { CartItem } from "./CartItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CartView.css'

import { PurchaseForm } from "../form/PurchaseForm";

function CartView() {
    const  { productos, totalPrice, emptyChart }  = useContext(CartContext)
    return (
        <>
            <div className="container">
                {(productos.length === 0) 
                    ?  <div className="d-flex flex-column mb-5 mt-4 align-items-center"> 
                            <h2 className="fw-bold fs-1 text-center m-4">No hay productos en el carrito</h2>
                            <Link to="/" className="chart-button bg-info fw-bold btn btn-block mx-2 w-50">Volver al inicio</Link>
                        </div>
                        
                    : 
                        <div>
                            <h2 className="fw-bold fs-1 text-center m-4">CARRITO</h2>
                            {productos.map(item =>
                                <CartItem id={item.id} title={item.title} marca= {item.marca}descr={item.descr} price={item.price} cant={item.cant}/>
                                )
                            }
                            <h3 className="bg-info bg-opacity-50 p-2">Total: $ {totalPrice} </h3>
                            <div className="d-flex justify-content-between mb-5 mt-4">
                                <Link to="/purchaseForm" className="chart-button bg-info text-white btn btn-block mx-2 w-50">Realizar Compra</Link>
                                <Button variant="danger" className="chart-button btn-block mx-2 w-50" onClick={() => emptyChart() }>Vaciar carrito</Button>
                            </div>
                        </div>
                }
            </div>
            

        </>
    )
}

export { CartView }