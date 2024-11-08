import React, { useState } from "react";
import { Listarheroes } from "./components/Listarheroes"; // Importar el componente correctamente
import "./Table.css"; // Importar los estilos

function App() {
  const [publisher, setPublisher] = useState("DC Comics"); // Por defecto, 'DC Comics'

  return (
    <div className="App">
      <h1>Listado de Héroes</h1>
      <div>
        {/* Puedes cambiar el publisher usando botones o cualquier lógica */}
        <button onClick={() => setPublisher("DC Comics")}>DC Comics</button>
        <button onClick={() => setPublisher("Marvel Comics")}>Marvel Comics</button>
      </div>

      {/* Aquí corregimos el nombre del componente */}
      <Listarheroes publisher={publisher} />
    </div>
  );
}

export default App;
