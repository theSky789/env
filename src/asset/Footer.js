import React from "react";
import "../asset/footer.css";
import logo from "../asset/Vector.png";

function Footer() {
  return (
    <footer className="foot">
      <div className="container3">
        <div className="foot__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="foot__list">
          <div className="foot__list__items">
            401 Park Ave, 10th Floor, New York 10016
          </div>
          <div className="foot__list__items flx">
            <div className="foot__list__items__inner">Email Marketing</div>
            <div className="foot__list__items__inner">Customer Engagement</div>
            <div className="foot__list__items__inner">AMP Emails</div>
            
          </div>
          <div className="foot__list__items">help@envoie.com <br/><br/>+91-9876543210</div>
        </div>
        <p className="foot__rights">&copy;2022 Envoie |  All Rights Reserved  </p>
      </div>
    </footer>
  );
}

export default Footer;
