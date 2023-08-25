import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const HomeCarousel = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img className='imgcaro' src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_39/3509143/210929-gaming-front-seo-2x1.jpg' text="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className='imgcaro' src='https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc-696x464.jpg' text="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className='imgcaro' src='https://i.pinimg.com/736x/18/57/42/1857428ec9f5aff9c167c2a3abaaf4d5.jpg' text="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomeCarousel
