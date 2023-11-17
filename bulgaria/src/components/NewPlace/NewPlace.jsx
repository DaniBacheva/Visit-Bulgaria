import { usePlaceContext } from "../../contexts/PlaceContext"
import { useForm } from "../../hooks/useForm"

export default function NewPlace() {
  const { onAddPlaceSubmit} = usePlaceContext()
  const {values, changeHandler, onSubmit}  = useForm({
    name: '',
    location:'',
    imageUrl: '', 
    description: '',
    additionalInfo:'',
    
  }, onAddPlaceSubmit)

  return (
    <section id="create">
      <div className="form">
        <h2>Add Place</h2>

        <form className="create-form" onSubmit={onSubmit}>

          <input value={values.name}  onChange={changeHandler} 
          type="text" name="name"  id="name" placeholder="Name" />

          <input value={values.location} onChange={changeHandler} 
          type="text" name="location" id="location" placeholder="Location" />

          <input value={values.imageUrl} onChange={changeHandler} 
          type="text" name="imageUrl" d="imageUrl" placeholder="Image URL" />

          <textarea value={values.description} onChange={changeHandler} 
          id="description" name="description" placeholder="Description"rows="5" cols="50" ></textarea>

          <textarea value={values.additionalInfo} onChange={changeHandler} 
          id="additional-info" name="additionalInfo" placeholder="AdditionalInfo" rows="8" cols="50"></textarea>

          <button type="submit">Add Place</button>

        </form>
      </div>
    </section>
  )
}