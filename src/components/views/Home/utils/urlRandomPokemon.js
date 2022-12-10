const baseUrl = 'https://pokeapi.co/api/v2';
async function urlRandomPokemon() {
    try {
      const id = Math.floor(Math.random() * 897 + 1);
      const response = await fetch(`${baseUrl}/pokemon/${id}`);
      const data = await response.json();
  
      const img = data.sprites.other.home.front_default;
      return img;
    } catch (error) {
      console.log(error);
    }
  }
  
  export default urlRandomPokemon;