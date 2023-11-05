import {useState} from 'react'

export default function NewPlace({
  onAddPlaceSubmit
}) {

  const [values, steValues] = useState({
    name: '',
    location:'',
    imageUrl: '', 
    description: '',
    "additional-info": ''
  })

  const onChangeHandler = (e)=> {
    steValues(state=> ({...state, [e.target.name]:e.target.value}))
  };

  const onSubmit = (e)=> {
    e.preventDefault();
    onAddPlaceSubmit(values)
  }
  return (
    <section id="create">
      <div className="form">
        <h2>Add Place</h2>
        <form className="create-form" onSubmit={onSubmit}>
          <input value={values.name} onChange={onChangeHandler} type="text" name="name" id="name" placeholder="Name" />
          <input value={values.location} onChange={onChangeHandler} type="text" name="location" id="location" placeholder="Location" />
          <input value={values.imageUrl} onChange={onChangeHandler} type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
          <textarea value={values.description} onChange={onChangeHandler} id="description" name="description" placeholder="Description"
            rows="5" cols="50" ></textarea>
          <textarea value={values['additional-info']} onChange={onChangeHandler} id="additional-info" name="additional-info" placeholder="Additional Info"
            rows="8" cols="50"></textarea>
          <button type="submit">Add Place</button>
        </form>
      </div>
    </section>
  )
}