import React from 'react' 
const ComponentePruebaFlecha = ({nombre,apellido,edad,colorCabello,children}) => {
    return(
        <>
            <h2>{apellido}, {nombre}</h2>
            <p>Edad: {edad}</p>
            <p>Color de cabello: {colorCabello}</p>
            {/* <hr/>
            {children} */}
        </>
    )
}
export default ComponentePruebaFlecha;