import React, { Component } from 'react';
import Navigation from './navigation';
import Home from './home';
import './App.css';

class App extends Component {
    render() {
    return (
          <div className="App">
                <Navigation />
                <Home />
                <div className="App-intro">
                </div>
          </div>
    );
  }
}

export default App;
