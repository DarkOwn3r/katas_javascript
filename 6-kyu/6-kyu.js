async function getHeightByPokemonId(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return await fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.height)
}

async function getPokemonsByType(id_type) {
  const url = `https://pokeapi.co/api/v2/type/${id_type}/`;
  return await fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.pokemon)
    
}

// --------------------------

function getPokemonSpeciesNameByGeneration(id_generation) {
  const url = `https://pokeapi.co/api/v2/generation/${id_generation}`
  return fetch(url)
    .then(response => response.json())
    .then(generation => getPokemonSpeciesNames(generation.pokemon_species))
}

function getPokemonSpeciesNames(pokemonSpecies) {
  const pokemonSpeciesNames = [];
  pokemonSpecies.forEach(pokemon => {
    pokemonSpeciesNames.push(pokemon.name)
  });
  return pokemonSpeciesNames;
}

// -------------------------

function getHeightsByType(type) {
  const url = `https://pokeapi.co/api/v2/type/${type}`;
  return fetch(url)
    .then((response) => response.json())
    .then((pokemonType) => {
      const urls = [];
      pokemonType.pokemon.forEach(pokemon => {
        urls.push(pokemon.pokemon.url);
      })
      const pokemonPromises = urls.map( url => 
        fetch(url)
          .then(response => response.json())
      );
      return Promise.all(pokemonPromises);
    })
    .then(pokemonData => {
        const heights = [];
        pokemonData.forEach(pokemon => {
          heights.push(pokemon.height);
        });
        return heights;
      }
    );
}

module.exports = {
  getHeightByPokemonId,
  getPokemonsByType,
  getPokemonSpeciesNameByGeneration,
  getHeightsByType
}