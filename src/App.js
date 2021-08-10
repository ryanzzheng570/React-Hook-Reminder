import React from 'react'
import './App.css';
import About from './component/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AddReminder from './component/AddReminder';
import MainMenu from './component/MainMenu';
import Navbar from './component/Navigation/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Route path='/' exact component={MainMenu} />
        {/* <Route path='/reminder' component={AddReminder}/> */}
        <Route path='/about' component={About} />
      </Router>
    </React.Fragment>
  );
}


export default App;
