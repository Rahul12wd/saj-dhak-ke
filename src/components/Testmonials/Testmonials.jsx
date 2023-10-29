import React from "react";
import "./Testmonials.css";
import Shanya from "../../assets/shanya.png";
import MadeInIndia from "../../assets/MadeInIndia.png";
import Like from "../../assets/Like.png";
import Quality from "../../assets/Quality.png";
import TweentyFour from "../../assets/24hr.png";
import Payment from "../../assets/Payment.png";

function Testmonials() {
  return (
    <div className="testmonials-section">
      <h3 className="title-heading">
        What our <span>Customer Say’s</span>
      </h3>
      <div className="testmonial-menu">
        <div className="image-div">
          <img src={Shanya} alt="profile-img" />
        </div>

        <div className="review-div">
          <p>
            <b>Jenny Thaper</b>
          </p>
          <p>
            <span></span>4.5
          </p>
          <p>
            “I recently shopped for a Lehenga at Sajh Dhaj Ke. Their collection
            is diverse and impressive. The service was outstanding, with
            attentive staff helping me find the perfect fit. The Lehenga's
            quality exceeded expectations. I highly recommend Sajh Dhaj Ke for
            top-notch Lehengas and exceptional service.”
          </p>
        </div>
      </div>
      <h3 className="title-heading">
        <span>
          <a href="">View All</a>
        </span>
      </h3>

      <div className="information-section">
        <div className="info-menu">
          <div className="info-list">
            <div className="info-icon">
              <img src={MadeInIndia} alt="Made in india" />
            </div>
            <p>Made In India</p>
          </div>

          <div className="info-list">
            <div className="info-icon">
              <img src={Like} alt="Sustaining Artisans" />
            </div>
            <p>Sustaining Artisans</p>
          </div>

          <div className="info-list">
            <div className="info-icon">
              <img src={Quality} alt="Premium Quality" />
            </div>
            <p>Premium Quality</p>
          </div>

          <div className="info-list">
            <div className="info-icon">
              <img src={TweentyFour} alt="24/7 Support" />
            </div>
            <p>24/7 Support</p>
          </div>

          <div className="info-list">
            <div className="info-icon">
              <img src={Payment} alt="Secure Payment" />
            </div>
            <p>Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmonials;
