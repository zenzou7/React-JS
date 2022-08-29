import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer  = (props) =>{

    const onAdd = (qty)=>{
        alert("Has seleccionado " + qty +" productos.")
    }

    return(
        <div id="catalogo">
            <h1>{props.mensaje}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer