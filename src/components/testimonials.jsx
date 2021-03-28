import React from "react";

//import photo
import testimonialPhoto from "../assets/bruce-mars-8YG31Xn4dSw-unsplash.jpg";
import photo2 from "../assets/photo-1533227268428-f9ed0900fb3b.jpeg";
import photo3 from "../assets/photo-1581404717261-d2a6e9aa3b8a.jpeg";

//import stylesheet
import "../App.css";

///dependency
import AOS from "aos";

//util components
export const TestimonialCard1 = () => {
  return (
    <div className="col-md-12 py-4 blur rounded" data-aos="fade-right">
      <div class="row">
        <div class="col-2 mx-auto">
          <img
            src={testimonialPhoto}
            alt="happy client"
            class="testimonial-img"
          />
        </div>
      </div>
      <div className="col-md-12">
        <p class="p-3">
          I got into forex trading about a few months ago, and got a message on
          instagram from one of their digital trading assistant. since then it
          has been nothing but pure bliss and extra income.
        </p>
        <p class="h6 py-1 text-dark p-3">
          benjamin isreali <span class="text-danger px-1">CEO, drop.co.</span>
        </p>
      </div>
    </div>
  );
};

export const TestimonialCard2 = () => {
  return (
    <div className="col-md-12 py-4 blur rounded" data-aos="fade-right">
      <div class="row">
        <div class="col-2 mx-auto">
          <img src={photo2} alt="happy client" class="testimonial-img" />
        </div>
      </div>
      <div className="col-md-12">
        <p class="p-3">
          Ever since i started trading with this investment platform i had
          series of profits. they have been nothing but the best. i highly urge
          you to give them a chance.
        </p>
        <p class="h6 py-1 text-dark p-3">
          Richard sistilli{" "}
          <span class="text-danger px-1">freelancer, trader.</span>
        </p>
      </div>
    </div>
  );
};

export const TestimonialCard3 = () => {
  return (
    <div className="col-md-12 py-4 blur rounded" data-aos="fade-right">
      <div class="row">
        <div class="col-2 mx-auto">
          <img src={photo3} alt="happy client" class="testimonial-img" />
        </div>
      </div>
      <div className="col-md-12">
        <p class="p-3">
          Definately the best tarders in the game, i've made a small fortune
          allowing them handle my trade. Simply the best, i haven't had a reason
          to regret trading with them.
        </p>
        <p class="h6 py-1 text-dark p-3">
          joshua gonzalez <span class="text-danger px-1">CEO, scam.</span>
        </p>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  AOS.init();
  return (
    <div
      className="container-fluid py-5"
      id="testimonial-sec"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="container px-5">
          <div className="row">
            <div className="col-md-12">
              <p className="display-5">
                Testimonials<span className="text-danger">.</span>
              </p>
              <p className="h5 text-danger">What are our clients saying?</p>
            </div>
            <div className="col-md-4 py-3">
              <TestimonialCard1 />
            </div>
            <div className="col-md-4 py-3">
              <TestimonialCard2 />
            </div>
            <div className="col-md-4 py-3">
              <TestimonialCard3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
