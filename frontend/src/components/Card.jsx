import "./Card.css";
import LikeBtn from "./LikeBtn";

export default function Card({title, date, venue, image}) {
  return (
    <div className="card">
      <img src={image} alt="Event Image" />
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <p className="card-date">{date}</p>
        <p className="venue">{venue}</p>
      </div>

      {/* The LikeBtn component needs to be placed inside a div to be positioned absolutely */}
      <div className="like-btn">
        <LikeBtn className="like-btn" />
      </div>

    </div>
  );
}
