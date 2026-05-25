const pokemonColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#ea7ce8",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Add your code here

const pokemonContainer = document.querySelector("#pokemon-container");
const searchInput = document.querySelector("#search");
const url = "https://pokeapi.co/api/v2/pokemon?limit=25";

let pokemons = [];

const fetchPokemons = async function () {
  const response = await fetch(url);
  const data = await response.json();

  const pokemonData = data.results.map(async function (pokemon) {
    const pokemonResponse = await fetch(pokemon.url);
    return pokemonResponse.json();
  });

  pokemons = await Promise.all(pokemonData);
  displayPokemons(pokemons);
};

const displayPokemons = function (pokemonList) {
  pokemonContainer.innerHTML = "";

  if (pokemonList.length === 0) {
    pokemonContainer.innerHTML =
      '<p class="no-results">No Pokémon matched your search.</p>';
    return;
  }

  pokemonList.forEach(function (pokemon) {
    const card = document.createElement("article");
    card.classList.add("pokemon-card");

    const name = document.createElement("h2");
    name.classList.add("pokemon-name");
    name.textContent = pokemon.name;

    const image = document.createElement("img");
    image.classList.add("pokemon-image");
    image.src = pokemon.sprites.other["official-artwork"].front_default;
    image.alt = pokemon.name;

    const types = document.createElement("div");
    types.classList.add("types");

    pokemon.types.forEach(function (typeInfo) {
      const typeName = typeInfo.type.name;

      const type = document.createElement("span");
      type.classList.add("type");
      type.textContent = typeName;
      type.style.backgroundColor = pokemonColors[typeName];

      types.appendChild(type);
    });

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(types);

    pokemonContainer.appendChild(card);
  });
};

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredPokemons = pokemons.filter(function (pokemon) {
    const nameMatch = pokemon.name.toLowerCase().includes(searchTerm);

    const typeMatch = pokemon.types.some(function (typeInfo) {
      return typeInfo.type.name.toLowerCase().includes(searchTerm);
    });

    return nameMatch || typeMatch;
  });

  displayPokemons(filteredPokemons);
});

fetchPokemons();
