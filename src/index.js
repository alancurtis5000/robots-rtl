import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'tachyons';

import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

import './index.css'; 

// TODO: setup store config file

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
