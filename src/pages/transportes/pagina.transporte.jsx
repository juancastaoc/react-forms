import React from 'react';
import TablaExternaRutas from './components/tabla-externa-rutas/tabla-externa-rutas.comp';


const Paginarutas = () => {
    
    let productsList=[
        {
            id:"c1",
            name:'Transporte Urbano',
            products:[
                {
                    id:"c1r1",
                    name:"Villapilar-Enea",
                    price:"$ 2.100",
                    stock:15,
                },
                {
                    id:"c1r2",
                    name:"Villapilar-Malteria",
                    price:"$ 2.100",
                    stock:3,
                },
                {
                    id:"c1r3",
                    name:"Villapilar-Tablazo",
                    price:"$ 2.100",
                    stock:0,
                },
                {
                    id:"c1r4",
                    name:"Villapilar-La Linda",
                    price:"$ 2.100",
                    stock:0,
                },
                {
                    id:"c1r5",
                    name:"Villapilar-Cable",
                    price:" $ 2.100",
                    stock:0,
                },

            ]
        },
        {
            id:"c2",
            name:'Transporte Rural',
            products:[ 
                {
                    id:"c2r1",
                    name:"Villapilar-Cabaña",
                    price:"$8.000",
                    stock:15,
                },
                {
                    id:"c2r2",
                    name:"Villapilar-Las Pavas",
                    price:"$6.000",
                    stock:0,
                },
                {
                    id:"c2r3",
                    name:"Villapilar-La Cuchilla",
                    price:"$ 2.500",
                    stock:15,
                }, 
                {
                    id:"c2r4",
                    name:"Villapilar-San Peregrino",
                    price:"$2.500",
                    stock:15,
                }, 
                {
                    id:"c2r5",
                    name:"Villapilar-Guacas",
                    price:"$ 2.500",
                    stock:15,
                }, 
                
            ]
          },
          {
            id:"c3",
            name:'Transporte Intermunicipal',
            products:[
                {
                    id:"c3r1",
                    name:"Manizales-Neira",
                    price:"$5.000",
                    stock:15,
                },
                {
                    id:"c3r2",
                    name:"Manizales-Arauca",
                    price:"$10.000",
                    stock:3,
                },
                {
                    id:"c3r3",
                    name:"Manizales-Salamina",
                    price:"$18.000",
                    stock:0,
                },
                {
                    id:"c3r4",
                    name:"Manizales-Pácora",
                    price:"$ 30.000",
                    stock:0,
                },
                {
                    id:"c3r5",
                    name:"Manizales-Aguadas",
                    price:"$ 35.000 ",
                    stock:0,
                },

            ]
        },
       ]
    

    return (
        <>
        <TablaExternaRutas productsList={productsList}/>
        </>
        

    );    
}

export default Paginarutas;