import React from "react";
import { Link, useHistory } from "react-router-dom";

//import components
import { DbFirstRow } from "./dashFirstRow";
import { Chart1 } from "./dbSecRow";
import Footer from "../footer";

export const DbNav = () => {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Baillie Glifford<span className="text-danger">FX</span>
        </Link>
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
              <Link
                to="/dashboard"
                className="nav-link active animated bounceInDown"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/dashboard" className="nav-link" href="#">
                dashboard
              </Link>
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
                    <Link to="profile" className="dropdown-item" href="#">
                      profile
                    </Link>
                  </li>
                  <li>
                    <Link to="withdraw" className="dropdown-item" href="#">
                      withdraw
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      notification
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="nav-item mx-2"
              onClick={() => {
                localStorage.clear();
                history.push("/");
              }}
            >
              <Link className="nav-link">Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const DbDashboard = ({ deposit, withdraws, profit }) => {
  return (
    <>
      <DbNav />
      <DbFirstRow dept={deposit} wt={withdraws} prt={profit} />
      <Chart1 />
      <div className="mx-3">
        <Footer />
      </div>
    </>
  );
};

export const Main = ({ deposit, withdraws, profit }) => {
  return (
    <>
      <DbDashboard deposit={deposit} withdraws={withdraws} profit={profit} />
    </>
  );
};
