import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import App from './App';
import reduxStore from './reduxStore/store'

const store = reduxStore()


const jsx = (
    <Provider  store = {store}>
      <App />
    </Provider>
)


ReactDOM.render(
    jsx,
  document.getElementById('root')
);
