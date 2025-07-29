import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../assets/slide1.jpg";
import img2 from"../assets/slide2.jpg";
import img3 from "../assets/slide3.jpg";
import img4 from "../assets/slide4.jpg";
const items = [
  {
    src: img1,
    altText: 'Kargo maşını',
    caption: 'Sürətli Çatdırılma'
  },
  {
    src: img2,
    altText: 'Paketləmə',
    caption: 'Etibarlı Qablaşdırma'
  },
  {
    src: img3,
    altText: 'İzləmə sistemi',
    caption: 'Onlayn İzləmə'
  },
  {
    src: img4,
    altText: 'Neqliyyat sistemi',
    caption: 'catdirilma usullari '
  }

];


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
            height="400"
          />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;