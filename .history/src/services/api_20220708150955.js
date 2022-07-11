const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getAllCharacters(){
    try {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        console.log(data.results);
        return data;
    } catch (error) {
        console.log(error);
    }
}