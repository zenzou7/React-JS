import React from "react";
import {data} from "../utils/data"
import { useState } from "react";
import {useEffect} from "react";
import ItemCount from "./ItemCount";
import Item from "./Item"

let okey =true;

const getDatos =() =>{ 
    return new Promise((resolve, reject) =>{
        if(okey){
            setTimeout(()=>{
                resolve(data)
            },2000);
        } else{
            reject("Error")
        }
    })
}

const ItemList = () =>{

    const onAdd = (qty)=>{
        alert("Has seleccionado " + qty +" productos.")
    }
    const [bebidas, setBebidas] = useState([]);

    useEffect(()=>{
        getDatos(data)
            .then(result=>setBebidas(result))
            .catch(error => console.log(error))
    })

    return(
        <>
        {
        bebidas.map(bebida => 
            <div>
                <img src={bebida.img} alt="imagen bebida"/>
                <h1>{bebida.nombre}</h1>
                <h2>{bebida.precio}</h2>
                <Item/>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>)
        }
        </>
    )
}

export default ItemList;