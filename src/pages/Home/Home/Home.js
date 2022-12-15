import React from "react";
import AgentReview from "../AgemtReview/AgentReview";
import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Posts from "../Posts/Posts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Posts></Posts>
            <AgentReview></AgentReview>
        </div>
    );
};

export default Home;
