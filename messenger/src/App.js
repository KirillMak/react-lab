import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import HeaderNav from './components/HeaderNav';
import MenuLeft from './components/MenuLeft';
import MainScreen from './components/MainScreen';
import chatReducer from './reducers/chats-reducer';
import logo from './logo.svg';
import './App.css';


const store = createStore(chatReducer);

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNav/>
        <MainScreen/>
      </Fragment>
    );
  }
}

export default App;
