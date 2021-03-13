import React from "react";

//import picture
import firstImage from "../assets/windows-C6T6vr1sQI0-unsplash.jpg";

//import dependencies
import AOS from "aos";
import "aos/dist/aos.css";

const Instuction = () => {
  AOS.init();
  return (
    <div className="container py-5" data-aos="fade-up">
      <div className="row">
        <div className="col-md-12 py-4">
          <p className="display-5 text-end">
            HOW IT ALL WORKS <span className="text-danger">.</span>
          </p>
        </div>
        <div className="col-md-12">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5 mx-auto">
                          <img src={firstImage} className="img-fluid" />
                        </div>
                        <div className="col-md-5 mx-auto">
                          <p className="h1 py-1">Register</p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid eligendi itaque ullam nostrum ab illo.
                            Cumque itaque ut exercitationem commodi esse at
                            incidunt error voluptates ipsum explicabo culpa
                            similique necessitatibus qui non autem perspiciatis,
                            quibusdam, nisi temporibus saepe laboriosam
                          </p>
                          <button className='btn btn-primary'>
                              Register now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5 mx-auto">
                          <img src={firstImage} className="img-fluid" />
                        </div>
                        <div className="col-md-5 mx-auto">
                          <p className="h1 py-1">Create a deposit</p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid eligendi itaque ullam nostrum ab illo.
                            Cumque itaque ut exercitationem commodi esse at
                            incidunt error voluptates ipsum explicabo culpa
                            similique necessitatibus qui non autem perspiciatis,
                            quibusdam, nisi temporibus saepe laboriosam
                            voluptatem! Facere, aut eos. Adipisci doloremque
                            neque amet exercitationem, libero debitis?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5 mx-auto">
                          <img src={firstImage} className="img-fluid" />
                        </div>
                        <div className="col-md-5 mx-auto">
                          <p className="h1 py-1">Get profit</p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid eligendi itaque ullam nostrum ab illo.
                            Cumque itaque ut exercitationem commodi esse at
                            incidunt error voluptates ipsum explicabo culpa
                            similique necessitatibus qui non autem perspiciatis,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instuction;
