import {useParams} from 'react-router-dom';
import {placeServiceFactory} from '../../services/placeService'
import { useEffect, useState } from 'react';
import { useService } from '../../hooks/useService';

export default function Details() {
const placeService = useService(placeServiceFactory)
  const {placeId} = useParams();
  const [place, setPlace] = useState({})

  useEffect(()=> {
    placeService.getOne(placeId)
    .then(result=> {
      setPlace(result)
    })
  },[placeId]);


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
          {place['additional-info']}
            </p>
          </div>
        </div>

        {/*} <!--Edit and Delete are only for creator--> */}
        <div id="action-buttons">
          <a href="" id="edit-btn">Edit</a>
          <a href="" id="delete-btn">Delete</a>
         {/*} <!- Only for logged-in users ( not authors )-->*/}
          <a href="" id="like-btn">Like</a>


        </div>
      </div>
    </section>
    <aside>
<p>hi</p>
    </aside>
    </>
  )
}