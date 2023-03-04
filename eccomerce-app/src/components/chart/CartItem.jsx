import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/cartProvider"
function CartItem(props) {
  const { deleteItem } = useContext(CartContext)
  return (
    <div>
      <h3 className="bg-primary bg-opacity-50 p-1 border border-2"> {props.cant} x {props.title}. {props.marca}</h3>
      <p className="bg-primary bg-opacity-25 p-1">{props.descr}</p>
      <p className="bg-primary bg-opacity-25 p-1">Precio: $ {props.price} por unidad</p>
      <Button variant="danger" className="chart-button btn-block mb-2 p-2" onClick={() => deleteItem(props.id) }>Eliminar 1x</Button>
    </div>
  );
}

export { CartItem };