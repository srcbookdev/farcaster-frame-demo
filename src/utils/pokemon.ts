import axios from 'axios';

export async function getRandomPokemon() {
  // Get a random Pokemon ID (1-151 for first gen)
  const id = Math.floor(Math.random() * 151) + 1;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      name: response.data.name,
      image: response.data.sprites.other['official-artwork'].front_default
    };
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    // Return Pikachu as fallback
    return {
      name: 'pikachu',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    };
  }
}