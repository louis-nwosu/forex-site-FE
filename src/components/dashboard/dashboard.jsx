import React from "react";

//import stylesheet
import "../../App.css";

//import sideNav component
import { Sidebar } from "./sidebar";
import { Main } from "./main";

const DBmain = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export const Dashboard = () => {
  return <>
    <DBmain />
  </>;
};

