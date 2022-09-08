import React from "react";
import {data} from "../utils/data"
import { useState } from "react";
import {useEffect} from "react";
import ItemCount from "./ItemCount";
import Item from "./Item"
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail";

let okey =true;

const getDatos =(time,item) =>{ 
    return new Promise((resolve, reject) =>{
        if(okey){
            setTimeout(()=>{
                resolve(item)
            },time);
        } else{
            reject("Error")
        }
    })
}

const ItemList = () =>{

    const {id} = useParams();

    const [bebidas, setBebidas] = useState([]);

    useEffect(()=>{
        if(id){
        getDatos(1000, data.filter(item => item.categoryId === parseInt(id)))
            .then(result=>setBebidas(result))
            .catch(error => console.log(error))
        }
        else{
            getDatos(1000, data)
            .then(result=>setBebidas(result))
            .catch(error => console.log(error))
        }
    },[id])

    return(
        <>
        {
        bebidas.map(bebida => 
            <div>
                <Item id={bebida.id} img={bebida.img} nombre={bebida.nombre} precio={bebida.precio}/>
                <ItemDetail id={bebida.id}/>
                <ItemCount stock={bebida.stock} initial={1}/>
            </div>) 
        }
        </>
    )
}

export default ItemList;