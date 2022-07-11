const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getAllCharacters(page = 1){
    try {
        const response = await fetch(`${BASE_URL}/?page=${page}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function searchCharacter(id){
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {   
        console.log(error);
    }
}