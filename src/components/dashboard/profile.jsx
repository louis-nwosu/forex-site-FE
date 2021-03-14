import React, { useState } from "react";

//import stylesheet
import "../../App.css";

//local imports
// import {TestimonialCard} from '../testimonials';
import { DbNav } from "./main";

//import image
import userImage from "../../assets/bruce-mars-8YG31Xn4dSw-unsplash.jpg";

const UserCard = () => {
  return (
    <>
      <div className="col-md-12 py-4 bg-dark text-light blur rounded">
        <div class="row">
          <div class="col-2 mx-auto">
            <img src={userImage} alt="happy client" class="testimonial-img" />
          </div>
        </div>
        <div className="col-md-12">
          <p class="h3 my-3 text-center px-3">Nwosu louis.</p>
          <div className="container my-3">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="row my-2">
                  <div className="col-5">Total</div>
                  <div className="col-5 ms-auto">40,000</div>
                </div>
                <div className="row my-2">
                  <div className="col-5">Bonus</div>
                  <div className="col-5 ms-auto">40,000</div>
                </div>
                <div className="row my-2">
                  <div className="col-5">Coins</div>
                  <div className="col-5 ms-auto">40,000</div>
                </div>
                <div className="row my-2">
                  <div className="col-5">Crypto</div>
                  <div className="col-5 ms-auto">40,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Profile = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <DbNav />
          </div>
        </div>
      </div>
      <div className="container py-1">
        <div className="row py-5">
          <div className="col-md-7 my-3">
            <p className="display-5">test.</p>
          </div>
          <div className="col-md-4 ms-auto my-3">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
};
