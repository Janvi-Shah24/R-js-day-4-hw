import "./Styles/card.css";

function Card(props) {
  return (
    <>
      <div
        className="card-item"
        style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        <div className="shadow-container">
          <div className="card-left">
            <div className="title-container">
              <div className="image-container">
                <img src={props.poster} alt="Arya" />
              </div>
              <div className="movie-title-details-container">
                <h2>{props.title}</h2>
                <p>{props.release}</p>
                <div className="type">
                  <div className="duration">{props.duration}</div>
                  <div className="type-content">{props.type}</div>
                </div>
              </div>
            </div>

            <div className="detail-container">{props.description}</div>
            <div className="icon-container"><i class="fa-solid fa-share-nodes"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-message"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;