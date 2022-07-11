import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getSingleCharacter } from '../../services/api';

export function CharacterDetails() {

    const [details, setDetails] = useState([]);
    const { characterId } = useParams();

    useEffect(() => {
        getSingleCharacter(characterId)
            .then(setDetails)
            .catch(console.log);
    }, [characterId]);

    return (
        <>
            <h1>CharacterDetails</h1>

            {
                details.results?.map((charater, id) => {
                    return (
                        <div key={id}>
                        hhhhhhh
                        </div>
                    )
                })
            }
        </>
    );
};
