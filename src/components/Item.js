import React from "react";

const Item = ({id,img, nombre, precio}) =>{
    return (
        <div>
            <img src={img} alt="imagen de bebida"/>
            <h1>{nombre}</h1>
            <h2>precio:${precio}</h2>
        </div>
      )
}

export default Item;