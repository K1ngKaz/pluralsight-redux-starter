import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/ConfigureStore';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// creating an instance of the store
const store = configureStore();

render(
  // Provider wraps Router. It's a higher order component that attaches our store to our react container components.
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
