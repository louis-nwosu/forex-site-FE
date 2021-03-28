import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid py-5 bg-dark">
      <div className="row">
        <div className="col-md-12">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <div className="row">
                  <div className="col-12">
                    <p className="text-light h5 py-1">
                      Baillie-Glifford<spam className="text-danger">FX</spam>
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="text-light">
                      The brightest star in the background of the rising sun!
                    </p>
                  </div>
                  <div className="col-1">
                    <i className="bi-facebook text-light"></i>
                  </div>
                  <div className="col-1">
                    <i className="bi-twitter text-light"></i>
                  </div>
                  <div className="col-1">
                    <i className="bi-instagram text-light"></i>
                  </div>
                  <div className="col-1">
                    <i className="bi-linkedin text-light"></i>
                  </div>
                  <div className="col-1">
                    <i className="bi-google text-light"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-light mx-auto">
                <div className="row">
                  <div className="col-12">
                    <p className="h5">Site navigation</p>
                  </div>
                  <ul className="nav flex-column">
                    <li class="nav-item">
                      <a
                        class="nav-link text-light"
                        aria-current="page"
                        href="#"
                      >
                        About us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">
                        Investement plan
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">
                        Rate us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-light"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <p className="text-light h5">Latest news</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
