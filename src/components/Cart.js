import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Item from './Item';


export const Cart = () => {

  const lista = useContext(CartContext)

  if (lista.cartList.length !== 0){
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
        <h1>Costo total = {lista.costoTotal()}</h1>
      </>
    )
  } 
  else{
    return(
      <Link to={"/"}><h1>Aun no tienes nada en tu carrito, click aqui para ver el catalogo.</h1></Link>
    )
  }
}

export default Cart;