import React from "react";

import { Sidebar } from "./sidebar";
import { Profile } from "./profile";
import { Historysec } from "./history";

export const UserProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark">
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
          <div className="col-md-2 side-nav bg-dark">
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
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <p className="display-5">Withdraw</p>
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
          <div className="col-md-2 side-nav bg-dark">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <p className="display-5">Investment</p>
          </div>
        </div>
      </div>
    </>
  );
};
