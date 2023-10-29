import React from "react";
import "./Collection.css";
import Ghagra from "../../assets/Ghagra.png";
import Ghagra1 from "../../assets/Ghagra1.png";
import Ghagra2 from "../../assets/Ghagra2.png";
import Ghagra3 from "../../assets/Ghagra3.png";
import Ghagra4 from "../../assets/Ghagra4.png";
import Lehanga from "../../assets/lehanga1.png";
import Lehanga2 from "../../assets/lehanga2.png";
import Lehanga3 from "../../assets/lehanga3.png";
import Lehanga4 from "../../assets/lehanga4.png";
import Lehanga5 from "../../assets/lehanga5.png";
import Favorite from "../../assets/favorite.png";
import FavoriteBorder from "../../assets/Favorite Border.png";
import Katrina from "../../assets/katrina.png";
import Shanya from "../../assets/shanya.png";
import Deepika from "../../assets/Deepika2.png";

function Collection() {
  return (
    <div className="collection-menu">
      <h3 className="title-heading">
        Trending Looks to <span>Keep an Eye On</span>
      </h3>
      <div className="trending-section">
        <div className="trending-looks">
          <div className="trending-card">
            <img src={Ghagra} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="trending-card">
            <img src={Ghagra} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="trending-card">
            <img src={Ghagra} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="trending-card">
            <img src={Ghagra} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="trending-card">
            <img src={Ghagra} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <h3 className="title-heading">
        Shop By<span>Collection</span>
      </h3>
      <div className="collection-section">
        <img src={Ghagra1} alt="Ghagra-img" />
        <img src={Ghagra2} alt="Ghagra-img" />
        <img src={Ghagra3} alt="Ghagra-img" />
        <img src={Ghagra4} alt="Ghagra-img" />
      </div>

      <h3 className="title-heading">
        Best <span>Seller</span>
      </h3>
      <div className="bestSeller-list">
        <div className="card">
          <img src={Lehanga} className="card-image" alt="cover" />
          <span className="wishlist">
            <img src={Favorite} alt="Favorite-icon" />
          </span>
          <div className="card--stats">
            <p className="product-menu">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>
            <p className="price-tag">
              <b>₹ 4500</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Lehanga2} className="card-image" alt="cover" />
          <span className="wishlist">
            <img src={FavoriteBorder} alt="Favorite-icon" />
          </span>
          <div className="card--stats">
            <p className="product-menu">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>
            <p className="price-tag">
              <b>₹ 4500</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Lehanga3} className="card-image" alt="cover" />
          <span className="wishlist">
            <img src={FavoriteBorder} alt="Favorite-icon" />
          </span>
          <div className="card--stats">
            <p className="product-menu">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="price-tag">
              <b>₹ 4500</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Lehanga4} className="card-image" alt="cover" />
          <span className="wishlist">
            <img src={FavoriteBorder} alt="Favorite-icon" />
          </span>
          <div className="card--stats">
            <p className="product-menu">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>
            <p className="price-tag">
              <b>₹ 4500</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Lehanga5} className="card-image" alt="cover" />
          <span className="wishlist">
            <img src={FavoriteBorder} alt="Favorite-icon" />
          </span>
          <div className="card--stats">
            <p className="product-menu">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>
            <p className="price-tag">
              <b>₹ 4500</b>
            </p>
          </div>
        </div>
      </div>

      <h3 className="title-heading">
        Customer <span> Highlights</span>
      </h3>
      <div className="customer-section">
        <div className="customer-list">
          <div className="customer-panel">
            <img src={Katrina} alt="customer-img" />
            <p>MEET</p>
            <p><b>Katerina Kaif</b></p>
            <p>From Mumbai, India</p>
          </div>
        

        <div></div>
          <div className="customer-panel">
            <img src={Shanya} alt="customer-img" />
            <p>MEET</p>
            <p><b>Katerina Kaif</b></p>
            <p>From Mumbai, India</p>
          </div>

        <div className="customer-panel">
          <img src={Shanya} alt="customer-img" />
          <p>MEET</p>
          <p><b>Katerina Kaif</b></p>
          <p>From Mumbai, India</p>
        </div>

        <div className="customer-panel">
          <img src={Deepika} alt="customer-img" />
          <p>MEET</p>
          <p><b>Katerina Kaif</b></p>
          <p>From Mumbai, India</p>
        </div>
      </div>
      <h3 className="title-heading"><span><a href="">View All</a></span></h3>
      </div>
    </div>
  );
}

export default Collection;
