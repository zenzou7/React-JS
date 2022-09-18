import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartlist] = useState([]);

    //Sumar 1 item al carrito
    const addItem = (item,qty) =>{
        //Busco el obj en el carrito y verifico si existe
        let cartFind= cartList.some(itm => itm.id == item.id)
               
        if(cartFind){

            //Creo una nueva variable que contenga el obj buscado
            let cartItem = cartList.filter(itm => itm.id == item.id) 

            //sumo la qty anterior con la del nuevo obj y la asigno a la prop qty
            let newQty=qty+cartItem[0].qty
            
            qty=newQty

            //creo una variable que contenga todo el array de obj sin el obj repetido
            let newCartList = cartList.filter(itm => itm.id !== item.id) 

            //Creo una variable que contenga el nuevo obj a agregar
            let itemEnCarrito = {
                ...item,
                qty
            }
            
            //seteo el arrary filtrado para no repetir el obj y agrego el obj repetido con su nueva qty
            setCartlist([
                ...newCartList,
                itemEnCarrito
            ])
        }
        else{

            let itemEnCarrito = {
                ...item,
                qty
            }
            

            setCartlist([
                ...cartList,
                itemEnCarrito
            ])
        }
    }

    //Borrar 1 solo item
    const removeItem = (id) => {
        let newCartList = cartList.filter(item => item.id !== id) 
        setCartlist(newCartList)
    }

    //Borrar todo el carrito
    const borrarCarrito = () => {
        setCartlist([])
    }

    //Suma de qty
    const sumaQty = () =>{

        let suma = cartList.map(item => item.qty)

        return suma.reduce(((valorPrevio, valorActual) => valorPrevio + valorActual) ,0)
    }

    //Costo total de prudoctos

    const costoTotal =()=>{
        let suma =0;
        cartList.forEach((item)=>{
            suma= suma + item.precio * item.qty
        })
        return suma;
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem,borrarCarrito,sumaQty,costoTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;