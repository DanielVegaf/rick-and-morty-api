import { useState, useEffect, useRef } from 'react';
import { getAllCharacters, searchCharacter } from '../../services/api';

export function CharactersList() {

    const inputSearch = useRef(null);
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")

    useEffect(() => {
        getAllCharacters(page)
            .then(setCharacter)
            .catch(console.log)
    }, [page])

    const onChangePage = (next) => {
        if (!character.previous && page + next <= 0) return;
        if (!character.next && page + next >= 42) return;

        setPage(page + next)
    }

    const onTextSearch = (event) => {
        event.preventDefault();
        const text = inputSearch.current.value;
        setSearch(text);
    }

    const onSearchSubmit = (event) => {
        if (event.key !== 'Enter') return;

        inputSearch.current.value = "";
        searchCharacter(search).then(setCharacter).catch(console.log);
    }

    return (
        <>
            <h1>Character List</h1>
        </>
    );
};
