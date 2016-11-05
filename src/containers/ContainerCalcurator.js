import React, { Component } from 'react';

class CounterContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div>
          <button>0</button>
          <button>+</button>
        </div>
        <div>
          Result: <span>some value</span>
        </div>
      </div>
    );
  }
}

export default CounterContainer;
