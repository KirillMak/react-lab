import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import HeaderNav from './components/HeaderNav';
import MenuLeft from './components/MenuLeft';
import MainScreen from './components/MainScreen';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    /*store.subscribe(() => {
      console.log(store.getState())
    })*/
    return (
      <Fragment>
        <HeaderNav/>
        <MainScreen/>
      </Fragment>
    );
  }
}

export default App;
