import React from "react";
import "../App.css";
import phone from "../assets/kisspng-feature-phone-smartphone-foreign-exchange-market-t-5b22bbf5c110c7.1209580415290029977908.png";

//dependencies
import AOS from "aos";

//util components
const MissionWriteUp = () => {
  AOS.init();
  return (
    <div className="container py-1 px-1" data-aos='fade-up'>
      <div className="row">
        <div className="col-md-12">
          <p className="display-6">
            Focused, Active Management of High-Growth Digital Assets
            <span className="text-danger">.</span>
          </p>
          <p className="py-3">
            Baillie-walsh Investment Global Ltd is a registered investment platform
            providing digital asset investment management services to
            individuals. We provide a dynamic investment solution to clients in
            need of a self-operating portfolio, as well as a smart fund with
            flexible time and investment amount.
          </p>
        </div>
      </div>
    </div>
  );
};

const MissionImage = () => {
  return (
    <div data-aos='fade-right'>
      <img src={phone} className='img-fluid' alt='an image of a phone' />
    </div>
  );
};

export const MissionStatement = () => {
  return (
    <div className="container-fluid py-5 px-5 bg-dark text-light">
      <div className="row">
        <div className="col-md-6">
          <MissionWriteUp />
        </div>
        <div className="col-md-6">
          <MissionImage />
        </div>
      </div>
    </div>
  );
};
