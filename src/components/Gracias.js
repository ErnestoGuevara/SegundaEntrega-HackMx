import React from 'react';
import "../CSS/gracias.css";
import Header from "../components/Header";


const Gracias = () => {

    return (  
        <div className="elemento-gracias">
            <Header/>
            <h1 className="titulo-gracias">Gracias por votar</h1>
            {/* {setTimeout(() => {
                window.location.replace("/");
            }, 2000)} 
            */}
        </div>
        
    );
}
 
export default Gracias;