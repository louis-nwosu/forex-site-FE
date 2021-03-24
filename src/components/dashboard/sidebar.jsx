import React from "react";
import { Link } from "react-router-dom";

//import icons..
import { BsFillBarChartFill } from "react-icons/bs";
import { AiTwotoneContainer } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";

//import stylesheet
import "../../App.css";

//import image
import userImage from "../../assets/avatar_placeholder_temporary.png";

const UserCard = () => {
  const fullname = localStorage.getItem("user");
  return (
    <div className="row">
      <div className="col-md-6 mx-auto px-3">
        <img src={userImage} className="img-fluid" alt="" />
      </div>
      <div className="col-md-12 py-3 text-light text-center">{fullname}</div>
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
              <BsFillBarChartFill className='mx-1' /> Dashboard
            </Link>
          </li>
          <li claclassNamess="nav-item">
            <Link
              to="/profile"
              className="nav-link db-nav-link py-2 my-2 rounded"
            >
              <AiTwotoneContainer className='mx-1' /> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/history  "
              className="nav-link db-nav-link  py-2 my-2 rounded"
            >
              <AiOutlineFolderOpen className='mx-1' /> history
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
              to="/investment"
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
