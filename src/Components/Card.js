import icon from "../images/gps icon.svg";

function Card(props) {
  return (
    <div className="card--container">
      <img className="card--image" src={props.imageUrl} alt="fail" />
      <div className="card--container2">
        <div className="card--container3">
          <img src={icon} alt="" className="card--gps" />
          <h4 className="card--location">{props.location}</h4>
          <a href={props.googleMapsUrl} className="card--googleUrl">
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <h3 className="card--dates">
          {props.startDate} — {props.endDate}
        </h3>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
