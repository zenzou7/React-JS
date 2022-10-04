import React from "react";

const Item = ({id,img, nombre, precio, stock}) =>{
    return (
        <>
            <img className="bebidaImg" src={img} alt="imagen de bebida"/>
            <h1 className="bebidaNombre">{nombre}</h1>
            <h2 className="bebidaPrecio">precio:${precio}</h2>
            
        </>
      )
}

export default Item;