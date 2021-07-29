import React from 'react'
import './App.css';
import About from './component/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddReminder from './component/AddReminder';

const App = () => {
    return (
      <Router>
      <Route path='/reminder' component={AddReminder}/>
      <Route path='/about' component={About}/>
      </Router>
    );
}


export default App;
