import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

import { getSingleCharacter } from '../../services/api'

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
            <Link to="/" className="buttons GoHome">
                Back
            </Link>

            <div className="detailsContainer">
                <div className="detailsImage">
                    <img src={details.image} alt="" />
                </div>
                <div className="detailsInfo">
                    <div className="life">
                        {
                            details.status === "Alive" ?
                                <p className="StatusLive">{details.status}</p>
                                : <p className="StatusDead">{details.status}</p>
                        }
                    </div>

                    <div className="detailsSpecs">
                        <div className="species">
                            <p><span className="Span">Species: </span>{details.species}</p>
                        </div>
                        <div className="name">
                            <p><span className="Span">Name: </span>{details.name}</p>
                        </div>
                        <div className="origin">
                            {
                                details.origin?.name === "unknown" ?
                                    <p><span className="Span">Origen: </span>Desconocido</p>
                                    : <p><span className="Span">Origen: </span>{details.origin?.name}</p>
                            }
                        </div>
                        <div className="location">
                            <p><span className="Span">Location: </span>{details.location?.name}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
