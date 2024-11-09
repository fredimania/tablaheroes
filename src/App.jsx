import React, { useState } from "react";
import { Listarheroes } from "./components/Listarheroes"; 
import "./Table.css"; 

function App() {
  const [publisher, setPublisher] = useState("DC Comics"); // Por defecto, DC Comics o el que gustes 

  return (
    <div className="App">
      <h1>Listado Héroes de Fredi Cc</h1>
      <div>
        {/* Puedes cambiar el publisher usando botones o cualquier lógica */}
        <button onClick={() => setPublisher("DC Comics")}>DC Comics</button>
        <button onClick={() => setPublisher("Marvel Comics")}>Marvel Comics</button>
      </div>

      {/* corregimos nombre*/}
      <Listarheroes publisher={publisher} />
    </div>
  );
}

export default App;
