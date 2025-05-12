import React from 'react';
import './Carousel.css';

function Carousel() {
  const imageFiles = [
    '/image2.jpg',
    '/image3.jpg',
    '/image4.png',
    '/image5.jpg',
    '/image6.jpg'
  ];

  return (
    <section className="carousel">
      <h4 className="section-title"><span>What WE Do</span></h4>
      <h2 className="section-heading">We Turn Your Words Into Masterpieces</h2>
      <div className="carousel-images">
        {imageFiles.map((file, index) => (
          <img
            key={index}
            src={file}
            alt={`AI Sample ${index + 1}`}
            className="carousel-img"
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
