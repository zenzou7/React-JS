import { useEffect, useState } from "react";
import {data} from '../utils/data'
import { useParams } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";

const getDato =(time, item) =>{ 
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve(item)
            },time);
        } else{
            reject("Error")
        }
    })
}

const ItemDetailContainer = () =>{

    const {id} = useParams();

    const [dato, setDato] = useState({});
    
    useEffect(() => {
        getDato(1000, data.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    },[id])
    
    return(
        <>
            <div>
                <Item id={dato.id} img={dato.img} nombre={dato.nombre} precio={dato.precio}/>
                <h2>descripcion:{dato.descripcion}</h2>
                <ItemCount stock={dato.stock} initial={1}/>
            </div>
        </>
    )
}

export default ItemDetailContainer;