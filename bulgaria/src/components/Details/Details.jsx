import { useEffect, useState, useContext } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom'

import AuthContext from "../../contexts/AuthContext";
import * as commentService from '../../services/commentService';
import * as placeService from '../../services/placeService';
import * as styles from '../Details/Details.module.css';
import Path from '../../paths.js';

import AddComment from './AddComment/AddComment';
import DeletePlace from './DeletePlace/DeletePlace';

export default function Details() {
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const { placeId } = useParams();
  const [place, setPlace] = useState({});
  const [showDelete, setShowDelete] = useState(false)
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
      })
      .catch((error) => {
        console.error('One of the promises rejected:', error);
        navigate(Path.NotFound)
      });
  }, [placeId]);

  const onCommentSubmit = async (values) => {
    try {
      const newComment = await commentService.create(placeId, values.comment);
      console.log(newComment);

      setPlace(state => ({
        ...state,
        comments: [...state.comments,
        {
          ...newComment,
          owner: {
            email
          }
        }],
      }))
    } catch (error) {
      console.log(error);
      navigate(Path.NotFound);
    }
  };

  const isOwner = place._ownerId === userId;

  const onDeleteClick = async () => {
    setShowDelete(true);
  };

  const deletePlaceHandler = async () => {
    try {
      await placeService.deletePlace(placeId);
      navigate(Path.Dashboard);
    }
    catch (error) {
      console.log(error);
      navigate(Path.NotFound);
    }
  };

  return (
    <>
      {showDelete && (
        <DeletePlace
          onClose={() => setShowDelete(false)}
          onDelete={deletePlaceHandler}
          values={place}
        />
      )}
      <section id="details">
        <div id="details-wrapper">
          <div className={styles.basic}>
            <h4 id="details-name">{place.name}</h4>
            <img id="details-img" src={place.imageUrl} />
            <p id="location">Location: {place.location}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description"> {place.description}</p>
              <p id="more-info">{place.additionalInfo}</p>
            </div>
          </div>

          <div className={styles.actionButtons}>
            {isOwner && (
              <>
                <Link to={`/dashboard/${place._id}/edit`} >Edit</Link>
                <button onClick={onDeleteClick} >Delete</button>
              </>
            )}
            {(!isAuthenticated || !isOwner) && <Link to={`/dashboard/`} >Back</Link>}
          </div>
        </div>

        <aside>
          <div id="comments">
            <h3>Comments:</h3>
            <ul>
              {place.comments && place.comments.map(({ _id, comment, owner: { email } }) => (
                <li key={_id} >
                  <p>{`${email} : ${comment}`}</p>
                </li>
              ))}
              {!place.comments?.length && (
                <p>No comments yet...</p>)}
            </ul>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
          </div>
        </aside>
      </section>
    </>
  )
}
