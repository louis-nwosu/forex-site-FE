import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";

//import stylesheet
import "../../App.css";

//import sideNav component
import { Sidebar } from "./sidebar";
import { Main } from "./main";

const Test = () => {
  let { test } = useParams();
  return (
    <>
      <p className="display-1 text-end">{test}</p>;
    </>
  );
};

const Dashboard = ({ user }) => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-nav bg-dark">
            <Sidebar user={user} />
          </div>
          <div className="col-md-10 ms-auto main">
            <Switch>
              <Route exact path={path}>
                <Main />
              </Route>
              <Route exact path={`${path}/:test`}>
                <Test />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(Dashboard);
