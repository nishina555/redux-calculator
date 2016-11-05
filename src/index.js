import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers'
// import './index.css';


// ReactDOM.render(
//   <CalculatorContainer />,
//   document.getElementById('root')
// );

const store = createStore(reducer)

render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
  document.getElementById('root')
)
