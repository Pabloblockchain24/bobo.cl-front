import React, { createContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({cart: []})

export const CartProvider = ({ children }) => {
    const[cart, setCart] = useState([])
    const[totalUnidades, setTotalUnidades] = useState(0)
    const[totalCompra, setTotalCompra] = useState(0)

    const agregarItem = (item,cantidad) => {
        if(!isInCart(item._id)){
            setCart( prev => [...prev, {...item, cantidad}])
            setTotalUnidades(totalUnidades+cantidad)
            setTotalCompra(totalCompra + (cantidad*item.precio))
        }else{
            toast.error("El producto ya esta en el carrito");
        }
    }

    const limpiarCart = () => {
        setCart([])
        setTotalUnidades(0)
        setTotalCompra(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod._id === itemId)
    }

    return (
        <CartContext.Provider value={{cart,agregarItem, limpiarCart, totalUnidades, totalCompra}} >
            { children }
        </CartContext.Provider>       
    )
}