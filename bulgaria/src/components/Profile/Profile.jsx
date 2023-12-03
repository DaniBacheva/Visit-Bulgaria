import { useEffect, useState, useContext} from "react";

import AuthContext from "../../contexts/AuthContext";
import * as placeService from '../../services/placeService';

import Place from "../Place/Place";

export default function Profile()  {

    const {userId} = useContext(AuthContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        placeService.getPlacesByOwner(userId)
            .then(result => setPlaces(result))
            .catch(error => {
                console.log(error);
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