import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentWithFetchResources1 from './components/componentWithFetchResourses1';
import ComponentWithFetchResources2 from './components/componentWithFetchResourses2';
import ComponentWithNavbar from './components/componentWithNavbar';
import ComponentWithSetTitle from './components/componentWithSetTitle';
import ComponentWithSetTitleSimplified from './components/componentWithSetTitleSimplified';
import ComponentWithLogRender from './components/componentWithLogRender';
import ComponentWithTimeout from './components/componentWithTimeout';

class App extends Component {
  render() {
    console.log(process.env)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponentWithNavbar />
        <ComponentWithSetTitle />
        <ComponentWithSetTitleSimplified />
        <ComponentWithLogRender />
        <ComponentWithTimeout />
        {/* <ComponentWithFetchResources1 /> */}
        
        <ComponentWithFetchResources2 />
      </div>
    );
  }
}

export default App;
