import './App.css';
import ComponentePruebaFlecha from './components/ComponentePruebaFlecha';

const App= () => {
  return (
    <div className="App">
      {/* <h1>hola</h1> */}
      <ComponentePruebaFlecha nombre="Camila" apellido="Matte" edad={19} colorCabello="negro">
        {/* <p>Este es un children</p> */}</ComponentePruebaFlecha>
      <ComponentePruebaFlecha nombre="Juan" apellido="Perez" edad={19} colorCabello="negro"/>
      <ComponentePruebaFlecha nombre="Carlos" apellido="González" edad={20} colorCabello="castaño"/>
      <ComponentePruebaFlecha nombre="Juana" apellido="González" edad={22} colorCabello="castaño"/>
    </div>
  );
}

export default App;
