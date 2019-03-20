import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Mescomponents/Quotes';
import RedPand from './Mescomponents/RedPand';
import Conditionif from './Mescomponents/Conditionif';
import MesEvent from './Mescomponents/MesEvent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1> Ma Progression </h1>
          </p>
    
        </header>
        <Quotes/>
        <RedPand/>
        <Conditionif/>
        <MesEvent/>
      </div>
    );
  }
}

export default App;
