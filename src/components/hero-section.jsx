import React from "react";

import AOS from "aos";

const HeroSection = () => {
  AOS.init();
  return (
    <div className="container-fluid py-5 text-light" data-aos="fade-up">
      <div className="row py-5">
        <div className="col-12">
          <div className="container py-5">
            <div className="row py-4">
              <div className="col-12 py-2">
                <p className="display-4">Explore the life you want to live.</p>
                <p className="display-5">Put your money to work</p>
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      We started operating in 2009 and since the moment the
                      company was established its key priority has always been
                      to provide clients with the most competitive conditions
                      based on the most advanced technologies.
                    </p>
                  </div>
                </div>
                <button className="btn my-2 white-outline">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
