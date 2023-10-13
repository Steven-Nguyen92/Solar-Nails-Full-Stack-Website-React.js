import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        className="carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="image"
            src="https://img.freepik.com/free-photo/woman-with-nail-art-promoting-design-luxury-earrings-ring_114579-3704.jpg?w=1380&t=st=1697228534~exp=1697229134~hmac=bad66a27004a99257eede670591e252c71890c0884e3d29c2a5aaf0ca4cd8e83"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://www.blushbeautysalons.com.au/wp-content/uploads/2016/12/luxury-fashion-style-manicure-nail-cosmetics-and-make-up-jewelry-large-purple-earrings.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://dta0yqvfnusiq.cloudfront.net/herba32890014/2019/06/banner-90-5d1a555b4fc38-1200x628.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// render(<ControlledCarousel />);
