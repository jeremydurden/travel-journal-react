function Card(props) {
  return (
    <div className="card--container">
      <img className="card--image" src={props.imageUrl} alt="fail" />
      <h4 className="card--location">{props.location}</h4>
      <a href={props.googleMapsUrl} className="card--googleUrl">
        View on Google Maps
      </a>
      <h1 className="card--title">{props.title}</h1>
      <h3 className="card--dates">
        {props.startDate} — {props.endDate}
      </h3>
      <p className="card--description">{props.description}</p>
    </div>
  );
}

export default Card;
