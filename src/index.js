import React from "react";
import ReactDOM from "react-dom";
import App from "./app"


import { Provider } from 'react-redux';
import configureStore from './state/store';

import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('index');

const store = configureStore();

const render = Component => {
  return ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>,
      rootEl
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
        <NextApp />,
        rootEl
    )
  })
}