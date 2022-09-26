import React from "react";

const Item = ({id,img, nombre, precio, stock}) =>{
    return (
        <>
            <img src={img} alt="imagen de bebida"/>
            <h1>{nombre}</h1>
            <h2>precio:${precio}</h2>
            <h3>stock: {stock}</h3>
        </>
      )
}

export default Item;