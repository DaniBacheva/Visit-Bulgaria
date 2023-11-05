export default function Details() {
  return (
    <section id="details">
      <div id="details-wrapper">
        <div className="basic">
          <p id="details-name">Rila Monastery</p>
          <img id="details-img" src="https://cdn.thecrazytourist.com/wp-content/uploads/2023/01/ccimage-shutterstock_1160109367.jpg" />
          <p id="location">Location: 80 km FROM SOFIA</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">

            <p id="description">
              Perhaps the most famous Eastern Orthodox monastery in the world,
              Rila has risen and risen to become a veritable symbol of the Bulgarian nation.
            </p>
            <p id="more-info">
              It entered the UNESCO World Heritage List way back in 1983, hailed for its curious
              intermingling of Mamluk, arabesque, Byzantine and Romanesque styles, and resplendent
              iconostases walls, carved meticulously and inlaid with shimmering gold leaf.

              An on-site museums helps travelers unravel the more than 1,000 years of history that
              coalesce at the site, while endless courtyards and peristyles decorated in murals and medieval
              scenes mean there’s plenty of art and architecture to draw the eye.
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
  )
}