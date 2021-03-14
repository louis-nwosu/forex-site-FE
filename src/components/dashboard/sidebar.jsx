import React from "react";
import { Link } from "react-router-dom";

//import stylesheet
import "../../App.css";

//import image
import userImage from "../../assets/avatar_placeholder_temporary.png";

const UserCard = ({ user }) => {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto px-3">
        <img src={userImage} className="img-fluid" alt="" />
      </div>
      {/* <div className="col-md-12 py-3 text-light">
        <p
          className="h4 text-center"
          style={{ textTransform: "capitalize" }}
        >{`${user.firstName} ${user.lastName}`}</p>
      </div> */}
    </div>
  );
};

const SideBarNavs = () => {
  return (
    <div className="container">
      <div className="row">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-link db-nav-link py-2 my-2 rounded"
              aria-current="page"
            >
              Dashboard
            </Link>
          </li>
          <li claclassNamess="nav-item">
            <Link
              to="/profile"
              className="nav-link db-nav-link py-2 my-2 rounded"
            >
              User Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/history"
              className="nav-link db-nav-link  py-2 my-2 rounded"
            >
              Deposit history
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="withdraw"
              className="nav-link db-nav-link py-2 my-2 rounded"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Withdraw
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to='/investment'
              className="nav-link db-nav-link py-2 my-2 rounded"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Investment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Sidebar = ({ user }) => {
  return (
    <>
      <div className="py-5">
        <div className="col-md-12 py-3">
          <UserCard user={user} />
        </div>
        <div className="col-md-12">
          <SideBarNavs />
        </div>
      </div>
    </>
  );
};
