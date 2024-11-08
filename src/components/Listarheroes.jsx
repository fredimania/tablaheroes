import React, { useState, useEffect } from "react";
import heroesData from "../heroes.json"; // Importar el archivo JSON

export const Listarheroes = ({ publisher }) => {
  const [heroes, setHeroes] = useState([]);

  // Filtrar los héroes por publisher
  useEffect(() => {
    const filteredHeroes = heroesData.filter(
      (hero) => hero.publisher === publisher
    );
    setHeroes(filteredHeroes);
  }, [publisher]);

  return (
    <div>
      <h2>Héroes de {publisher}</h2>
      {heroes.length > 0 ? (

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Superhéroe</th>
              <th>Alter ego</th>
              <th>Primera aparición</th>
              <th>Personajes</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero, index) => (
              <tr key={index}>
                <td>{hero.superhero}</td>
                <td>{hero.alter_ego}</td>
                <td>{hero.first_appearance}</td>
                <td>{hero.characters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay héroes para el publisher {publisher}.</p>
      )}
    </div>
  );
};
