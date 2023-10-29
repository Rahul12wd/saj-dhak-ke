import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import topHeadLogo from "../../assets/topheadLogog.png";
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/profileIcon.png";
import WhatsappIcon from "../../assets/WhatsAppIcon.png";
import shoppingIcon from "../../assets/ShoppingCartIcon.png";
import searchIcon from "../../assets/SearchIcon.png";
const Header = () => {
  return (
    <>
      <div className="top-heading">
        <div className="headernote">
          <div>
            <img src={topHeadLogo} alt="logo" />
          </div>

          <div>
            <p>Discover All Festive Looks</p>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="button-container">
          <div>Bridal</div>
          <div>Ready To wear</div>
          <div>Luxury Ethinic</div>
        </div>

        <div className="logo-container">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="icon-container">
          <div>
            <img src={searchIcon} alt="icon" />
          </div>
          <div>
            <img src={WhatsappIcon} alt="icon" />
          </div>
          <div>
            <img src={shoppingIcon} alt="icon" />
          </div>
          <div>
            <img src={profileIcon} alt="icon" />
          </div>
        </div>
      </div>

      <div className="listitem-menu">
        <div>BESTSELLER</div>
        <div>NEW</div>
        <div>COLLECTION</div>
        <div>ACCESORIES</div>
        <div>WEAVES</div>
        <div>OCCASIONS</div>
        <div>SALE</div>
      </div>
    </>
  );
};

export default Header;
