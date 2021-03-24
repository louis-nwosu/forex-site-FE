import React from "react";
import { connect } from "react-redux";

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

const Dashboard = ({ loading, dispatch }) => {
  console.log('loading', loading, dispatch)
  React.useEffect(() => {
    console.log("e choke!!", loading);
    console.log('who de breeeet!!')
  }, [dispatch]);
  return (
    <>
      <DBmain />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  hasError: state.hasError,
});
// Connect Redux to React
export default connect(mapStateToProps)(Dashboard);
