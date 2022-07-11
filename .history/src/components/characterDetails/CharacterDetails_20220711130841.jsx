import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

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
        <div className="Details">
            <h1>Character Details</h1>
            <Link to="/" className="GoHome">
                <div >
                    Back
                </div>
            </Link>

            <div className="detailsContainer">
                <div className="detailsImage">
                    <img src={details.image} alt="" />
                </div>
                <div className="detailsInfo">
                    <div className="life">
                        {
                            details.status === "Alive" ?
                                <p style={{ color: 'green' }}>{details.status}</p>
                                : <p style={{ color: 'red' }}>{details.status}</p>
                        }
                    </div>
                    {details.species}
                    {details.name}
                    {
                        details.origin?.name === "unknown" ?
                            <p>Origen: Desconocido</p>
                            : <p>Origen: {details.origin?.name}</p>
                    }

                    {details.location?.name}
                </div>
            </div>

        </div>
    );
};
