import React, { useState } from 'react';
import "./ItemCount.css"
import "../ItemCount/ItemCount"

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const handleAumentar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const handleDecrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="container">
            <div className="containerButtons">
                <button className="btn" onClick={handleDecrementar}>
                    -
                </button>
                <h4 className="number">{cantidad}</h4>
                <button className="btn" onClick={handleAumentar}>
                    +
                </button>
            </div>
            <button className="btn" onClick={() => onAdd(cantidad)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;