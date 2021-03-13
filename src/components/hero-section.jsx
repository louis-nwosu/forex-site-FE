import React from "react";

import AOS from "aos";

const HeroSection = () => {
  AOS.init();
  return (
    <div className="container-fluid py-5 text-light font-weight-bold" data-aos="fade-up">
      <div className="row py-5">
        <div className="col-12">
          <div className="container py-5">
            <div className="row py-4">
              <div className="col-12 py-2 blur0 rounded">
                <p className="display-4 font-weight-bold">Explore the life you want to live.</p>
                <p className="display-1">Put your money to work</p>
                <div className="row">
                  <div className="col-md-8">
                    <p className=''>
                      We started operating in 2009 and since the moment the
                      company was established its key priority has always been
                      to provide clients with the most competitive conditions
                      based on the most advanced technologies.
                    </p>
                  </div>
                </div>
                <button className="btn my-2 btn-primary">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
