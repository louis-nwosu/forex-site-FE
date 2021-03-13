import { actions } from "./actions";

const inialState = {
  user: {},
  details: {},
  formLaoding: false,
  hasError: false,
  signUpLoading: false,
  signUpError: false,
  test: 'test'
};

const store = (state = inialState, action) => {
  switch (action.type) {
    //handle cases for the sign up
    case actions.SUBMITFORM:
      return {
        ...state,
        signUpLoading: true,
      };
    case actions.SUBMITFORMSUCCESS:
      // return {
      //   ...state,
      //   user: action.payload,
      //   signUpLoading: false,
      //   signUpError: false,
      // };
      console.log(action.payload)
    case actions.SUBMITFORMFAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: true,
      };

    //handle cases for the signin
    case actions.SUBMITLOGINFORM:
      return {
        ...state,
        formLaoding: true,
      };
    case actions.SUBMITLOGINFORMSUCCESS:
      return {
        ...state,
        user: action.payload,
        formLaoding: false,
        hasError: false
      }
    case actions.SUBMITLOGINFORMFAILURE:
      return {
        ...state,
        hasError: true
      }

    default:
      return state;
  }
};

export default store;
