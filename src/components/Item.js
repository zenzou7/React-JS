import React from "react";

const Item = ({id,img, nombre, precio}) =>{
    return (
        <>
            <img src={img} alt="imagen de bebida"/>
            <h1>{nombre}</h1>
            <h2>precio:${precio}</h2>
        </>
      )
}

export default Item;