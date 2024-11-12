import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import imagebike from '../styles/bikeimage.jpeg';
import car from '../styles/carimage.jpeg';

const ImageSlider = () => {
  const sliderRef = useRef(null); // Create a reference to the slider component

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows, we will create custom ones
  };

  // Function to go to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="right-column">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={imagebike} alt="Bike" />
        </div>
        <div>
          <img src={car} alt="Car" />
        </div>
        {/* Add more images here if needed */}
      </Slider>

      {/* Custom navigation buttons */}
      <button className="prev-button" onClick={prevSlide}>Prev</button>
      <button className="next-button" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
