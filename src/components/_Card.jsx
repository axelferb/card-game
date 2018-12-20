import React, { Component } from 'react';

class _Card extends Component {
  render() {
    return (
      <div className="card-board">
        <div className="arrow-circle">
          <span className="arrow-card-left"></span>
        </div>
        <div className="card-Container">
          <h1>
            A card
        </h1>
        </div>
        <div className="arrow-circle">
          <span className="arrow-card-right"></span>
        </div>
      </div>
    );
  }
}

export default _Card;