import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { firestoreFetchDetail } from "../utils/firebaseConfig";


const ItemDetailContainer = () =>{

    const {id} = useParams();

    const [dato, setDato] = useState({});

    const [estado, setEstado] = useState(0);

    const test = useContext(CartContext)

    const onAdd = (qty) =>{
        alert(`Has seleccionado ${qty}  productos.`)
        setEstado(qty);
        test.addItem(dato, qty)
    }
    
    useEffect(() => {
        firestoreFetchDetail(id)
        .then(result => setDato(result))
    },[id])

    
    if(dato){    
        return(
        <>
        {
        <div>
        <Item id={dato.id} img={dato.img} nombre={dato.nombre} precio={dato.precio} stock={dato.stock}/>
        <h2>descripcion:{dato.descripcion}</h2>
            
        {
            estado === 0
            ? <ItemCount stock={dato.stock} initial={estado} onAdd={onAdd}/>
            : <Link to={'/cart'}><button>Tu Carrito</button></Link>
        }
        </div>
        }
        </>
        )
    }
    else{
        return(
            <h1>Cargando...</h1>
        )
    }
}

export default ItemDetailContainer;