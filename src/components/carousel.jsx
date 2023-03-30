import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const TravelCarousel = () => {
    return (
        <Carousel>
            <div className='carousel-element'>
                <h1>What climate to you prefer?</h1>
                <button className='carousel-button'>Hot weather</button>
                <button className='carousel-button'>No preference</button>
                <button className='carousel-button'>Mild weather</button>
            </div>
            <div className='carousel-element'>
                <h1>What is most important to you?</h1>
                <button className='carousel-button'>Relaxing</button>
                <button className='carousel-button'>Eating</button>
                <button className='carousel-button'>Exploring</button>
            </div>
            <div className='carousel-element'>
                <h1>What activities do you prefer?</h1>
                <button className='carousel-button'>Swimming</button>
                <button className='carousel-button'>Sightseeing</button>
                <button className='carousel-button'>Hiking</button>
            </div>
            <div className='carousel-element'>
                <h1>Your result:</h1>
                <p>Beach holiday!!</p>
                <Link to='/locations'>
                    <button className='carousel-button'>See beach locations!</button>
                </Link>
            </div>
        </Carousel>
    );
}

export default TravelCarousel;
