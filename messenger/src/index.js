import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import *  as actions from './actions/chats';
import  mainReducer  from './reducers/main-reducer';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const store = createStore(mainReducer, initialState);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
) 

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
