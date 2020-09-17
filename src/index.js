import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import loginReducer from './reducer/loginReducer';

let initialState= {
  eMail: null,
  phoneNumber: null,
  password: null,
  confirmPassword: null,
  message: null
}
let store = createStore(loginReducer,initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
