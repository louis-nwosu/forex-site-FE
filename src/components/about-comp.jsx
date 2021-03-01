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
                  <div className="col py-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                    voluptatem recusandae debitis veniam quisquam nesciunt esse
                    quod sapiente, cum illo ipsum sint enim accusantium eligendi
                    excepturi praesentium earum ullam. Atque, asperiores quas
                    maxime vitae explicabo repudiandae. Veritatis velit cum
                    natus ipsam vel officia ut hic, quia explicabo quasi quidem
                    consectetur!
                  </div>
                  <div className="col py-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                    voluptatem recusandae debitis veniam quisquam nesciunt esse
                    quod sapiente, cum illo ipsum sint enim accusantium eligendi
                    excepturi praesentium earum ullam. Atque, asperiores quas
                    maxime vitae explicabo repudiandae. Veritatis velit cum
                    natus ipsam vel officia ut hic, quia explicabo quasi quidem
                    consectetur!
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
