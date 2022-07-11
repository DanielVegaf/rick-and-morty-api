import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getSingleCharacter } from '../../services/api';

export function CharacterDetails() {

    const [character, setCharacter] = useState([]);
    const { characterId } = useParams();

    useEffect(() => {
        getSingleCharacter(characterId)
            .then(setCharacter)
            .catch(console.log);
    }, [characterId]);

    return (
        <>
            <h1>CharacterDetails</h1>

            {
                character?.results?}.map((char, id) => {
                    return (
                        <div key={id}>
                            <h3>{char.name}</h3>
                        </div>
                    )
                })
            }
        </>
    );
};
