import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//import components
import { DbFirstRow } from "./dashFirstRow";
import { Chart1 } from "./dbSecRow";
import Footer from "../footer";

export const DbNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Baillie Glifford<span className="text-danger">FX</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto py-2 px-5">
            <li className="nav-item">
              <a
                className="nav-link active animated bounceInDown"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Account
              </a>
            </li>
            <li className="nav-item mx-2">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  setting
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
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const DbDashboard = () => {
  return (
    <>
      <DbNav />
      <DbFirstRow />
      <Chart1 />
      <div className="mx-3">
        <Footer />
      </div>
    </>
  );
};



export const Main = () => {
  return (
    <>
     <DbDashboard />
    </>
  );
};
