import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import HeaderNavContainer from './containers/HeaderNavContainer';
import MenuLeft from './components/MenuLeft';
import MainScreen from './components/MainScreen';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNavContainer/>
        <MainScreen/>
      </Fragment>
    );
  }
}

export default App;
