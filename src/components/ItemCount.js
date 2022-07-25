import React, { useState } from 'react';
const Contador = () =>{
    const [contador, setContador] = useState(0);
    return <div>
        <p>Nike air force: {contador}</p>
        <button onClick={() => { setContador(contador -1)}}>Disminuir</button>
        <button onClick={() => { setContador(contador +1)}}>Aumentar</button>
        <button onClick={() => { setContador(0)}}>Agregar al carrito</button>
        
    </div>
}
export default Contador;