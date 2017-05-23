import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ThingList />
      </div>
    );
  }
}

export default App;