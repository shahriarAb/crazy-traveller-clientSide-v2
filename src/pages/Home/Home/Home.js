import React from "react";
import AgentReview from "../AgemtReview/AgentReview";
import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Newsletter from "../Newsletter/Newsletter";
import Posts from "../Posts/Posts";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Destinations></Destinations>
         <Posts></Posts>
         <AgentReview></AgentReview>
         <ReviewSection></ReviewSection>
         <Newsletter></Newsletter>
      </div>
   );
};

export default Home;
