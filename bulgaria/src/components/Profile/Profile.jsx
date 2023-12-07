import { useEffect, useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';

import AuthContext from "../../contexts/AuthContext";
import * as placeService from '../../services/placeService';
import Path from '../../paths.js';

import Place from "../Place/Place";

export default function Profile()  {

    const {userId} = useContext(AuthContext);
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        placeService.getPlacesByOwner(userId)
            .then(result => setPlaces(result))
            .catch(error => {
                console.log(error)
                navigate(Path.NotFound);
            });

    }, []);

    return (
        <>
            <h2>My plases</h2>
            <section id="dashboard">

                {places.map(p =>
                    <Place {...p} key={p._id} />)}

                {places.length === 0 &&
                    <h2>No Places yet.</h2>}

            </section>
        </>

    )
}