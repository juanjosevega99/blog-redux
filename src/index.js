import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  {},
  {}
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);