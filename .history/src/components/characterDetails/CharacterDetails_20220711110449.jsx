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
        <div>
            <h1>Character Details</h1>

            <div className="GoHome">
                <Link to="/">
                    Back
                </Link>
            </div>

            <div className="detailsContainer">
                <div className="detailsImage">
                    <img src={details.image} alt="" />
                </div>
                <div className="detailsInfo">
                    {details.species}
                    {
                        details.status ?
                            <p style={{ color: 'green' }}>{detail.status}</p>
                            : <p style={{ color: 'red' }}>{detail.status}</p>
                    }
                    {details.name}
                    {details.origin?.name}
                    {details.location?.name}
                </div>
            </div>

        </div>
    );
};
