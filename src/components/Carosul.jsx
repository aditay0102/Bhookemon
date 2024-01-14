import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './css/Carosul.css'

function Carosul() {
  return (
    <div>
      
    <Carousel>
     
      <Carousel.Item>
        <img className='caroImage'  src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="First slide" />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='caroImage' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Second slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='caroImage' src='https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Third slide" />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </div>
  )
}

export default Carosul
