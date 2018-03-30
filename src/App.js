import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Accordions from './Components/Accordion';
import Button from './Components/Buttons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="topHero"></div>
        <div id="rotate">
          <div className="App-header-wrap">
            <img src={"/img/logo.png"} className="App-logo" alt="logo" />
            <h1 className="App-title">HGDT Capital Partners</h1>
            <p>A global investment firm investing in and growing software,</p>
            <p>data and technology-enabled businesses.</p>
          </div>
          
          <div className="bInner">
          </div>
          <div className="bOuter">
          </div>
          </div>
        </header>
       <div className="content-wrap">
          <Accordions/>
          <Button text="Investor Portal"/>
       </div>
      </div>
    );
  }
}

export default App;
