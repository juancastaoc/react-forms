import React from 'react';

import TablaInternaRutas from '../tabla-interna-rutas/tabla-interna-rutas.comp';
import './tabla-externa-rutas.style.css'; 


const TablaExternaRutas = (props) => {
    return (
        <div className="tabla-externa-rutas-container">
            
            <div className="titulos-empresa">
             <h1>Empresa de Transportes Manizales </h1>   
            </div>
            
           
            <TablaInternaRutas productsList={props.productsList}/>
           
           
        </div>
        
    );     
}


export default TablaExternaRutas;