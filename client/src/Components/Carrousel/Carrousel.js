import React from 'react'
import {Carousel} from 'react-bootstrap';
import couple1 from '../../Assets/couple1.jpeg';
import couple2 from '../../Assets/couple2.jpeg';
import couple3 from '../../Assets/couple3.jpeg';
import couple from '../../Assets/couple.jpeg';

import './carousel.css'

const Carrousel = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item className="containerr mt-100" interval={2000}>
    <img
      className="d-block w-100"
      src={couple} 
      alt="First slide"
      width="300px"
      height= "400px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item className="containerr mt-100" interval={2000}>
    <img
      className="d-block w-100"
      src={couple2}
      alt="Second slide"
      width="300px"
      height= "400px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item className="containerr mt-100">
    <img
      className="d-block w-100" 
      src={couple3}
      alt="Third slide"
      width="300px"
      height= "400px"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






        </div>
    )
}

export default Carrousel
