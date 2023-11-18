import { usePlaceContext } from "../../contexts/PlaceContext";
import { useAuthContext } from '../../contexts/AuthContext';

import Place from "../Place/Place";

export default function Profile() {
    const { userId } = useAuthContext();
    const { places } = usePlaceContext();

    const placesbyOwner = places.filter(p => p._ownerId === userId);
    //console.log(placesbyOwner);

    return (
        <>
            <h2>My plases</h2>
            <section id="dashboard">


                {placesbyOwner.map(p =>
                    <Place {...p} key={p._id} />)}

                {placesbyOwner.length === 0 &&
                    <h2>No Places yet.</h2>}

            </section>
        </>

    )
}