import React, { useState } from "react";
import Card from "./components/card";

const Locations = () => {
  const [cards, setCards] = useState([
    {
      title: "Spain",
      image: "https://imgproxy.natucate.com/HmhJoiR_WkciuQQilTkPCsa2I1qjjNxzpO0_rVNLX8E/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvNDI4YTYzZWUtMmYzOS00YmFjLTgwY2UtNmY2N2Y4Yzc1NzJlL2MxNDJhZjc3MWUtMTY3OTQ4Njc1MC9zcGFuaWVuLWxhZW5kZXJpbmZvcm1hdGlvbmVuLXN0YWR0LW96ZWFuLXdhc3Nlci1uYXR1Y2F0ZS5qcGc",
      description: "Spain offers a wonderfully diverse landscape which covers flat land, vast expanses of beautiful coastline, and rugged mountain regions too.",
      weather: "25°C",
      showDropdown: false
    },
    {
      title: "Italy",
      image: "https://imageio.forbes.com/blogs-images/monicahoughton/files/2018/01/Vernazza-in-Cinque-Terre-1200x800.jpg?format=jpg&width=1200",
      description: "It offers you spectacular cities, ancient ruins, wonderful museums, soaring mountains, beautiful natural scenery, beaches and good Italian food",
      weather: "23°C in the north, 26°C in the south",
      showDropdown: false
    },
    {
      title: "Australia",
      image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/1200x-1.jpg",
      description: "Australians are warm and welcoming, hardworking and creative. We're one of the most multicultural countries in the world, and home to the world's oldest living culture.",
      weather: "hot",
      showDropdown: false
    }
  ]);

  const handleCardClick = index => {
    const newCards = [...cards];
    newCards[index].showDropdown = !newCards[index].showDropdown;
    setCards(newCards);
  };

  return (
    <>
      <div className="location-title-container">
        <h1 className="location-title">Locations</h1>
        <p>Take a look at all of our possible locations and find your perfect match!</p>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            showDropdown={card.showDropdown}
            handleCardClick={() => handleCardClick(index)}
            weather={card.weather}
          />
        ))}
      </div>
    </>
  );
};

export default Locations;
