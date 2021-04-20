import axios from "axios";
import loginForm from "../components/login/loginForm";

//GLOBAL ACTIONS
export const actions = {
  SUBMITFORM: "SUBMIT_FOR_DATA",
  SUBMITFORMSUCCESS: "SUBMIT_FORM_SUCCESS",
  SUBMITFORMFAILURE: "SUBMIT_FORM_FAILURE",
  SUBMITLOGINFORM: "SUBMIT_LOGIN_FORM",
  SUBMITLOGINFORMSUCCESS: "SUBMIT_LOGIN_FORM_SUCCESS",
  SUBMITLOGINFORMFAILURE: "SUBMIT_LOGIN_FORM_FAIL",
  REQUESTUSERDETAILS: "REQUEST_USER_DETAILS",
  REQUESTUSERDETAILSSUCCESS: "REQUEST_USER_DETAILS_SUCCESS",
  REQUESTUSERDETAILSFAILUE: "REQUEST_USER_DETAILS_FAILURE",
};

//SIGN UP ACTIONS
const submitForm = () => ({
  type: actions.SUBMITFORM,
});

const submitFormSuccess = (data) => ({
  type: actions.SUBMITFORMSUCCESS,
  payload: data,
});

const submitFormFailure = () => ({
  type: actions.SUBMITFORMFAILURE,
});

export function auth(firstName, lastName, email, password, history) {
  return async (dispatch) => {
    dispatch(submitForm());
    try {
      const data = await axios.post("http://localhost:8080/posts/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(data);
      const fullname =
        data.data.savedUser.firstName + " " + data.data.savedUser.lastName;
      const userID = data.data.savedUser._id;
      localStorage.setItem("user", fullname);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userID", userID);
      dispatch(submitLoginFormSuccess());
      if (localStorage.getItem("token")) {
        history.push("/dashboard");
      }
    } catch (error) {
      console.error(error.message);
      dispatch(submitFormFailure());
    }
  };
}
// SIGN IN ACTIONS
const submitLoginForm = () => ({
  type: actions.SUBMITLOGINFORM,
});

const submitLoginFormSuccess = (data) => ({
  type: actions.SUBMITLOGINFORMSUCCESS,
  payload: {
    data,
  },
});

const submitLoginFormfail = () => ({
  type: actions.SUBMITLOGINFORMFAILURE,
});

export const loginAuth = (email, password, history) => {
  return async (dispatch) => {
    dispatch(submitLoginForm());
    try {
      const data = await axios.post("http://localhost:8080/posts/signin", {
        email,
        password,
      });
      const fullname = data.data.user.firstName + " " + data.data.user.lastName;
      const userID = data.data.user._id;
      localStorage.setItem("userID", userID);
      localStorage.setItem("user", fullname);
      localStorage.setItem("token", data.data.token);
      if (localStorage.getItem("token")) {
        history.push("/dashboard");
      }
    } catch (error) {
      dispatch(submitLoginFormfail());
      console.log(error.message);
    }
  };
};

const requestUserDetail = () => ({
  type: actions.REQUESTUSERDETAILS,
});

const requestUserdetailsSuccess = ({ data }) => ({
  type: actions.REQUESTUSERDETAILSSUCCESS,
  payload: {
    data,
  },
});

const requestUserDetailFailure = () => ({
  type: actions.REQUESTUSERDETAILSFAILUE,
});

export const getUserDetails = (id) => {
  return async (dispatch) => {
    dispatch(requestUserDetail());
    try {
      const data = await axios.get(`http://localhost:8080/posts/details/${id}`);
      console.log(data.data);
      dispatch(requestUserdetailsSuccess(data.data));
    } catch (error) {
      console.log(error.message);
      dispatch(requestUserDetailFailure());
    }
  };
};
