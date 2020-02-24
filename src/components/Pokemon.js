import React from 'react';

export default function Pokemon(props) {
  return (
    <div className = 'card shadow-sm mb-4'>
      <div className = 'card-body pb-0'>
        <h5 className = 'card-title'>{props.name}</h5>
        <h6 className = 'card-subtitle mb-3 text-primary'>{props.awesome ? 'An awesome Pokemon!!!' : 'Definitely not awesome.'}</h6>
        <p className = 'mb-0'>Weight: {props.weight} kg</p>
        <p>Terrifying: {props.terrifying ? 'YES!' : 'No, definitely lovable.'}</p>
        <p>Abilities: {props.abilities.length}</p>
      </div>
      <ul className = 'list-group list-group-flush'>
        {props.abilities.map(function(ability) {
          return <li className = 'list-group-item'>{ability}</li>
        })}
      </ul>
    </div>
  );
}