import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
            <h1>Rick and Morty</h1>
            <div className="container">

                <div className="buttons">
                    <button onClick={() => onChangePage(-1)}>Prev</button>
                    <p className='Numberpage'>{page}</p>
                    <button onClick={() => onChangePage(1)}>Next</button>
                </div>

                <input
                    ref={inputSearch}
                    type="text"
                    onChange={onTextSearch}
                    onKeyDown={onSearchSubmit}
                    placeholder="Buscar"
                />

                {
                    character?.results?.map((char, index) => {
                        return (
                            <div
                                className='gallery'
                                key={index}
                            >
                                <Link to={`/character/${char.id}`}>
                                    <div className="info">
                                        <div className="infoImage">
                                            <img src={char.image} alt="" />
                                        </div>
                                        <div className="infoName">
                                            <p>{char.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
