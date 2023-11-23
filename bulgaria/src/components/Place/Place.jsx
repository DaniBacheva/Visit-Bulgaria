import {Link }from 'react-router-dom';

import * as styles from '../Place/Place.module.css'

export default function Place ({
    name, 
    imageUrl, 
    description,
    _id,
}){
    return (
        <div className={styles.place}>
        <img src={imageUrl} />
        <h3>{name}</h3>
        <p>{description}</p>
        <Link className={styles.detailsBtn} to={`/dashboard/${_id}`}>More Info</Link>
      </div>
    )
}