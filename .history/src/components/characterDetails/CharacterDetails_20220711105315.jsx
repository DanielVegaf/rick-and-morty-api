import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getSingleCharacter } from '../../services/api';

export function CharacterDetails() {

    const [details, setDetails] = useState({});
    const { characterId } = useParams();

    useEffect(() => {
        getSingleCharacter(characterId)
            .then(setDetails)
            .catch(console.log);
    }, [details]);

    return (
        <>
            <h1>Character Details</h1>

            {
                details?.results?.map((character, id) => {
                    return (
                        <div key={id}>
                        hhhh
                            <p>{character.name}</p>
                        </div>
                    )
                })
            }
        </>
    );
};
