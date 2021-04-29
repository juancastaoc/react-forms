import React from 'react';
import './rutas.style.css'; 

const Rutas = (props) => {
    return (
        <div div className="rutas-container">
            
       
  {
                    props.product.stock === 0
                    ? //if -true
                    <span className="product-without-stock"> {props.product.name} </span>
                    : // else
                    <span>{props.product.name} </span> 
                }
                
                {"       "}  {props.product.price}
               
        </div>
        


    );     
}

export default Rutas;