import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';

import API_PATHS from './constants/apiPaths';

axios.interceptors.request.use(
  request => {
    console.log(request)
    if (request.url === `${API_PATHS.import}/import`) {
      const token = localStorage.getItem('authorization_token');
      console.log(token);
      const headers = {
        ...request.headers,
        Authorization: `Basic ${token}`
      };

      return {
        ...request,
        headers
      };
    }
    return request;
  }
)

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    const { status, data } = response;

    if (status >= 400 && status < 600) {
      alert(`Error: ${status} - ${data?.message}`);
    }
    return Promise.reject(response);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
