import React from "react";

import { Sidebar } from "./sidebar";
import { Profile } from "./profile";
import { Historysec } from "./history";
import { DbNav } from "./main";
import Footer from "../footer";

import svg from "../../assets/undraw_download_pc33.svg";
import svg2 from "../../assets/undraw_investing_7u74.svg";

export const UserProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark d-none d-sm-block d-sm-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export const History = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark d-none d-sm-block d-sm-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <Historysec />
          </div>
        </div>
      </div>
    </>
  );
};

export const Withdraw = () => {
  const [amt, setAmt] = React.useState(0);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark d-none d-sm-block d-sm-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <DbNav />
            <div className="container py-3 my-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="h5">
                    Hello
                    <span className="text-primary mx-1">
                      {localStorage.getItem("user")},
                    </span>
                    your current balance is ${amt}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-4">
                  <img
                    src={svg}
                    className="img-fluid"
                    style={{ height: "60vh" }}
                  />
                </div>
                <div className="col-md-5 mx-1">
                  <p className="display-5 my-3">
                    Contact your account manager for Withdrawal
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="md-12">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Investment = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark d-none d-sm-block d-sm-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <DbNav />
            <div className="container py-3 my-5">
              <div className="row text-center">
                <div className="col-md-12">
                  <p className="h5">
                    all
                    <span className="text-primary mx-1">Investments,</span>
                    will be recorded here.
                  </p>
                  <p>Start investmenting to make profits.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-4">
                  <img
                    src={svg2}
                    className="img-fluid"
                    style={{ height: "60vh" }}
                  />
                </div>
                <div className="col-md-5 mx-1">
                  <p className="display-5 my-3">
                    you have no active investment
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="md-12">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
