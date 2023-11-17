import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { placeServiceFactory } from "../../services/placeService";
import { usePlaceContext } from '../../contexts/PlaceContext';


export default function EditPage() {
  const {onPlaceEditSubmit} = usePlaceContext()
  const { placeId } = useParams();
  //console.log(placeId)
  const placeService = useService(placeServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm({

    _id: '',
    name: '',
    location: '',
    imageUrl: '',
    description: '',
    additionalInfo: '',

  }, onPlaceEditSubmit)

  //console.log(values)

  useEffect(() => {
    placeService.getOne(placeId)
      .then(result => {
        changeValues(result);
      });

  }, [placeId])

  return (
    <section id="edit">
      <div className="form">
        <h2>Edit Fact</h2>
        <form className="edit-form" method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={changeHandler}

          />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={values.location}
            onChange={changeHandler}

          />
          <input
            type="text"
            name="imageUrl"
            id="image-url"
            placeholder="Image URL"
            value={values.imageUrl}
            onChange={changeHandler}
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="5"
            cols="50"
            value={values.description}
            onChange={changeHandler}
          ></textarea>
          <textarea
            id="additional-info"
            name="additionalInfo"
            placeholder="Additional Info"
            rows="8"
            cols="50"
            value={values.additionalInfo}
            onChange={changeHandler}
          ></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
    </section>
  )
}