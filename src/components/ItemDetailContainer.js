import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {data} from '../utils/data'

const getDato =() =>{ 
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve(data[0])
            },2000);
        } else{
            reject("Error")
        }
    })
}

const ItemDetailContainer = () =>{

    const [dato, setDato] = useState([]);

    useEffect(() => {
        getDato(data[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    },[])

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;