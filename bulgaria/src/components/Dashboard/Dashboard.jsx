import Place from "./Place/Place";


export default function Dashboard({
    places
}) {
    return (
        <section id="dashboard">

            <h2>PLACES TO VISIT</h2>
            {places.map(p =>
                <Place {...p} key={p._id} />)}

            {places.length === 0 &&
                 <h2>No Places yet.</h2>}

        </section>


    )
}