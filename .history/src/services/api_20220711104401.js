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

export async function searchCharacter(name){
    try {
        const response = await fetch(`${BASE_URL}/?name=${name}`)
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {   
        console.log(error);
    }
}


export async function getSingleCharacter(id){
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        console.log(data.results);
        return data.results;
    } catch (error) {   
        console.log(error);
    }
}