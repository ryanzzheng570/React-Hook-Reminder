import React from 'react'
import './App.css';
import About from './component/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AddReminder from './component/AddReminder';
import MainMenu from './component/MainMenu';
import Navbar from './component/Navigation/Navbar';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MuiThemeProvider theme={theme}>
        <Router>
          <Route path='/' exact component={MainMenu} />
          {/* <Route path='/reminder' component={AddReminder}/> */}
          <Route path='/about' component={About} />
        </Router>
      </MuiThemeProvider>
    </React.Fragment>
  );
}


export default App;
