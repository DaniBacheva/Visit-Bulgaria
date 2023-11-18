import {Link }from 'react-router-dom'

export default function Place ({
    name, 
    imageUrl, 
    description,
    _id,
}){
    return (
        <div className="place">
        <img src={imageUrl} />
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <Link className="details-btn" to={`/dashboard/${_id}`}>More Info</Link>
      </div>
    )
}