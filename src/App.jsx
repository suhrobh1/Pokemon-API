import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  
  const [pokemon, setPokemon] = useState([]);
  

useEffect(() => {
fetch('https://pokeapi.co/api/v2/pokemon?&limit=807')
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    setPokemon(res.results);
  })
  .catch((err) => console.log(err))
}, [])

  return (
    <div className="App">
      {
        pokemon.map((character, index) => {
          return (
          <p key={index}>{index + 1} {character.name}</p>
          )
        })
      }
       
    </div>
  );
}

export default App;
