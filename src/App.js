//import root react component
import React from "react";
import "./App.css";
import {connect} from 'react-redux'
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

//making local components
import Navbar from "../src/components/navbar";
import HeroSection from "../src/components/hero-section";
import { About } from "./components/about-comp";
import { Services } from "./components/services";
import { MissionStatement } from "./components/mission-stat";
import { Freq } from "./components/freq-asked";
import { Testimonials } from "./components/testimonials";
import LoginForm from "./components/login/loginForm";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";
import { Chatbot } from "./components/chatbot";
import Dashboard from "./components/dashboard/dashboard";
import {
  UserProfile,
  History,
  Withdraw,
  Investment,
} from "./components/dashboard/navigations";

//importing style shheet
import "./App.css";

const Landingpage = () => {
  return (
    <>
      <div className="hero-background">
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <MissionStatement />
      <Services />
      <Freq />
      <Testimonials />
      <Sponsors />
      <Chatbot />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/sign-in" component={LoginForm} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/history" component={History} />
          <Route exact path="/withdraw" component={Withdraw} />
          <Route exact path="/investment" component={Investment} />
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

const mapStateToProps = (state) => {

  console.log('state from the main app', state)
}

export default connect(mapStateToProps)(App)
