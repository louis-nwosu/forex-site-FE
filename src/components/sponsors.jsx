import React from "react";

//import stylesheet
import "../App.css";

//import images
import bitcoin from "../assets/59669-cryptocurrency-logo-ethereum-zazzle-bitcoin-hd-image-free-png.png";
import perfectMoney from "../assets/pngwing.com.png";
import payeer from "../assets/57153-payeer-money-system-bitcoin-payment-download-hq-png.png";
import ssn from '../assets/Daco_815071.png'
import forex from '../assets/imgbin_logo-foreign-exchange-market-trader-forex-signal-exchange-rate-png.png'

const Sponsors = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-1 mx-auto">
          <img src={bitcoin} className="img-fluid" />
        </div>
        <div className="col-1 mx-auto">
          <img src={perfectMoney} className="img-fluid mt-3" />
        </div>
        <div className="col-1 mx-auto">
          <img src={payeer} className="img-fluid mt-3" />
        </div>
        <div className="col-1 mx-auto">
          <img src={ssn} className="img-fluid mt-3" />
        </div>
        <div className="col-1 mx-auto">
          <img src={forex} className="img-fluid mt-3" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
