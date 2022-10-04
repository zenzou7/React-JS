import React from "react";
import ItemList from "./ItemList";
import '../styles/ItemListContainer.css' 

const ItemListContainer  = () =>{


    return(
        <div id="catalogo">
            <h1 className="titular"> Catalogo de productos</h1>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer