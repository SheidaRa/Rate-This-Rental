import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
        <img src="/photos/apartment/1.png"></img>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="/photos/apartment/2.png"></img>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="/photos/apartment/3.jpg"></img>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider