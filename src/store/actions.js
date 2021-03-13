import axios from "axios";

//GLOBAL ACTIONS
export const actions = {
  SUBMITFORM: "SUBMIT_FOR_DATA",
  SUBMITFORMSUCCESS: "SUBMIT_FORM_SUCCESS",
  SUBMITFORMFAILURE: "SUBMIT_FORM_FAILURE",
  SUBMITLOGINFORM: "SUBMIT_LOGIN_FORM",
  SUBMITLOGINFORMSUCCESS: "SUBMIT_LOGIN_FORM_SUCCESS",
  SUBMITLOGINFORMFAILURE: "SUBMIT_LOGIN_FORM_FAIL",
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
      dispatch(submitFormSuccess(data.data.user));
      localStorage.setItem("token", data.data.user);
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
      dispatch(submitLoginFormSuccess(data.data.user));
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
