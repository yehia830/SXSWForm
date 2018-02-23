import React, { Component } from 'react';
import logo from './logo.svg';
import hub from './assets/images/OHUB.png'
import Home from './components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ODrawer from './components/Drawer'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
   
        <Home />
        <ODrawer />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
