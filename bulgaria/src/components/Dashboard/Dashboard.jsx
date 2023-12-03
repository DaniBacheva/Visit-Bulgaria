import { useEffect, useState } from "react";

import * as placeService from '../../services/placeService';

import Place from "../Place/Place";

export default function Dashboard() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        placeService.getAll()
            .then(result => setPlaces(result))
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h2>PLACES TO VISIT</h2>
            <section id="dashboard">

                {places.map(p =>
                    <Place {...p} key={p._id} />)}

                {places.length === 0 &&
                    <h2>No Places yet.</h2>}

            </section>
        </>
    )
}