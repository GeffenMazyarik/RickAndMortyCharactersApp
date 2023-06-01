import axios from "axios";

async function getCharacters(page = 0, name, gender, status) {
    const queryConfig = { params: { page: page + 1, name, gender, status } };

    try{
        const characters = await axios.get('https://rickandmortyapi.com/api/character', queryConfig);
        return characters.data;
    }
    catch (e){
        return {error: e?.response?.data?.error || "Error Occurred"};
    }
}

async function getEpisode(episodeUrl) {
    const episodeData = await axios.get(episodeUrl);
    return episodeData.data.episode;
}

export {getCharacters, getEpisode}
