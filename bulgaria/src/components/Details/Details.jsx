import {useParams} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {useNavigate, Link} from 'react-router-dom'

import {placeServiceFactory} from '../../services/placeService'
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext'; 

export default function Details() {
  const { userId } = useContext(AuthContext)
const placeService = useService(placeServiceFactory)
  const {placeId} = useParams();
  const [place, setPlace] = useState({})
  const navigate = useNavigate()

  useEffect(()=> {
    placeService.getOne(placeId)
    .then(result=> {
      setPlace(result)
    })
  },[placeId]);

  const isOwner = place._ownerId===userId;
console.log(userId);
console.log(place._ownerId)

const onDeleteClick = async()=> {
await placeService.deletePlace(place._id);
navigate('/dashboard');
//todo delete from state

}
  return (
    <>
    <section id="details">
      <div id="details-wrapper">
        <div className="basic">
          <p id="details-name">{place.name}</p>
          <img id="details-img" src={place.imageUrl} />
          <p id="location">Location: {`${place.location}`}</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">

            <p id="description">
              {place.description}
            </p>
            <p id="more-info">
          {place.additionalInfo}
            </p>
          </div>
        </div>

        {/*} <!--Edit and Delete are only for creator--> */}
        {isOwner && (
          <div id="action-buttons">
          <Link to={`/dashboard/${place._id}/edit`} id="edit-btn">Edit</Link>
          <button onClick={onDeleteClick}  id="delete-btn">Delete</button>
          </div>
        )}
        
         {/*} <!- Only for logged-in users ( not authors )-->*/}
          <a href="" id="like-btn">Like</a>


        
      </div>
    </section>
      </>
  )
}