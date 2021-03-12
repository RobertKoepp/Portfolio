// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"








class App extends React.Component {
render(){


  return (
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/Home" component = {Home}/>
      <Route exact path = "/Projects" component = {Projects}/>
      <Route exact path = "/Contact" component = {Contact}/>

    </Switch>
    

  </Router>
  );
} 

}

export default App;
