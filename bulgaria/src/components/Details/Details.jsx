import { useEffect, useState, useContext } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom'

import { placeServiceFactory } from '../../services/placeService'
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';
import { usePlaceContext } from '../../contexts/PlaceContext';
import * as commentService from '../../services/commentService'

import AddComment from './AddComment/AddComments';

export default function Details() {
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const placeService = useService(placeServiceFactory);
  const { placeId } = useParams();
  const [place, setPlace] = useState({});
  const { deletePlace } = usePlaceContext();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      placeService.getOne(placeId),
      commentService.getAll(placeId),
    ])
      .then(([placeData, comments]) => {
        setPlace({
          ...placeData,
          comments,
        });
      });
  }, [placeId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(placeId, values.comment);
    console.log(response);

    setPlace(state => ({
      ...state,
      comments: [...state.comments,
      {
        ...response,
        author: {
          email: userEmail
        }
      }
      ]
    }))

  }
  const isOwner = place._ownerId === userId;
  //console.log(userId);
  //console.log(place._ownerId)

  const onDeleteClick = async () => {

    const result = confirm(`Are you sure you want to delete ${place.name}?`);

    if (result) {
      await placeService.deletePlace(place._id);

      deletePlace(place._id)

      navigate('/dashboard');
    }

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

          <div id="action-buttons">
            {isOwner && ( 
              <>
              <Link to={`/dashboard/${place._id}/edit`} id="edit-btn">Edit</Link>
              <button onClick={onDeleteClick} id="delete-btn">Delete</button>
              </>
            )}
            {/*} <!- Only for logged-in users ( not authors )-->*/}
            <Link to="" id="like-btn">Like</Link>

          </div>

        </div>

        <aside>
          <div id="comments">
            <h3>Comments:</h3>
            <ul>
              {place.comments && place.comments.map(c => (
                <li key={c._id} >
                  <p>{c.author.email}:{c.comment}</p>
                </li>
              ))}
            </ul>
            {!place.comments?.length && (
              <p>No comments yet</p>
            )}

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

          </div>
        </aside>
      </section>


    </>
  )
}