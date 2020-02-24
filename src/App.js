import React from 'react';
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega Beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  }
];

function App() {
  return (
      <main className = 'container'>
        <Title content = "A Pokemon Table"/>
        <div className = 'row'>
        {all_pokemon.map(function(eachone){
          return <div className = 'col-md-6 col-lg-4'>
          <Pokemon
            name={eachone.name}
            weight={eachone.weight}
            awesome={eachone.awesome}
            terrifying={eachone.terrifying}
            abilities={eachone.abilities}
            />
            </div>
        })}
        </div>
      </main>
  );
}

export default App;
