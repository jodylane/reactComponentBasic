import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
    return(<h1>Hello {props.name}!</h1>)
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome name="Sarah"/>

        </div>
        <p className="App-intro">
            <Tick/>
        </p>
      </div>
    );
  }

}

export default App;
