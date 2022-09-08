import React from 'react'
import { Link } from "react-router-dom";

const ItemDetail = ({id}) => {

    return(
      <>
          <Link to={`/item/${id}`}><h2>Detalle de producto</h2></Link>
      </>
  )
}

export default ItemDetail;