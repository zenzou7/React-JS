import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Item from './Item';


export const Cart = () => {

  const lista = useContext(CartContext)

  
  return (
    <>
      <button onClick={lista.borrarCarrito}>Borrar tu carrito</button>
      {
        lista.cartList.map(dato => 
        <li key={dato.id}>
          <Item id={dato.id} img={dato.img} nombre={dato.nombre} precio={dato.precio}/>
          <h2>descripcion:{dato.descripcion}</h2>
          <h3>Unidades = {dato.qty}</h3>
          <button onClick={() => lista.removeItem(dato.id)}>Borrar item</button>
        </li>)
      }
    </>
  )
}

export default Cart;