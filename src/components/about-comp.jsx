import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  AOS.init();
  return (
    <>
      <div className="container-fluid py-5 bg-dark" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12">
            <div className="container py-3">
              <div className="col-md-12">
                <p className="display-6 text-end text-light">
                  About us<span className="text-danger">.</span>
                </p>
                <div className="row gx-3 text-light">
                  <div className="col-md-6 py-1">
                    We are a trusted and reliable forex and crypto-currency
                    Investments agaency dedicated to helping our customers get
                    the best of thier investments.We offer you an interesting
                    investment plans, an international working environment and
                    excellent career opportunities, qualified support to
                    partners at all stages of cooperation.
                  </div>
                  <div className="col-md-6 py-1">
                    Baillie-walsh is the company of beneficial short-term and
                    long-term investments aimed at making a profit by investing
                    in constantly growing shares of the Tokyo Stock Exchange.Our
                    activities are focused on establishing a long-term trust
                    relationship between the company, its partners and
                    customers. Our goal - a stable income of each investor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
