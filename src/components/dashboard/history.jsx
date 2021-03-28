import React from "react";
import Footer from "../footer";

//local imports
import { DbNav } from "./main";

export const Historysec = () => {
  return (
    <>
      <div className="container-fluid">
        <DbNav />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container mt-5 py-2">
              <div className="row">
                <div className="col-4">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Transaction history
                    </button>
                    <ul
                      className="dropdown-menu my-2 animated bounceInDown"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-1">
                  <p>from:</p>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
                    <option value="3">9</option>
                    <option value="3">10</option>
                  </select>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>January</option>
                    <option value="1">Febuary</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                  </select>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>2021</option>
                    <option value="1">2022</option>
                    <option value="2">2023</option>
                    <option value="3">2024</option>
                  </select>
                </div>
                <div className="col-1">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </div>
            <div className="container py-1">
              <div className="row">
                <div className="col-4">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All currencies
                    </button>
                    <ul
                      className="dropdown-menu my-2 animated bounceInDown"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-1">
                  <p>To:</p>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
                    <option value="3">9</option>
                    <option value="3">10</option>
                  </select>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>January</option>
                    <option value="1">Febuary</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                  </select>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>2021</option>
                    <option value="1">2022</option>
                    <option value="2">2023</option>
                    <option value="3">2024</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container my-5 py-2">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Top trades
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Active trades
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Indexed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Profit history
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </>
  );
};
