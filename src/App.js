import React, { Component } from 'react';
import './App.css';
import Need from './components/Need/Need.js';
import Have from './components/Have/Have.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
        advice: []
    }

  
  }
  render() {
    return (
      <div className = "main">
      <div className="App">
        <header className = "header">
        Advice Generator
        </header>
        <Need/>
        <Have/>
        </div>
      </div>
    );
  }
}

export default App;
