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
      weather: "26°C",
      showDropdown: false
    }, 
    {
      title: "Canada",
      image: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg",
      description: "No matter which part of Canada you are visiting you'll find people, culture and communities that encapsulate the past of the country. There is a rich indigenous culture.",
      weather: "20°C on the coast, 25°C in the middle",
      showDropdown: false
    },
    {
        title: "Japan",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308",
        description: "Japan is one of the oldest civilizations and has a beautiful and diverse history. There is stunning, diverse scenery with mountains and breathtaking views.",
        weather: "26°C",
        showDropdown: false
      },
      {
        title: "Greece",
        image: "https://media.timeout.com/images/105859749/750/422/image.jpg",
        description: "Greece is famous for its amazing beaches and clear-blue waters. In addition, there is the perfect beauty of Cycladic architecture, incredible sunset spots, and warm summer weather.",
        weather: "24°C ",
        showDropdown: false
      },
      {
        title: "Thailand",
        image: "https://a.cdn-hotels.com/gdcs/production146/d585/aa60115c-bdfc-479f-88ba-5cb0f15a5af8.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        description: "Thailand is a country with a diverse range of landscapes and natural wonders waiting to be explored. Thailand is justifiably famous for its amazing islands and beaches.",
        weather: "35°C ",
        showDropdown: false
      },
      {
        title: "France",
        image: "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_France.jpg?h=007ba93e&itok=Uk8SO93w",
        description: "It is home to some of the most varied and breathtaking scenery in the world. From the snow-capped peaks of the Alps to the sun-drenched beaches of the Mediterranean.",
        weather: "20°C ",
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
