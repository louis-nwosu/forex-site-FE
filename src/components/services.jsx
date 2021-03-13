import React from "react";

//dependency
import AOS from "aos";
import "aos/dist/aos.css";

//util component
const TrustCards = ({ text, icon, fadeStyle }) => {
  return (
    <div
      className="col py-5 p-3 bg-dark text-light mx-3 my-1 rounded"
      data-aos={fadeStyle}
      data-aos-anchor-placement="center-bottom"
    >
      <div className="row">
        <div className="col-md-12">
          <p className="h4 text-center">
            <i className={`bi-${icon} px-3 text-danger h1`}></i>
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
    {
      text: "Reliability and security",
      icon: "award-fill",
      fadeStyle: "fade-right",
    },
    {
      text: "Competitive conditions",
      icon: "bar-chart-line-fill",
      fadeStyle: "fade-up",
    },
    {
      text: "Client-oriented approach",
      icon: "credit-card-2-back-fill",
      fadeStyle: "fade-down",
    },
    {
      text: "Cutting-edge technologies",
      icon: "layers-half",
      fadeStyle: "fade-right",
    },
  ];
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
              return <TrustCards text={cur.text} icon={cur.icon} fadeStyle={cur.fadeStyle} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
