import * as styles from '../Home/Home.module.css'

export default function Home() {
    return (
        <>
            <section className={styles.home}>
                <img src="../../../images/logo.jpg" width="500" height="auto" />
                <h1>WELCOME TO BULGARIA </h1>
                <h3>
                    Why visit Bulgaria – here are some reasons to travel to Bulgaria.
                    We have covered everything from beautiful nature, friendly locals,
                    and an endless list of places to see.Bulgaria has numerous fascinating destinations.
                    Some must-visit places include Sofia (the capital city),
                    Plovdiv (European Capital of Culture 2019), Rila Monastery, Veliko Tarnovo,
                    the Black Sea Coast, and the stunning Pirin and Rila Mountains.
                </h3>
                <h3>Here is the place to share places you have visited so we all can make a beautiful album of places that are great to see</h3>
            </section>
        </>
    )
}



