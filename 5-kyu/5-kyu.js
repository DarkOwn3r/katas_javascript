async function getHighestPokemonName(pokemonId1, pokemonId2) {
    const pokemon1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId1}`)
        .then(response => response.json())
        .then(pokemon => pokemon);

    const pokemon2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId2}`)
        .then(response => response.json())
        .then(pokemon => pokemon);

    if (pokemon1.height > pokemon2.height) {
        return pokemon1.name;
    }
    return pokemon2.name
};
    
async function getHighestPokemonNamePromiseAll(pokemonId1, pokemonId2) {

    const fetchPokemon1 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId1}`)
      .then(response => response.json())
      .then(pokemon => pokemon);

    const fetchPokemon2 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId2}`)
      .then(response => response.json())
      .then(pokemon => pokemon);
  
    const [pokemon1, pokemon2] = await Promise.all([fetchPokemon1, fetchPokemon2]);
  
    if (pokemon1.height > pokemon2.height) {
      return pokemon1.name;
    }
    return pokemon2.name;
}

function getHighestPokemonNamePromiseAllThen(pokemonId1, pokemonId2) {
  const fetchPokemon1 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId1}`)
    .then(response => response.json())
    .then(pokemon => pokemon);

  const fetchPokemon2 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId2}`)
    .then(response => response.json())
    .then(pokemon => pokemon);

  return Promise.all([fetchPokemon1, fetchPokemon2])
    .then(pokemons => {

      const [pokemon1] = pokemons;
      const pokemon2 = pokemons[1];

      if (pokemon1.height > pokemon2.height) {
        return pokemon1.name;
      }
      return pokemon2.name;
    });
}

async function getHighestPokemonNameWithValidations(pokemonId1, pokemonId2) {
  const pokemon1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId1}`)
    .then((response) => {
      if (response.status > 299) {
        return null;
      }
      return response.json();
    }) 
    .then(pokemon => pokemon);
  const pokemon2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId2}`)
    .then((response) => {
      if (response.status > 299) {
        return null;
      }
      return response.json();
    })
    .then(pokemon => pokemon);
  if (!pokemon1 || !pokemon2) {
    return null;
  }
  if (pokemon1.height > pokemon2.height) {
    return pokemon1.name;
  }
  return pokemon2.name;
}
  
module.exports = {
    getHighestPokemonName,
    getHighestPokemonNamePromiseAll,
    getHighestPokemonNamePromiseAllThen,
    getHighestPokemonNameWithValidations
}