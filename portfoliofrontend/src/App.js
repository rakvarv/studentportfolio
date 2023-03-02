import './App.css';
import AppBar from './components/Appbar'
import Portfolio from './components/Portfolio'
import {ContactUs} from './components/About'
import Myskills from './components/Technologies'
import Myprograms from './components/Programs'
import Myframeworks from './components/Frameworks'
import Biography from "./components/Biography";

import Avatar from "./images/para_background.jpg";
import {Parallax} from "react-parallax";
import * as React from "react";
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Roald André's Portfolio</title>
        <meta name="description" content="Deverloper portfolio for Roald André Kvarv, made using Java/Springboot and
        react"/>
      </Helmet>
      <AppBar/>
        <Parallax strength={600} bgImage={Avatar}>
          <Portfolio/>
          <div className="content">
            <div className="text-content"></div>
          </div>
        </Parallax>
        <h1>About Me</h1>
        <Biography/>
        <h1>My Skills</h1>
        <h2>Programming Languages</h2>
        <Myskills/>
        <h2>Frameworks</h2>
        <Myprograms/>
        <h2>Programs/Applications</h2>
        <Myframeworks/>
        <ContactUs/>
    </div>
  );
}

export default App;
