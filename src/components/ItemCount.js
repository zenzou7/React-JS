import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0 , initial = 1 , onAdd}) =>{
    const [count, setCount] = useState(0);
    
    useEffect(() =>{
        setCount(initial);
    },[])

    const incremento = () =>{
        if(count < stock){
            setCount(count+1)
        }
    }

    const decremento = () =>{
        if(count > initial){
            setCount(count-1)
        }
    }
    return(
        <div id="ContainerContador">
            <button className="boton" onClick={incremento}>+</button>
            <p id="cantidadProducto">{count}</p>
            <button className="boton" onClick={decremento}>-</button>

        {
            stock
            ? <button onClick={() =>onAdd(count)}>Agregar al carro</button>
            : <button>Agregar al carro</button>
        }
        </div>
    );
}

export default ItemCount