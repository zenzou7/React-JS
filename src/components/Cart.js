import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Item from './Item';
import { collection, serverTimestamp , doc, setDoc, updateDoc, increment } from 'firebase/firestore';
import  { db } from "../utils/firebaseConfig"


export const Cart = () => {

  const lista = useContext(CartContext) 

  const createOrder = () =>{

    let itemsForDB = lista.cartList.map(item =>({
      id: item.id,
      title: item.nombre,
      price: item.precio,
      qty: item.qty
    }))
    
    let order = {
      buyer: {
        name:"Dante Sparda",
        email: "dantesparda7@gmail.com",
        phone: "1124559065"
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: lista.costoTotal()
    }
    
    const createOrderInFirestore = async () =>{
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    createOrderInFirestore()
      .then(result => {alert("Tu orden a sido creada!" + result.id)
      lista.cartList.forEach(async (item) => {
        const itemRef = doc(db, "bebidas" , item.id);
        await updateDoc(itemRef , {
          stock: increment(-item.qty)
        })
      })
      lista.borrarCarrito()
      })
      .catch(err => console.log(err))


  }

  



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
        <button onClick={createOrder}>Comprar</button>
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