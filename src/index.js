import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { applyMiddleware,createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers'
import { Provider } from 'react-redux';

const createStoreWithMMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);

ReactDOM.render(
  <Provider 
        store={createStoreWithMMiddleware(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__())}
  >
    <App />
  </Provider>
, document.getElementById('root')
);



