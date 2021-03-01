import React from "react";

//dependency
import AOS from "aos";
import "aos/dist/aos.css";

//util component
const TrustCards = ({text}) => {
  return (
    <div className="col py-5 p-3 bg-dark text-light mx-3 my-1">
      <div className="row">
        <div className="col-md-12">
          <p className="h4 text-center">
            <i className="bi-facebook px-3 display-1 text-danger"></i>
          </p>
          <p className="h6 text-center py-3">{text}</p>
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  AOS.init();
  const writeups = [
      'Reliability and security',
      'Competitive conditions',
      'Client-oriented approach',
      'Cutting-edge technologies'
  ]
  return (
    <>
      <div className="container py-5" data-aos="fade-right">
        <div className="row py-3">
          <div className="col-md-12">
            <div className="row py-3">
              <div className="col-md-5">
                <p className="display-6">
                  The most trusted forex investment platform
                  <span className="text-danger">.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-2">
            {writeups.map((cur) => {
              return <TrustCards text={cur} />;
            })}
          </div>
          <div className='row my-3'>
              <div className='container'>
                  <div className='col-md-12'>
                      <button className='btn white-outline2'>Join us</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
