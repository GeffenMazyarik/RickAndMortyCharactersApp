import axios from "axios";

async function getCharacters(page = 0) {
    const characters = await axios.get('https://rickandmortyapi.com/api/character',{ params: { page: page + 1} });
    return characters.data;
}

export {getCharacters}
