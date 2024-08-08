import { useState } from "react";

const ContadorDeClicksComponent = () => {

    // Esta función me regresa 2 cosas; 
    // 1. La variable de estado
    // 2. Una función que me permite modificar esa variable de estado.
    let [contador, setContador] = useState(1);

    function aumentarContador(event){
        setContador(contador + 1);
    }

    return (
        <>
            <p>{contador}</p>
            <button onClick={aumentarContador}>Dame click</button>
        </>
    )
}

export default ContadorDeClicksComponent;