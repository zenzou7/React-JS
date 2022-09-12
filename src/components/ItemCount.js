import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0 , initial = 0, onAdd}) =>{
    const [count, setCount] = useState(0);
    
    useEffect(() =>{
        setCount(initial);
    },[])

    const incremento = () =>{
		
        if(count < stock){
		
            setCount(prev => prev +1)
		
        }
		
    }

const decremento = () =>{
		
        if(count > initial){
		
            setCount(prev => prev -1)
		
        }
		
    }
    return(
        <div id="ContainerContador">
            <button className="boton" onClick={incremento}>+</button>
            <p id="cantidadProducto">{count}</p>
            <button className="boton" onClick={decremento}>-</button>

        {
            stock&&count
            ? <button onClick={() =>onAdd(count)}>Agregar al carro</button>
            : <button disabled>Agregar al carro</button>
        }
        </div>
    );
}

export default ItemCount