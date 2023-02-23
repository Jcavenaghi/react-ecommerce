import { useState, useContext } from "react";
import { CartContext } from "../context/cartProvider";


function ItemCount() {
    const { total } = useContext(CartContext);
    return(
        <div className="text-white"> {total} </div>
    );
}

export { ItemCount };