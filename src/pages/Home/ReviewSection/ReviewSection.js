import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Loading from "../../Shared/Loading";
import ReactStars from "react-rating-stars-component";

const ReviewSection = () => {
   const [reviews, setReviews] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch("http://localhost:5500/user-reviews");
         const data = await res.json();
         setReviews(data);
         setLoading(false);
      };
      fetchData();
   }, []);

   if (loading) {
      return <Loading></Loading>;
   }

   return (
      <div className="text-center lg:mx-4 my-28">
         <p
            style={{ fontFamily: "Dancing Script, cursive" }}
            className="text-red-400 text-xl font-semibold"
         >
            Reviews of Crazy Traveler
         </p>
         <h2 className="text-4xl font-extrabold">OUR CUSTOMER SAYS</h2>
         <div className="mt-20">
            <Swiper
               slidesPerView={1}
               spaceBetween={0}
               slidesPerGroup={1}
               loop={true}
               centeredSlides={true}
               pagination={{
                  clickable: true,
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                  },
                  768: {
                     slidesPerView: 3,
                  },
                  1024: {
                     slidesPerView: 3,
                  },
               }}
               navigation={true}
               modules={[Pagination, Navigation]}
            >
               {reviews.map((review) => (
                  <SwiperSlide key={review._id}>
                     <div className="grid justify-items-center border-2 bg-gradient-to-r from-purple-50 to-purple-200 border-purple-400 rounded-lg p-4 mb-10 mt-12 mx-9">
                        <h2 className="text-lg font-bold text-purple-900">
                           {review.userName}
                        </h2>
                        <p className="text-xs my-1 text-rose-600">
                           {review.date}
                        </p>
                        <article className="text-base text-gray-500">
                           {review.reviewBody}
                        </article>
                        <ReactStars
                           {...{ size: 30, value: review.rating, edit: false }}
                        />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default ReviewSection;
