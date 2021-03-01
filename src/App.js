//import root react component
import React from "react";
import './App.css';

//making local components
import Navbar from "../src/components/navbar";
import HeroSection from "../src/components/hero-section";
import { About } from "./components/about-comp";
import { Services } from "./components/services";
import { MissionStatement } from "./components/mission-stat";

//importing style shheet
import "./App.css";

function App() {
  return (
    <>
      <div className='hero-background'>
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <Services />
      <MissionStatement />
    </>
  );
}

export default App;
