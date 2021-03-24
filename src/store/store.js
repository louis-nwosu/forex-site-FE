import { actions } from "./actions";

const initialState = {
  deposit: "",
  withdraws: "",
  profit: "",
  loading: false,
  hasError: false,
};

const store = (state = initialState, action) => {
  switch (action.type) {
    //has initial server request for a user detail
    case actions.REQUESTUSERDETAILS:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    //handle resetting the state to handle user state if fetching is succesfull
    case actions.REQUESTUSERDETAILSSUCCESS:
      return {
        ...state,
        deposit: action.payload.deposit,
        withdraws: action.payload.withdraws,
        profit: action.payload.profit,
        loading: false,
        hasError: false,
      };
    //handle state of the app if the request isnt succesfull
    case actions.REQUESTUSERDETAILSFAILUE:
      return {
        ...state,
        hasError: true,
      };
  }
};

export default store;
