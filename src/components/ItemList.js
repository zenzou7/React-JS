import React from "react";
import { useState , useEffect } from "react";
import Item from "./Item"
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { firestoreFetch } from "../utils/firebaseConfig"


const ItemList = () =>{

    const {id} = useParams();

    const [bebidas, setBebidas] = useState([]);

    useEffect(()=>{
        firestoreFetch(parseInt(id))
            .then(result => setBebidas(result))
    },[id])

    if(bebidas.length !== 0){
    return(
        <>
        <h1>Catalogo de productos</h1>
        { 
        bebidas.map(bebida => 
        <div key={bebida.id}>
            <Item id={bebida.id} img={bebida.img} nombre={bebida.nombre} precio={bebida.precio}/>
            <ItemDetail id={bebida.id}/>
        </div>) 
        }
        </>
    )}
    else{
        return(<h1>Cargando...</h1>)
    }
}

export default ItemList;