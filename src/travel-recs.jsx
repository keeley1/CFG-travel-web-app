import React from "react";
import TravelCarousel from "./components/carousel";

const TravelRecs = () => {
    return (
        <>
        <div className="travel-recs-title-container">
            <h1>Travel Recommendations</h1>
            <p>Follow our travel quiz to find out your ideal holiday destination:</p>
            <TravelCarousel />
        </div>
        </>
    )
}

export default TravelRecs;