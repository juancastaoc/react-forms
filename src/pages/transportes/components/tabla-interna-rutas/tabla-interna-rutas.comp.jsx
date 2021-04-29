import React, { useState } from 'react';
import CategoriaRutas from '../categoria-rutas/categoria-rutas.comp';
import Rutas from '../rutas/rutas.comp';
import './tabla-interna-rutas.style.css'; 


const TablaInternaRutas = (props) => {
    // console.Log({props.productsList});
    
    const [category,setCategory]=useState('c1');
    const [name,setName]=useState('');
    const [price,setPrice]=useState('0');
    const [stock,setStock]=useState('0');

    const addProduct = (event)=>{
        event.preventDefault();
        console.log('category'+ category);
        console.log('name'+ name);
        console.log('price'+ price);
    }

    return (
        <div className="product-table-container">
            <div>            
            {props.productsList.map((category,index)=>{
                return (
                < React.Fragment key={category.id}> 
                    <CategoriaRutas categoryName={category.name}/>
                    {category.products.map((product,indexProduct)=>{
                        return(
                            <Rutas 
                            key={product.id} product={product}
                            />
                        );
                    })}
                </ React.Fragment>
                );
            })}
        </div>
    <div className="products-form">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                            Seleccione tipo de transporte 
                            </td>
                        </tr>     
                        <tr>
                            <td>
                                <select 
                                        value={category}
                                        onChange={(event)=>{
                                             setCategory(event.target.value);
                                        }}    
                                >
                                            
                                    <option value="c1">Transporte Urbano</option>
                                    <option value="c2">Transporte Rural</option>
                                    <option value="c3">Transporte Intermunicipal</option>
                                </select>                        
                            </td>
                        </tr>

                        <tr>
                            <td>Ingrese Destino</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="text"
                                value={name}
                                onChange={ (event)=>{
                                    console.log(event.target.value);
                                    setName(event.target.value);
                                }} 
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>Ingrese el valor pasaje</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="number"
                                value={price}
                                onChange={ (event)=>{
                                    setPrice(event.target.value);
                                }} 
                                />
                            </td>
                        </tr>
                                
                        <tr>
                            <td>Cupos Disponibles</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="number"
                                value={stock}
                                onChange={ (event)=>{
                                setStock(event.target.value);
                                }} 
                                />
                            </td>
                        </tr>



                        <tr>
                            <td>
                                <button
                                    onClick={addProduct} 
                                >
                                    Añadir Ruta
                                </button> 
                            </td>
                        </tr>
                

                    </tbody>
               </table>
            </form>

        </div>

    </div>



    );     
}

export default TablaInternaRutas;