import React from 'react'
import './App.css';
import About from './component/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddReminder from './component/AddReminder';
import MainMenu from './component/MainMenu';
import Navbar from './component/Navbar/Navbar';

const App = () => {
    return (
      <Router>
        <Navbar/>
        <Route path='/' exact component={MainMenu}/>
        <Route path='/reminder' component={AddReminder}/>
        <Route path='/about' component={About}/>
      </Router>
    );
}


export default App;
