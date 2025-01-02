import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import REVIEWS from "../../data/reviews.js";

import "./ReviewsCard.css";


export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {REVIEWS.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="reviews">
            <div className="reviews-top">
              <img className="reviews-photo" src={review.img} alt="Reviewer" />
              <p className="reviews-name">{review.name}</p>
            </div>
            <div className="reviews-bottom">
              <p>{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
