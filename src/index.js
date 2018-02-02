import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </ Provider>,
  document.getElementById('root'));
registerServiceWorker();
