import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

//local imports
import NavBar from "../nav2";
import { auth, loginAuth } from "../../store/actions";

//dependency
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

//import images
import avater from "../../assets/avatar_placeholder_temporary.png";

//import stylesheet
import "../../App.css";

const Form = ({ loginFunc, toggle }) => {
  AOS.init();

  const history = useHistory();

  //initialize state for form data
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  //set up handlers for form data
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  //TODO-------------------
  //home address, zip code, phone no
  const handleLogin = (event) => {
    event.preventDefault();
    loginFunc(firstName, lastName, email, password, history);
  };

  return (
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-md-12">
          <p className="display-5">
            Sign up and trade with confidence
            <span className="text-danger">.</span>
          </p>
        </div>
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label for="exampleInputEmail1" class="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstName}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div className="col-md-6 ms-auto">
                  <label for="exampleInputEmail1" class="form-label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleLastName}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="col-md-6 ms-auto">
                  <label for="exampleInputPassword1" className="form-label">
                    confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button
                class="btn btn-primary"
                type="submit"
                type="button"
                onClick={handleLogin}
              >
                Sign up
              </button>
            </div>
            <div className="row">
              <div className="col-md-12 py-2 text-center">
                <p>
                  Already have an Account?
                  <span
                    className="text-primary mx-3 cursor-pointer"
                    style={{ cursor: "pointer" }}
                    onClick={toggle}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SignInForm = ({ toggle, signInfunc }) => {
  //set state variables
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //hooks
  const history = useHistory();

  const handleSignin = (event) => {
    event.preventDefault();
    signInfunc(email, password, history);
  };

  //set state handlers
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  return (
    <div className="row">
      <div className="col-md-12">
        <p className="display-5 px-3 py-2">
          Already a member? Sign in<span className="text-danger">.</span>
        </p>
      </div>
      <div className="col-md-6 mx-auto">
        <div className="row">
          <div className="col-5 mx-auto py-3">
            <img src={avater} className="img-fluid" id="avater" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleSetEmail}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handleSetPassword}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div class="d-grid gap-2 px-5 py-3">
            <button
              class="btn btn-primary"
              type="submit"
              type="button"
              onClick={handleSignin}
            >
              Sign in
            </button>
          </div>
          <div className="col-md-10 text-center py-4">
            <p>
              Don't have an account?
              <span
                className="text-primary mx-2 cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={toggle}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginForm = ({ dispatch }) => {
  AOS.init();
  const sendForm = (firstName, lastName, email, password, history) => {
    dispatch(auth(firstName, lastName, email, password, history));
  };
  const sendloginForm = (email, password, history) => {
    dispatch(loginAuth(email, password, history));
  };
  const [showSignin, setShowSignIn] = React.useState(true);
  const handleShowSignIn = () => setShowSignIn(!showSignin);
  return (
    <>
      <NavBar />
      <div className="container mt-1" data-aos="fade-up">
        <div className="row">
          <div className="container mt-1">
            <div className="row py-5">
              <div className="row">
                <div className="col-md-6 mx-auto py-2 mt-2">
                  {showSignin ? (
                    <Form loginFunc={sendForm} toggle={handleShowSignIn} />
                  ) : (
                    <SignInForm
                      toggle={handleShowSignIn}
                      signInfunc={sendloginForm}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 bg-dark"></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  formLaoding: state.formLaoding,
});

export default connect(mapStateToProps)(LoginForm);
