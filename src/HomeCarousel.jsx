import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const HomeCarousel = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img className='imgcaro' src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Hawa_Mahal_east_facade_%2814-07-2022%29.jpg' text="HAWA MAHAL" />
        <Carousel.Caption>
          <h3>HAWA MAHAL</h3>
          <p>Best Historical Place to visit
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className='imgcaro' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=1200&h=-1&s=1' text="JAL MAHAL" />
        <Carousel.Caption>
          <h3>JAL MAHAL</h3>
          <p>Best Historical Place to visit
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className='imgcaro' src='https://jaipurtourism.co.in/images/places-to-visit/header/jantar-mantar-jaipur-entry-fee-timings-holidays-reviews-header.jpg' text="JAL MAHAL" />
        <Carousel.Caption>
          <h3>JANTAR MANTAR</h3>
          <p>Best Historical Place to visit
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='imgcaro' src='https://assets-news.housing.com/news/wp-content/uploads/2021/08/17181618/All-about-the-City-Palace-Jaipur-A-classic-symbol-of-different-architectural-styles-FB-1200x700-compressed.jpg' text="CITY PALACE" />
        <Carousel.Caption>
          <h3>CITY PALACE</h3>
          <p>
          Best Historical Place to visit
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomeCarousel
