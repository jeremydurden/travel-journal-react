import Card from "./Card";

import data from "../data";

function Feed() {
  let cards = data.map((item) => {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return <div className="feed">{cards}</div>;
}

export default Feed;
