import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="home-title-container">
            <h1 className="home-title">Welcome to Travelpedia</h1>
        </div>
        <div className="content-container">
            <div className="home-content-block-1">
                <img width="400px" src="https://b2003130.smushcdn.com/2003130/wp-content/uploads/2018/06/Caribbean-hammock-beach-1024x683.jpg?lossy=1&strip=1&webp=1"></img>
                <div className="home-text-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>
            <div className="home-content-block-2">
                <h1>How can we help?</h1>
                <div className="home-buttons">
                    <Link to="/travel-recs" className="link-button"><p className="home-button-1">Not sure where to travel to? Take our travel quiz to receive a personalised location recommendation!</p></Link>
                    <Link to="/locations" className="link-button"><p className="home-button-1">Want to know more before you go? Take a look at our most popular destinations and learn more about them!</p></Link>
                </div>
            </div>
            <div className="home-content-block-3">
                <h1>Where to book:</h1>
                <p>Take a look at our recommendations for where to book the most import parts of your dream holiday!</p>
                <div className="links-to-book">
                    <a href="https://www.skyscanner.net/" className="link-redirect" target="blank"><p>Flights</p></a>
                    <a href="https://www.booking.com/" className="link-redirect" target="blank"><p>Hotels</p></a>
                    <a href="https://www.rentalcars.com/en/" className="link-redirect" target="blank"><p>Car hire</p></a>
                    <a href="https://www.attractiontickets.com/en/destinations" className="link-redirect" target="blank"><p>Attractions</p></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;