import React, { Component } from 'react';

class _Factions extends Component {
  render() {
    return (
      <div className="factions">
        <div className="faction-box">
          <div className="aristocrats"></div>
          <p>The Aristocrats</p>
          <p>0</p>
        </div>
        <div className="faction-box">
          <div className="church"></div>
          <p>The church</p>
          <p>0</p>
        </div>
        <div className="faction-box">
          <div className="army"></div>
          <p>The army</p>
          <p>0</p>
        </div>
        <div className="faction-box">
          <div className="peasant"></div>
          <p>The peasants</p>
          <p>0</p>
        </div>
        <div className="faction-box">
          <div className="rebels"></div>
          <p>The rebels</p>
          <p>0</p>
        </div>
      </div>
    );
  }
}

export default _Factions;