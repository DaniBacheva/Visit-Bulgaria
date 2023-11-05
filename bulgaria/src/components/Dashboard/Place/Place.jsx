export default function Place ({
    name, 
    imageUrl, 
    description
}){
    return (
        <div className="place">
        <img src={imageUrl} />
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <a className="details-btn" href="">More Info</a>
      </div>
    )
}