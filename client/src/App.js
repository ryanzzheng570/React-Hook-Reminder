import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import AddReminder from './component/AddReminder';
import Navbar from './component/Navigation/Navbar';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { Provider } from 'react-redux';
import store from './store/store'
import Routes from './Routes';

const App = () => {

  return (
    <Provider store={store}>
      <Navbar />
      <MuiThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}



export default App;
