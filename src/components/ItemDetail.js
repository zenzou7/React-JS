import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    
    const onAdd = (qty) => {
        alert("Has seleccionado "+qty+" productos.")
    }

  return (
    <div>
        <img src={item.img} alt="imagen de bebida"/>
        <h1>{item.nombre}</h1>
        <h2>{item.precio}</h2>
        <p>{item.descripcion}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail;