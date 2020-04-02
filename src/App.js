import React, { Component } from 'react';
//import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import logo from './logo.svg';
import './App.css';
import GetLocalDatas from './components/GetLocalDatas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Parsing JSON Menggunakan React JS</h1>
        <GetLocalDatas/>
        <br/>
      </div>
    );
  }
}

export default App;