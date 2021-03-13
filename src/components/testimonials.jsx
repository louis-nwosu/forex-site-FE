import React from "react";

//import photo
import testimonialPhoto from "../assets/bruce-mars-8YG31Xn4dSw-unsplash.jpg";

//import stylesheet
import "../App.css";

///dependency
import AOS from "aos";

//util components
const TestimonialCard = () => {
  return (
    <div className="col-md-12 py-4 blur rounded" data-aos='fade-right'>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis a
          sequi laudantium laboriosam aperiam provident ipsam consequuntur quasi
          ratione? Enim dolore quam cupiditate et repellendus dolores, modi
          veniam error ullam.
        </p>
        <p class="h6 py-1 text-dark p-3">
          benjamin cowen <span class="text-danger px-1">CEO, scam.</span>
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
              <TestimonialCard />
            </div>
            <div className="col-md-4 py-3">
              <TestimonialCard />
            </div>
            <div className="col-md-4 py-3">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
