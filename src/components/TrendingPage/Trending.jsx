import React from "react";
import "./Trending.css";
import Lehanga from "../../assets/lehanga1.png";
import Lehanga2 from "../../assets/lehanga2.png";
import Lehanga3 from "../../assets/lehanga3.png";
import Lehanga4 from "../../assets/lehanga4.png";
import Lehanga5 from "../../assets/lehanga5.png";
import Favorite from "../../assets/favorite.png";
import FavoriteBorder from "../../assets/Favorite Border.png";
import Custom from "../../assets/Custom.png";
import Shipping from "../../assets/Shipping.png";
import GlobalDelivery from "../../assets/global-delivery.png";
import Return from "../../assets/Return.png";

function Trending() {
  return (
    <>
      <div className="trending-menu">
        <h3 className="heading">
          What's <span>Trending</span> Today
        </h3>

        <div className="trending-list">
          <div className="card">
            <img src={Lehanga} className="card--image" alt="cover" />
            <span className="favorite-div">
              <img src={Favorite} alt="Favorite-icon" />
            </span>
            <div className="card--stats">
              <p className="product-name">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <p className="price">
                <b>₹ 4500</b>
              </p>
            </div>
          </div>

          <div className="card">
            <img src={Lehanga2} className="card--image" alt="cover" />
            <span className="favorite-div">
              <img src={FavoriteBorder} alt="Favorite-icon" />
            </span>
            <div className="card--stats">
              <p className="product-name">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <p className="price">
                <b>₹ 4500</b>
              </p>
            </div>
          </div>

          <div className="card">
            <img src={Lehanga3} className="card--image" alt="cover" />
            <span className="favorite-div">
              <img src={FavoriteBorder} alt="Favorite-icon" />
            </span>
            <div className="card--stats">
              <p className="product-name">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="price">
                <b>₹ 4500</b>
              </p>
            </div>
          </div>

          <div className="card">
            <img src={Lehanga4} className="card--image" alt="cover" />
            <span className="favorite-div">
              <img src={FavoriteBorder} alt="Favorite-icon" />
            </span>
            <div className="card--stats">
              <p className="product-name">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <p className="price">
                <b>₹ 4500</b>
              </p>
            </div>
          </div>

          <div className="card">
            <img src={Lehanga5} className="card--image" alt="cover" />
            <span className="favorite-div">
              <img src={FavoriteBorder} alt="Favorite-icon" />
            </span>
            <div className="card--stats">
              <p className="product-name">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <p className="price">
                <b>₹ 4500</b>
              </p>
            </div>
          </div>
        </div>

        <div className="Service-Menu">
          <div className="Service">
            <div className="Service-list">
              <div className="Service-icon">
                <img src={Shipping} alt="Free Shipping" />
              </div>
              <p>Free Shipping</p>
            </div>

            <div className="Service-list">
              <div className="Service-icon">
                <img src={Return} alt="Easy Returns" />
              </div>
              <p>Easy Returns</p>
            </div>

            <div className="Service-list">
              <div className="Service-icon">
                <img src={GlobalDelivery} alt="Shipping Globally" />
              </div>
              <p>Shipping Globally</p>
            </div>

            <div className="Service-list">
              <div className="Service-icon">
                <img src={Custom} alt="Custom Fitting" />
              </div>
              <p>Custom Fitting</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
