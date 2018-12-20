import React, { Component } from 'react';
import './App.css';
import './components/_Card'
import _Card from './components/_Card';
import _Factions from './components/_Factions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <_Factions />
        <div className="active-cards">
          <_Card />
        </div>
      </div>
    );
  }
}

export default App;
