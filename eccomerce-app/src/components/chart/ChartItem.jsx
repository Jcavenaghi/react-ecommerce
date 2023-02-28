import React from "react";

function ChartItem(props) {
  return (
    <div>
      <h3 className="bg-primary bg-opacity-50 p-1 border border-2">{props.title}. {props.marca}</h3>
      <p className="bg-primary bg-opacity-25 p-1">{props.descr}</p>
      <p className="bg-primary bg-opacity-25 p-1">Precio: $ {props.price} por unidad</p>
      <p className="bg-primary bg-opacity-25 p-1">Cantidad: {props.cant}</p>
    </div>
  );
}

export { ChartItem };