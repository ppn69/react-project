import React, {FunctionComponent, useState, useEffect} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

  
const App: FunctionComponent = () => {

// ajout d'un state au composant App
// init list Pokemon
const [pokemons, setPokemons] = useState<Pokemon[]>([]);

// cycle de vie du composant
// [] empêche l'appel ultérieur au hook aprés le chargement du composant -> componentDidMount
useEffect(() => {
    setPokemons(POKEMONS)
},[])
    
 return (
    <div>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} pokemons dans le pokédex</p>
    </div>
 )
}
  
export default App;