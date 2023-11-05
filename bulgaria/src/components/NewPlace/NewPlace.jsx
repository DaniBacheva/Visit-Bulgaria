export default function NewPlace() {
  return (
    <section id="create">
      <div className="form">
        <h2>Add Place</h2>
        <form className="create-form">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="location" id="location" placeholder="Location" />
          <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
          <textarea id="description" name="description" placeholder="Description"
            rows="5" cols="50" ></textarea>
          <textarea id="additional-info" name="additional-info" placeholder="Additional Info"
            rows="8" cols="50"></textarea>
          <button type="submit">Add Place</button>
        </form>
      </div>
    </section>
  )
}