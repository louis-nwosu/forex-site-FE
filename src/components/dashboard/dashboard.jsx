import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

//import action
import { getUserDetails } from "../../store/actions";

//import stylesheet
import "../../App.css";

//import sideNav component
import { Sidebar } from "./sidebar";
import { Main } from "./main";

const Spinner = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={2000}
    />
  );
};

const checkLoad = (loading, hasError, deposit, withdraws, profit) => {
  if (loading) {
    return (
      <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-3 mx-auto text-center py-5 my-5">
            <Spinner />;
          </div>
        </div>
      </div>
    );
  } else if (hasError) {
    return <h1> An errror occured </h1>;
  } else {
    return <Main deposit={deposit} withdraws={withdraws} profit={profit} />;
  }
};

const DBmain = ({ loading, hasError, deposit, withdraws, profit }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark d-none d-sm-block d-sm-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-10 ms-auto main">
            {checkLoad(loading, hasError, deposit, withdraws, profit)}
          </div>
        </div>
      </div>
    </>
  );
};

const Dashboard = ({
  loading,
  hasError,
  dispatch,
  deposit,
  withdraws,
  profit,
}) => {
  const user_ID = localStorage.getItem("userID");
  console.log(deposit, withdraws);
  React.useEffect(() => {
    dispatch(getUserDetails(user_ID));
  }, [dispatch]);
  return (
    <>
      <DBmain
        loading={loading}
        hasError={hasError}
        deposit={deposit}
        withdraws={withdraws}
        profit={profit}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  hasError: state.hasError,
  deposit: state.deposit,
  withdraws: state.withdraws,
  profit: state.profit,
});
// Connect Redux to React
export default connect(mapStateToProps)(Dashboard);
