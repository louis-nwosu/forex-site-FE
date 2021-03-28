import React from "react";

//import stylesheet
import "../../App.css";
import Footer from "../footer";

//local imports
import { DbNav } from "./main";

//import image
import userImage from "../../assets/avatar_placeholder_temporary.png";

const UserCard = () => {
  return (
    <>
      <div className="col-md-12 py-4 bg-dark text-light blur rounded">
        <div class="row">
          <div class="col-2 mx-auto">
            <img src={userImage} alt="happy client" class="testimonial-img" />
          </div>
        </div>
        <div className="col-md-12">
          <p class="h3 my-3 text-center px-3">{localStorage.getItem("user")}</p>
          <div className="container my-3">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="row my-2">
                  <div className="col-5">Total</div>
                  <div className="col-5 ms-auto">
                    <p className="text-end">$0</p>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-5">Bonus</div>
                  <div className="col-5 ms-auto">
                    <p className="text-end">$0</p>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-5">Coins</div>
                  <div className="col-5 ms-auto">
                    <p className="text-end">$0</p>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-5">Crypto</div>
                  <div className="col-5 ms-auto">
                    <p className="text-end">$0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Profile = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <DbNav />
          </div>
        </div>
      </div>
      <div className="container py-1">
        <div className="row py-5">
          <div className="col-md-8 mx-auto my-3">
            <div className="container">
              <div className="row">
                <UserCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
